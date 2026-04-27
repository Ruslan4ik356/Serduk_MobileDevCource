import * as SQLite from "expo-sqlite";

// відкриваємо (або створюємо) БД
export const db = SQLite.openDatabaseSync("app.db");

export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS examples (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      age INTEGER NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS example (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      api_id TEXT,
      image TEXT,
      name TEXT,
      role TEXT
    );
  `);
}
