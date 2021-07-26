package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	// Loads env vars into the environment
	_ = godotenv.Load()

	// Inits a logger with standard out for basic logging
	logger := log.New(os.Stdout, "", log.Lshortfile|log.LstdFlags)

	// Loads port from env file or uses 3000 if env not available
	port := envVarOrString("PORT", ":3000")

	// Uses gorilla mux for routing (easier restful routing than go std library)
	router := mux.NewRouter()

	// Setup routes for TODO app
	router.HandleFunc("/todos", createTodo).Methods(http.MethodPost)
	router.HandleFunc("/todos/{id:[0-9]+}", deleteTodo).Methods(http.MethodDelete)
	router.HandleFunc("/todos/{id:[0-9]+}", corsForTodos).Methods(http.MethodOptions)
	router.HandleFunc("/todos/{id:[0-9]+}", editTodo).Methods(http.MethodPut)
	router.HandleFunc("/todos", getTodos).Methods(http.MethodGet)
	router.HandleFunc("/todos", corsForTodos).Methods(http.MethodOptions)

	// Sets up basic server from go std library
	server := &http.Server{
		Addr:         port,
		Handler:      router,
		ReadTimeout:  5 * time.Second,
		IdleTimeout:  120 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	// Runs server and does fatal log if any errors
	if err := server.ListenAndServe(); err != nil {
		logger.Fatal("could not listen and serve: ", err)
	}

	// TODO: handle sigterm in a more friendly manner to ensure in process web
	// requests do not get cut off
}

func envVarOrString(key string, def string) string {
	val := os.Getenv(key)
	if val == "" {
		return def
	}
	return val
}

type TodoStatus string

const (
	SourceStatusActive   = TodoStatus("Active")
	SourceStatusInactive = TodoStatus("Inactive")
)

var Todos = []*Todo{
	{ID: uint(1), Status: SourceStatusActive, Title: "Get it started"},
}
var IncrementingID = 2

type Todo struct {
	ID           uint
	Title        string
	Status       TodoStatus
	LastUpdateAt int64
	CreatedAt    int64
}

type todoCreateReq struct {
	Title string
}

func createTodo(w http.ResponseWriter, r *http.Request) {
	var req todoCreateReq
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	now := time.Now().Unix()
	todo := &Todo{
		ID:           uint(IncrementingID),
		Title:        req.Title,
		Status:       SourceStatusActive,
		LastUpdateAt: now,
		CreatedAt:    now,
	}
	Todos = append(Todos, todo)
	IncrementingID += 1

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(todo)
}

func deleteTodo(w http.ResponseWriter, r *http.Request) {
	strID := mux.Vars(r)["id"]
	id, _ := strconv.Atoi(strID)

	for i, todo := range Todos {
		if todo.ID == uint(id) {
			Todos[i] = Todos[len(Todos)-1] // Copy last element to index i.
			Todos[len(Todos)-1] = nil      // Erase last element (write zero value).
			Todos = Todos[:len(Todos)-1]   // Truncate slice.
			break
		}
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}

func editTodo(w http.ResponseWriter, r *http.Request) {
	strID := mux.Vars(r)["id"]
	id, _ := strconv.Atoi(strID)
	var todoToEdit *Todo

	for _, todo := range Todos {
		if todo.ID == uint(id) {
			todoToEdit = todo
			break
		}
	}

	var req Todo
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	todoToEdit.Status = req.Status
	todoToEdit.Title = req.Title
	todoToEdit.LastUpdateAt = time.Now().Unix()

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(todoToEdit)
}

func getTodos(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(Todos)
}

func corsForTodos(w http.ResponseWriter, r *http.Request) {
	headers := w.Header()
	headers.Add("Access-Control-Allow-Origin", "*")
	headers.Add("Vary", "Origin")
	headers.Add("Vary", "Access-Control-Request-Method")
	headers.Add("Vary", "Access-Control-Request-Headers")
	headers.Add("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
	headers.Add("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT")
	w.WriteHeader(http.StatusOK)
}
