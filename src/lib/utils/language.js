/**
 * @fileoverview Tools for language selection and validation.
 * TODO(devnook): Extract isSupportedLocale to a common format.
 */

/**
 * A map of supported language codes to their full names.
 * @const
 */
const languageNames = {
  en: 'English',
  pl: 'Polish',
};

/**
 * A list of supported languages.
 * @const
 */
const supportedLanguages = Object.keys(languageNames);

/**
 * Temporary validation function (see TODO).
 * @param {string} lang Language code.
 * @return {Boolean} Whether the language code is supported.
 */
function isValidLanguage(lang) {
  return supportedLanguages.indexOf(lang) > -1;
}

export default {
  languageNames,
  isValidLanguage,
  supportedLanguages,
}