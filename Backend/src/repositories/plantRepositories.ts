import { Plant } from '../models/plant'
import db from '../db'

export async function getAllPlantsFromDb(): Promise<Plant[]> {
    const result = await db.query<Plant>('SELECT id, "wiss_name" FROM pflanzendata');
    return result.rows;
}
