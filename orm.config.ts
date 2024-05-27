import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "username": "postgres-dev",
    "password": "789520",
    "database": "water-store",
    "port": 5432,
    "synchronize": true,
    "entities": ["./src/entities/*.entity{.ts,.js}"],
    "migrations": ["./src/database/migrations/*{.ts,.js}"],
    
})