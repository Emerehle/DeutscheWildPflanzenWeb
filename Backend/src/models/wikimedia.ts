export interface WikimediaImageData {
    url: string;
    title: string;
    author: string;
    license: string;
    license_url: string;
    attribution: string;
    description: string;
    date: string;
    page_url: string;
}

export interface WikimediaPage{
    title: string,
    imageinfo: Array<{
        url: string;
        descriptionurl: string;
        extmetadata: any;
    }>;
}