CLIENT = ./client
SERVER = ./backend

.PHONY: run

run:
	@make -j2 start-server start-client

start-server:
	@echo "Starting Server..."
	@cd $(SERVER) && npm start

start-client:
	@echo "Starting App..."
	@cd $(CLIENT) && npm start

build:
	@make -j2 build-docker-client build-docker-server

docker-run:
	@make -j2 build-docker-client build-docker-server run-docker-server run-docker-client

build-docker-client:
	@cd $(CLIENT) && npm install && docker build -t jesse-react-app:latest .

build-docker-server:
	@cd $(SERVER) && npm install && docker build -t jesse-server:latest .  && docker-compose up

run-docker-server:
	@cd $(SERVER) && docker run -p 4020:4020 jesse-server:latest

run-docker-client:
	@cd $(CLIENT) && docker run -p 3000:3000 jesse-react-app:latest
