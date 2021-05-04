CLIENTDIR = ./client
CLIENTBUILDDIR = $(CLIENTDIR)/build
SERVERDIR = ./server
CLIENTBUILDDIR = $(SERVERDIR)/build


.PHONY: run

run:
	@make -j2 start-server start-client

run-dev: start-server start-client


build-server:
	@echo "Building API server..."
	@cd $(SERVERDIR) && npm install

build-client:
	@echo "Building React app..."
	@cd $(CLIENTDIR) && npm install


start-server: build-server
	@echo "Starting API server..."
	@cd $(SERVERDIR) && npm run dev
	
start-client: build-client
	@echo "Starting React app..."
	@cd $(CLIENTDIR) && npm start


docker:
	@make -j2 build-docker-client build-docker-client


build-docker-client:
	@cd $(CLIENTDIR) \
	&& npm install \
	&& docker build . -t brian-bauer/biproxi-todo-client:latest


build-docker-client:
	@cd $(SERVERDIR) \
	&& npm install \
	&& tsc && \
	docker build . -t brian-bauer/biproxi-todo-server:latest


# Todo
# docker-start:
# 	@docker-compose up
