import { createConnection } from "typeorm";
import { Comment } from "../database/entity/Comment";
import { Post } from "../database/entity/Post";

export default async function connect() {
    return createConnection({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "minamalak",
        "password": "",
        "database": "test",
        "synchronize": true,
        "logging": false,
        "entities": [
            Post,
            Comment
        ],
        "migrations": [
            "src/database/migration/**/*.ts"
        ],
        "subscribers": [
            "src/database/subscriber/**/*.ts"
        ],
        "cli": {
            "entitiesDir": "src/database/entity",
            "migrationsDir": "src/database/migration",
            "subscribersDir": "src/database/subscriber"
        }
    });
}