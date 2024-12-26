import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({

  locales: ['en', 'vi', 'jp'],

  defaultLocale: 'en',
  localePrefix: 'never',
});

export type Locale = (typeof routing.locales)[number];
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
