CLIENTDIR = ./client
SERVERDIR = ./server



run:
	@make -j2 start-server start-client

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
	@make docker-prep
	@docker-compose build

docker-run:
	@make docker-prep
	@docker-compose up --build --force-recreate

docker-prep:
	@cd $(SERVERDIR) && npm run docker-prep
	@cd $(CLIENTDIR) && npm run docker-prep

 
clean:
	@rm -rf $(CLIENTDIR)/node_modules
	@rm -rf $(SERVERDIR)/node_modules
	@rm -rf $(CLIENTDIR)/build
	@rm -rf $(SERVERDIR)/build