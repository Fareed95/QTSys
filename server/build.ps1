docker compose up -d --build
docker exec -it server npm run migratedown
docker exec -it server npm run migrateup
docker exec -it server npm run seed
