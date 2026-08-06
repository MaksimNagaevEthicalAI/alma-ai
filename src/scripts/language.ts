import { translations } from "./translations";

export function getLanguage() {

    if (typeof window === "undefined") {

        return "en";

    }

    try {

        const raw = localStorage.getItem("registration");

        if (!raw) {

            return "en";

        }

        const registration = JSON.parse(raw);

        switch (registration.language) {

            case "Русский":
                return "ru";

            case "Español":
                return "es";

            default:
                return "en";

        }

    }

    catch {

        return "en";

    }

}

export function getTexts() {

    const language = getLanguage();

    if (language === "ru") {

        return translations.ru;

    }

    return translations.en;

}