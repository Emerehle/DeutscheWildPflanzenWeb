import { Application, Request, Response } from "express";
import { getAllPlantsFromDb } from '../repositories/plantRepositories';

export async function getAllPlants(_req: Request, res: Response) {
  try {
    const plants = await getAllPlantsFromDb();
    res.json(plants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
}