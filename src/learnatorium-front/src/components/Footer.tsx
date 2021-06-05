import React from "react";
import "../style/components/footer.css";

import {useTranslation} from "react-i18next";

function Footer() {
  const [text]= useTranslation("global");
  return (
    <footer className="uk-flex uk-flex-around">
      <div className="uk-flex uk-flex-center uk-width-1-3">
        <span uk-icon="icon:  facebook" className="uk-margin-small-top"></span>
        <span uk-icon="icon:  instagram" className="uk-margin-small-top"></span>
        <span uk-icon="icon:  twitter" className="uk-margin-small-top"></span>
        <span uk-icon="icon:  pinterest" className="uk-margin-small-top"></span>
      </div>
      <div className="uk-flex uk-flex-center uk-width-1-3">
        <span uk-icon="icon:  receiver" className="uk-margin-small-top" />
        <span className="uk-margin-small-top uk-visible@m">{text("footer.number")}+34 648 46 01 64</span>
      </div>
      <div className="uk-flex uk-flex-center uk-width-1-3  ">
        <span uk-icon="icon:  mail" className="uk-margin-small-top" />
        <span className="uk-margin-small-top uk-visible@m">abrahambarrerah@gmail.com</span>
      </div>
    </footer>
  );
}

export default Footer;
