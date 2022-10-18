import i18n, { TranslateOptions } from 'i18n-js';
import { I18nManager } from 'react-native';

type Getter = () => object;
type TranslationGetters = {
  [locale: string]: Getter;
};

const translationGetters: TranslationGetters = {
  en: () => require('localization/en.json'),
  vi: () => require('localization/vi.json'),
};

export const getSupportedLanguage = (): string[] => {
  return Object.keys(translationGetters);
};

export const translate = (
  key: string | unknown,
  config?: TranslateOptions,
): string => {
  return i18n.t(key, config);
};

export const setI18nConfig = (languageCode: string): void => {
  let languageTag = 'vi';
  const isRTL = false;
  const listLanguageSupport = Object.keys(translationGetters);
  if (listLanguageSupport && listLanguageSupport.includes(languageCode)) {
    languageTag = languageCode;
  }

  I18nManager.forceRTL(isRTL);

  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
