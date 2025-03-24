#!/bin/sh
# Up to date on 25/02/25
# Check at README.md for specifications

mkdir databases
cd databases
mkdir test_databases
cd test_databases
touch mongodb.ts
cd ../../

mkdir postman
mkdir routes
cd routes
touch index.ts
cd ../

mkdir servers
cd servers
touch server.ts test_server.ts
cd ../

mkdir src
cd src
mkdir interfaces models
touch index.ts
cd ../

mkdir testings
touch .env eslint.config.js jest.config.ts nodemon.json README.md router.ts tsconfig.json
