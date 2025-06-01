import db from '../db';
import { ImageMeta } from '../models/image';

export async function insertImageMeta(meta: ImageMeta): Promise<void> {
    await db.query(
        `INSERT INTO bilder
        (pflanze_id, original_url, cloudinary_url, titel, urheber, lizenz, lizenz_url, attribution, beschreibung, datum, originalseite_url)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [
            meta.pflanze_id,
            meta.original_url,
            meta.cloudinary_url,
            meta.titel,
            meta.urheber,
            meta.lizenz,
            meta.lizenz_url,
            meta.attribution,
            meta.beschreibung,
            meta.datum,
            meta.originalseite_url
        ]
    );    
}