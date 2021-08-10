#! /bin/sh
psql -U postgres perntodo < database.sql 
npm run serve