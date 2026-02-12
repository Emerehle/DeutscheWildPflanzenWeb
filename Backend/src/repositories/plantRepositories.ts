import db from '../db';

export async function getAllScientificNames(): Promise<{id: number, wiss_name: string}[]> {
    const result = await db.query('SELECT id, "wiss_name" FROM pflanzendata');
    return result.rows;
}
