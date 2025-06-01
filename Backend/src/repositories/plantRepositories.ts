import db from '../db';

export async function getAllScientificNames(): Promise<{id: number, WISS_NAME: string}[]> {
    const result = await db.query('SELECT id, "WISS_NAME" FROM pflanzen');
    return result.rows;
}
