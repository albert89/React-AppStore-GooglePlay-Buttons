const translations = {
      "GET IT ON": {
        "en": "GET IT ON",
        "es": "OBTENERLO EN",
        "fr": "OBTENEZ-LE SUR",
        "it": "OTTENILO SU"
      },
      "Download on the": {
        "en": "Download on the",
        "es": "Descargar en el",
        "fr": "Télécharger sur le",
        "it": "Scarica su"
      },
}

const userLang = navigator.language || navigator.userLanguage || 'en';

const languageCode = userLang.split('-')[0];

const t = (stringToLocalize) => {
    return translations[stringToLocalize][languageCode] || translations[stringToLocalize]['en'];
  }

export default t;