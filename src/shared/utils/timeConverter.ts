export const minutesToHours = (minutes:number) => {
    const hours:number = Math.floor(minutes / 60);
    const remainingMinutes:number = minutes % 60;
    return ('0' + hours).slice(-2) + ':' + ('0' + remainingMinutes).slice(-2);
}