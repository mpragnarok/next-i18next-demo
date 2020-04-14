import React from "react";
import PropTypes from "prop-types";
// This is our initialised `NextI18Next` instance
import { withTranslation, i18n } from "../i18n";

class Homepage extends React.Component {
  static getInitialProps = async ({ req }) => {
    const currentLanguage = req ? req.language : i18n.language;

    return { currentLanguage, namespacesRequired: ["common"] };
  };
  constructor(props) {
    super(props);
    this.state = {
      browserLanguages: "en",
      selectValue: "",
      availableLanguages: [
        { locale: "en", name: "English" },
        { locale: "zh", name: "Chinese(Traditional)" },
      ],
    };
  }
  static propTypes = {
    t: PropTypes.func.isRequired,
  };
  changeLocales = (locale) => {
    i18n.changeLanguage(locale);
  };

  convertLocaleCode = (code) => {
    return code.slice(0, 2) ? code.slice(0, 2) : "en";
  };

  getBrowserLanguage = () => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const userLocale = this.convertLocaleCode(userLanguage);

    this.changeLocales(userLocale);
    this.setState({ browserLanguage: userLocale, selectValue: userLocale });
  };

  componentDidMount() {
    this.getBrowserLanguage();
  }

  handleChange = (e) => {
    this.setState({ selectValue: e.target.value });
  };
  render() {
    const { browserLanguage, availableLanguages } = this.state;
    // const options = availableLanguages.map((language) => {
    //   <option value={language.locale}>{language.name}</option>;
    // });
    return (
      <div>
        <footer>{this.props.t("description")}</footer>
        <p>User's browser is using {browserLanguage}.</p>
        <select id="languages" onChange={(e) => this.handleChange(e)}>
          {availableLanguages.map((language) => (
            <option key={language.locale} value={language.locale}>
              {language.name}
            </option>
          ))}
        </select>
        <button onClick={() => this.changeLocales(this.state.selectValue)}>
          Change language
        </button>
      </div>
    );
  }
}

export default withTranslation("common")(Homepage);
