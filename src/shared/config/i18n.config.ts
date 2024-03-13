import {Pathnames} from 'next-intl/navigation';
import {locales} from "@/src/shared/const/i18n";

export const pathnames = {
    '/': '/',
    '/flights': {
        en: '/flights',
        ru: '/samolety',
        tr: '/ucaklar',
        ky: '/samoletter',
    }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;