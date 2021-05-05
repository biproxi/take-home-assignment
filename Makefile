CLIENT = ./client
SERVER = ./backend

.PHONY: run

run:
	@make -j2 start-server start-client

start-server:
	@echo "Starting Server..."
	@cd $(SERVER) && npm install && npm start

start-client:
	@echo "Starting App..."
	@cd $(CLIENT) && npm install && npm start

build:
	@make -j2 build-docker-client build-docker-server

docker-run:
	@make -j2 build-docker-client build-docker-server run-docker

build-docker-client:
	@cd $(CLIENT) && npm install && docker build -t jesse-react-app:latest .

build-docker-server:
	@cd $(SERVER) && npm install && docker build -t jesse-server:latest .

run-docker:
	docker-compose up --build

# run-docker-client:
# 	@cd $(CLIENT) && docker run -p 3000:3000 jesse-react-app:latest
