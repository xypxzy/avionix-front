import {format, parseISO} from "date-fns";
import {enGB, ru, tr} from "date-fns/locale";

export function formatDateOfBirth(dateOfBirth: string, locale:string) {
    const date = parseISO(dateOfBirth);
    const day = format(date, 'd');
    const year = format(date, 'yyyy');
    const month = format(date, 'LLL', { locale: locale === 'ru' ? ru : locale === 'en' ? enGB : locale === 'tr' ? tr : ru });
    return { day, month, year };
}