import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  alb: () => require('../assets/translations/alb.json'),
  en: () => require('../assets/translations/en.json'),
  sv: () => require('../assets/translations/sv.json'),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = locale => {
  let lang = locale ? locale : 'alb';
  translate.cache.clear();
  i18n.defaultLocale = 'alb';
  i18n.translations = {[lang]: translationGetters[lang]()};
  i18n.locale = lang;
};

export default {translate, setI18nConfig};
