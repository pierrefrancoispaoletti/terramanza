import React from "react";
import { Translator, Translate } from "react-auto-translate";
import { GOOGLE_API_KEY } from "../../_const";

const TranslatorComponent = ({ children }) => {
  const userLang = navigator.language || navigator.userLanguage;

  const cacheProvider = {
    get: (language, key) =>
      ((JSON.parse(localStorage.getItem("cz-translations")) || {})[key] || {})[
        language
      ],
    set: (language, key, value) => {
      const existing = JSON.parse(localStorage.getItem("cz-translations")) || {
        [key]: {},
      };
      existing[key] = { ...existing[key], [language]: value };
      localStorage.setItem("cz-translations", JSON.stringify(existing));
    },
  };
  return (
    <Translator
      cacheProvider={cacheProvider}
      from="fr"
      to={userLang.substr(0, 2)}
      googleApiKey={GOOGLE_API_KEY}
    >
      <Translate>{children}</Translate>
    </Translator>
  );
};

export default TranslatorComponent;
