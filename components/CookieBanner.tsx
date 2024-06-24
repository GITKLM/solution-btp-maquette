"use client";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../utils/Helper";
import { useEffect, useState } from "react";

declare global {
    interface Window {
      gtag: (command: string, action: string, options: Record<string, unknown>) => void;
    }
  }

const CookieBanner: React.FC = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });

      setLocalStorage("cookie_consent", cookieConsent);
      console.log("Cookie Consent: ", cookieConsent);
    }
  }, [cookieConsent]);

  return (
    <div
      className={`${
        cookieConsent === true
          ? "hidden"
          : "flex  flex-col fixed inset-x-0 bottom-0 z-50  justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8 xs:block"
      }`}
    >
      <p className="max-w-4xl z-50 text-sm leading-6 text-gray-900">
      Ce site utilise des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et offrir de meilleures expériences utilisateur. En continuant à utiliser ce site, vous consentez à notre utilisation des cookies. En savoir plus sur notre{" "}
        <Link className="font-semibold bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent" href="/politique-confidentialité">
        politique de confidentialité
        </Link>
      </p>

      <div className="flex gap-2">
        <div className="mr-16 flex flex-none items-center gap-x-5">
          <button
            onClick={() => setCookieConsent(true)}
            type="button"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accepter les 🍪
          </button>
          <button
            onClick={() => setCookieConsent(false)}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
