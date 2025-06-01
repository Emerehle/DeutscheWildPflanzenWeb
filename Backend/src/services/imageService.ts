import {getAllScientificNames} from '../repositories/plantRepositories'
import { insertImageMeta } from '../repositories/imageRepository'
import cloudinary from '../cloudinary'
import { fetchWikimediaImage } from './fetchWikimediaImage';
import { isCommercialLicense } from './isCommercialLicense';

export async function processPlantImage() {
    const plants = await getAllScientificNames();
        console.log('Startet Bildverabeitung...');
    for (const plant of plants){
            console.log('Bearbeite Pflanze:', plant.WISS_NAME);
        const imageData = await fetchWikimediaImage(plant.WISS_NAME);
        if(!imageData || !isCommercialLicense(imageData.license)){
                console.log('Kein passendes Bild gefunden oder Lizenz nicht erlaubt für:', plant.WISS_NAME);
                continue;
        }

        console.log('Bild gefunden:', imageData?.url);
        const cloudinaryResult = await cloudinary.uploader.upload(imageData.url, {
            public_id: plant.WISS_NAME.replace(/\s+/g, '_')
        });

        console.log('Cloudinary Upload erfolgreich:', cloudinaryResult.secure_url);
        await insertImageMeta({
            pflanze_id: plant.id,
            original_url: imageData.url,
            cloudinary_url: cloudinaryResult.secure_url,
            titel: imageData.title,
            urheber: imageData.author,
            lizenz: imageData.license,
            lizenz_url: imageData.license_url,
            attribution: imageData.attribution,
            beschreibung: imageData.description,
            datum: imageData.date,
            originalseite_url: imageData.page_url
        });
    }
    console.log('Bildverarbeitung abgeschlossen.');
}