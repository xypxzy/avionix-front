export const minutesToHours = (minutes:number) => {
    const hours:number = Math.floor(minutes / 60);
    const remainingMinutes:number = minutes % 60;
    return ('0' + hours).slice(-2) + ':' + ('0' + remainingMinutes).slice(-2);
}

export const formatMinutesToHoursAndMinutes = (minutes:number) => {
    if (isNaN(minutes) || minutes < 0) {
        return 'Invalid input';
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
        return `${remainingMinutes} m.`;
    } else if (remainingMinutes === 0) {
        return `${hours} h.`;
    } else {
        return `${hours} h. ${remainingMinutes} m.`;
    }
}

export const formatDateFromString = (dateTimeString:string) => {
    const date = new Date(dateTimeString);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${formattedHours}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
}
