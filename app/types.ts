export const Slugs = {
  en: {
    about: 'about',
    contact: 'contact'
  },
  fr: {
    about: 'a-propos',
    contact: 'contactez-nous'
  },
  nl: {
    about: 'over-ons',
    contact: 'neem-contact-op'
  }
} as const;

export type Language = keyof typeof Slugs;

export type SlugForLanguage<T extends Language> = keyof (typeof Slugs)[T];

export function generateRoute<T extends Language>(
  language: T,
  page: SlugForLanguage<T>
): string {
  return `/${language}/${Slugs[language][page]}`;
}
