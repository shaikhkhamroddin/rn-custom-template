import * as i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './en';
import fr from './fr';

interface LanguageObject {
  [key: string]: string | LanguageObject;
}

interface Languages {
  [key: string]: LanguageObject;
}

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const LANGUAGES: Languages = {
  en,
  fr,
};

const LANG_CODES: string[] = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR: i18n.Module & i18n.LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (language: string) => void) => {
    AsyncStorage.getItem('user-language', (err, language) => {
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestLanguageTag(LANG_CODES);
        callback(findBestAvailableLanguage?.languageTag ?? 'en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem('user-language', language);
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    returnNull: false,
    compatibilityJSON: 'v3',
    resources: resources,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
