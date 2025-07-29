import type { Locale } from './translations';

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  
  if (locale && ['de', 'ru'].includes(locale)) {
    return locale as Locale;
  }
  
  return 'en';
}

export function getLocalizedPath(path: string, locale: Locale, base: string = ''): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (locale === 'en') {
    return `${base}/${cleanPath}`.replace(/\/+/g, '/');
  }
  
  return `${base}/${locale}/${cleanPath}`.replace(/\/+/g, '/');
}

export const localeNames = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский'
} as const; 