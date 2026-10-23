import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    autoShow: true,    
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {}
    },
    language: {
        default: "de",
        translations: {
            de: {
                consentModal: {
                    title: "Wir verwenden Cookies",
                    description: "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die weitere Nutzung dieser Website stimmen Sie der Nutzung von Cookies zu.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: ""
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Modal schließen",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Hier können Sie die Verwendung von Cookies auf dieser Website verwalten. Wählen Sie die Schaltfläche \"Alle akzeptieren\", um alle Cookies zu akzeptieren, oder wählen Sie \"Alle ablehnen\", um nur die notwendigen Cookies zu akzeptieren.",
                        },
                        {
                            title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen festgelegt, die einer Anforderung von Diensten gleichkommen, wie etwa das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen. Wir nutzen zudem einen lokalen Speicher (LocalStorage), um sicherzustellen, dass Sie wichtige Informationen wie unsere Stellenanzeige nur einmalig pro Besuch angezeigt bekommen. Sie können Ihren Browser so einstellen, dass er Sie über diese Cookies informiert oder sie blockiert, aber einige Teile der Website funktionieren dann nicht. Diese Cookies speichern keine personenbezogenen Daten.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Funktionelle Cookies & Externe Medien",
                            description: "Diese Cookies und externen Dienste ermöglichen es uns, erweiterte Funktionen und interaktive Inhalte bereitzustellen, wie beispielsweise das Anzeigen von Lageplänen und Landkarten. Wenn Sie diese Cookies nicht zulassen, können diese Dienste (z. B. Kartendienste) nicht korrekt angezeigt werden, und einige Bereiche der Website sind eventuell nicht nutzbar.",
                            toggle: {
                                value: "functionality", // Oder "targeting", je nachdem wie Ihre Kategorie heißt
                                enabled: "Aktiviert",
                                disabled: "Deaktiviert"
                            },
                            linkedCategory: "functionality" // Muss mit dem Namen unter 'categories' übereinstimmen
                        },
,
                        {
                            title: "Weitere Informationen",
                            description: "Weitere Informationen zu den von uns verwendeten Cookies finden Sie in unserer Datenschutzerklärung.",
                        }
                    ]
                }
            }
        }
    }
});
