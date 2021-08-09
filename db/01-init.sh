psql #!/bin/bash
set -e
export PGPASSWORD=postgres;
psql -v ON_ERROR_STOP=1 --username "postgres" --dbname "postgres" <<-EOSQL
  CREATE DATABASE perntodo;
  \connect perntodo postgres
  BEGIN;
    CREATE TABLE IF NOT EXISTS todo (
	  todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    status VARCHAR(255),
    "createdAt" integer,
    "lastUpdatedAt" integer
	);
  COMMIT;
EOSQL
