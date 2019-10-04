function translate(en, it) {

    const language = localStorage.getItem("language");

    const dictionary = getElement(language, en, it)

    document.documentElement.lang = language

    const keys = Object.keys(dictionary);
    keys.forEach(function(key) {

        document.getElementById(key).innerHTML = dictionary[key]

    });

}

function translateTitle(en, it) {

    const language = localStorage.getItem("language");

    const title = getElement(language, en, it)

    document.title = title

}

function getElement(language, en, it) {

    switch (language) {

        case "it":

            return it

        default:

            return it

            // return en

    }

}