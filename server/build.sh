#!/bin/sh

# compose the containers from the docker-compose.yml file
# use --build flag if you make changes to docker or server related files to rebuild

# create db schema
docker compose up -d --build
docker exec -it server npm run migratedown
docker exec -it server npm run migrateup
docker exec -it server npm run seed
# fill db schema with sample data
