/* eslint-disable func-names */
window.addEventListener("load", function () {
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
    "position": "top",
    "content": {
      "href": "/privacy-policy"
    }
  })
});
