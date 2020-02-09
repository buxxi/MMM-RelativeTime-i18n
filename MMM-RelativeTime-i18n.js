Module.register("MMM-RelativeTime-i18n",{
	defaults: {},

	start: function() {
        this.invalidLocales = [];
        for (locale of Object.keys(this.config)) {
            if (moment.locales().indexOf(locale) != -1) {
                this.overrideLocale(locale, this.config[locale]);
            } else {
                this.invalidLocales.push(locale);
            }
        }
    },

    notificationReceived: function(notification, payload, sender) {
		if (notification == "ALL_MODULES_STARTED" && this.invalidLocales.length > 0) {
			this.sendNotification("SHOW_ALERT", { 
				title : this.name + ": " + this.translate("CONFIG_ERROR_TITLE"),
				message : this.translate("CONFIG_ERROR_MESSAGE", { locales : this.invalidLocales })
			});
		}
	},
    
    getScripts: function() {
		return ["moment.js"];
    },

    getTranslations: function() {
		return {
				sv: "translations/sv.json",
				en: "translations/en.json"
		};
	},
    
    overrideLocale: function(locale, data) {
        moment.updateLocale(locale, {
            relativeTime: data
        });
    }
});
