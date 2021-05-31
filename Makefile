FRONTNEND = ./frontend
BACKEND = ./backend

run:
	@make -j2 backend frontend

backend:
	@cd $(BACKEND) && npm install && npm run-script build:prod && npm run-script start:prod

frontend:
	@cd $(FRONTEND) && npm i && npm run start

build:
	docker compose -f docker-stack.yml build

docker-run:
	docker compose -f docker-stack.yml up -d
