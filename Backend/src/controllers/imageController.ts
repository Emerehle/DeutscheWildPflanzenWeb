import { processPlantImage } from "../services/imageService";
import { Request, Response } from "express";

export async function startImageProcess(req: Request, res: Response) {
    await processPlantImage();
    res.send('Bildprozess abgeschlossen');
}