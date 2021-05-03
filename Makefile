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


package:
	@make -j2 dockerize-server dockerize-client


dockerize-client:
	@cd $(CLIENTDIR) \
	&& npm install \
	&& docker build . -t brian-bauer/biproxi-todo-client:latest


dockerize-server:
	@cd $(SERVERDIR) \
	&& npm install \
	&& tsc && \
	docker build . -t brian-bauer/biproxi-todo-server:latest
