import React from "react";

// This is our initialised `NextI18Next` instance
import { withTranslation, i18n } from "../i18n";

class Footer extends React.Component {
  static getInitialProps({ req }) {
    const currentLanguage = req ? req.language : i18n.language;
    return { currentLanguage };
  }
  constructor(props) {
    super(props);
  }
  changeLocales = () => {
    i18n.changeLanguage(i18n.language === "en" ? "tw" : "en");
  };
  render() {
    const { currentLanguage } = this.props;
    return (
      <div>
        <footer>{this.props.t("description")}</footer>
        <button onClick={() => this.changeLocales()}>
          Change {currentLanguage}
        </button>
      </div>
    );
  }
}

export default withTranslation("common")(Footer);
