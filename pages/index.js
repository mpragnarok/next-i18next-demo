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
  }
  static propTypes = {
    t: PropTypes.func.isRequired,
  };
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

export default withTranslation("common")(Homepage);
