import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  // Use /ar/... and omit prefix for default when possible
  // localePrefix: 'as-needed'
});
