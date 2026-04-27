import { db } from "../database/database";

export interface ExampleItem {
  id: number;
  image: string;
  name: string;
  role: string;
}

// отримати всі
export async function getAllExamples(): Promise<ExampleItem[]> {
  return await db.getAllAsync<ExampleItem>(`SELECT * FROM example`);
}

// додати
export async function createExample(image: string, name: string, role: string) {
  await db.runAsync(
    `INSERT INTO example (image, name, role) VALUES (?, ?, ?)`,
    [image, name, role],
  );
}

// видалити
export async function deleteExample(id: number) {
  await db.runAsync(`DELETE FROM example WHERE id = ?`, [id]);
}
