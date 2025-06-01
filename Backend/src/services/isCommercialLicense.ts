export function isCommercialLicense(license: string): boolean{
    if(!license) return false;

    const forbidden = ['nc', 'noncommercial', 'no commercial', 'not for commercial'];
    const licenseLower = license.toLowerCase();

    for(const word of forbidden) {
        if(licenseLower.includes(word)){
            return false;
        }
    }

    const allowed = [
        'cc0', 'public domain', 'cc by', 'cc-by', 'cc by-sa', 'cc-by-sa', 'gfdl'
    ];
    for(const word of allowed){
        if(licenseLower.includes(word)){
            return true;
        }
    }
    return false;
}