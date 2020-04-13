const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("./next.config").publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    tw: "tw",
  },
  all: {
    en: "en",
    tw: "tw",
  },
};

module.exports = new NextI18Next({
  otherLanguages: ["tw"],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
});
