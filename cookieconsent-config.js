import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
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
        analytics: {}
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
                    footer: "<a href=\"dsgvo.html\">Datenschutz</a>\n<a href=\"imp.html\">Impressum</a>"
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
                            title: "Analytische Cookies",
                            description: "Diese Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu wissen, welche Seiten am meisten und am wenigsten beliebt sind und wie sich Besucher auf der Website bewegen. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym. Wenn Sie diese Cookies nicht zulassen, wissen wir nicht, wann Sie unsere Website besucht haben.",
														toggle: {
																value: "analytics",
																enabled: "Aktiviert",
																disabled: "Deaktiviert"
														},

                            linkedCategory: "analytics"
                        },
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
