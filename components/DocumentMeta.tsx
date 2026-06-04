"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function DocumentMeta() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("meta.title");
    document.documentElement.lang = i18n.language;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", t("meta.description"));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", t("meta.title"));
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", t("meta.description"));
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", t("meta.title"));
    }

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.setAttribute("content", t("meta.description"));
    }
  }, [t, i18n.language]);

  return null;
}
