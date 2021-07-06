NPROCS = $(shell sysctl hw.ncpu  | grep -o '[0-9]\+')
MAKEFLAGS += -j$(NPROCS)

run: run-server run-client

run-server:
	cd server; npm install; npm start;

run-client:
	cd client; yarn install; yarn start;

