'use client'

import {useLocale} from 'next-intl';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import React from "react";
import {locales} from "@/src/shared/const/i18n";

export default function LanguageSwitcher() {
  const {usePathname, useRouter} = createSharedPathnamesNavigation()

  const pathname = usePathname()
  const locale = useLocale();
  const router = useRouter();

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, {locale: e.target.value});
  }

  return (
    <select
      value={locale}
      onChange={onLocaleChange}
      className="flex h-10 w-20 items-center justify-between rounded-md border border-input
      bg-background px-2 text-sm text-foreground ring-offset-background
      placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring
      focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>

  )
}
