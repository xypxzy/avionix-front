export const minutesToHours = (minutes:number) => {
    const hours:number = Math.floor(minutes / 60);
    const remainingMinutes:number = minutes % 60;
    return ('0' + hours).slice(-2) + ':' + ('0' + remainingMinutes).slice(-2);
}

export const minutesToString = (minutes:number) => {
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

export const customGetFullDate = (dateTimeString: string, lang:string) => {
    const date = new Date(dateTimeString);
    const days: Record<string, string[]> = {
        'en': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'ru': ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        'ky': ['Жек', 'Дүй', 'Шей', 'Шар', 'Бей', 'Жум', 'Ишм'],
        'tr': ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
    };
    const months: Record<string, string[]> = {
        'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'ru': ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
        'ky': ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
        'tr': ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
    };

    const dayOfWeek = days[lang][date.getDay()];
    const month = months[lang][date.getMonth()];
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${formattedHours}:${formattedMinutes}`;
}




export const  customGetHours = (dateTimeString:string) => {
    const date = new Date(dateTimeString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}