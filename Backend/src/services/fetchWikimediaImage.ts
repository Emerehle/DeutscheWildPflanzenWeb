import axios from 'axios';
import { WikimediaImageData,WikimediaPage } from '../models/wikimedia';

export async function fetchWikimediaImage(wissName:string): Promise<WikimediaImageData | null> {
    const apiURL = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(wissName)}&gsrlimit=1&prop=imageinfo&iiprop=url|extmetadata|user|canonicaltitle&origin=*`;
    
    try{
        const response = await axios.get(apiURL);
        const pages = response.data?.query?.pages;
        if(!pages) return null;

        const page = Object.values(pages)[0] as WikimediaPage;
        if(!page.imageinfo || !page.imageinfo[0]) return null;

        const info = page.imageinfo[0];
        const meta = info.extmetadata || {};

        return {
            url: info.url,
            title: page.title || '',
            author: meta.Artist?.value || '',
            license: meta.LicenseShortName?.value || '',
            license_url: meta.LicenseUrl?.value || '',
            attribution: meta.AttributionRequired?.value || '',
            description: meta.ImageDescription?.value || '',
            date: meta.DateTimeOriginal?.value || '',
            page_url: info.descriptionurl || ''
        };
    } catch (error) {
        console.error('Wikimedia API Error:', error);
        return null;
    }
}