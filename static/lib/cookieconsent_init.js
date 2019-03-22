/* eslint-disable func-names */
window.addEventListener("load", function () {
  const disableStr = "ga-disable-UA-4384583-3"
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#3c404d",
        "text": "#d6d6d6"
      },
      "button": {
        "background": "#8bed4f"
      }
    },
    "theme": "edgeless",
    /*"position": "top",*/
    "type": "opt-out",
    "content": {
      "href": "/privacy-policy"
    },

    onInitialise: function (/* status */) {
      const type = this.options.type;
      const didConsent = this.hasConsented();
      if (type == "opt-in" && didConsent) {
        // enable cookies
        cookie_consent_delete_cookie(disableStr)
      }
      if (type == "opt-out" && !didConsent) {
        // disable cookies
        window.gaOptout();
      }
    },

    onStatusChange: function (/* status, chosenBefore */) {
      const type = this.options.type;
      const didConsent = this.hasConsented();
      if (type == "opt-in" && didConsent) {
        // enable cookies
        cookie_consent_delete_cookie(disableStr)
      }
      if (type == "opt-out" && !didConsent) {
        // disable cookies
        window.gaOptout();
      }
    },

    onRevokeChoice: function () {
      const type = this.options.type;
      if (type == "opt-in") {
        // disable cookies
        window.gaOptout();
      }
      if (type == "opt-out") {
        // enable cookies
        cookie_consent_delete_cookie(disableStr)
      }
    },
  })
});

function cookie_consent_delete_cookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}