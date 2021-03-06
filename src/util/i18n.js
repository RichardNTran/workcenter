import i18next from 'i18next';
import en from './locales/en';
import ja from './locales/ja';

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en', // 'en'
    resources: {
      en: {
        translation: en,
      },
      ja: {
        translation: ja,
      },
    },
  });

export default i18next;
