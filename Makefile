run:
@make -j2 backend frontend

backend:
@cd backend && npm i && npm run script build:prod && npm run script start:prod

frontend:
@cd frontend && npm i && npm run start

build:

docker compose -f docker-stack.yml build

docker-run:

docker compose -f docker-stack.yml up -d

