CLIENT = ./client
SERVER = ./server


run:
	@make -j2 start-server start-client

start-server:
	@echo "Starting Server..."
	@cd $(SERVER) && yarn && yarn start

start-client:
	@echo "Starting App..."
	@cd $(CLIENT) && yarn && yarn start