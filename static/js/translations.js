const flagImages = document.querySelectorAll('.flags-images img');
const textsToChange = document.querySelectorAll('[data-section]');
const imgToChange = document.querySelector('#image26');

const changeLanguages = async (language) => {
    // Agrega un parámetro de caché para evitar que el navegador use la versión en caché
    const cacheBuster = new Date().getTime();
    const requestJson = await fetch(`/languages/${language}.json?cache=${cacheBuster}`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        if (texts[section] && texts[section][value]) {
            if (textToChange.tagName === 'INPUT' && textToChange.type === 'text') {
                // Si es un input de texto, cambia el placeholder
                textToChange.placeholder = texts[section][value];
            } else {
                // Para otros elementos, cambia el innerHTML
                textToChange.innerHTML = texts[section][value];
            }
        }
    }

    //Cambia la imagen free-class
    if (texts.body && texts.body["free-class-image"]){
        imgToChange.src = texts.body["free-class-image"];
    }
};

const setLanguage = (language) => {
    localStorage.setItem('selectedLanguage', language);
    changeLanguages(language);
};

// Verifica si hay un idioma seleccionado en localStorage al cargar la página
const savedLanguage = localStorage.getItem('selectedLanguage');
if (savedLanguage) {
    changeLanguages(savedLanguage);
}

flagImages.forEach(img => {
    img.addEventListener('click', (e) => {
        const language = e.target.getAttribute('data-language');
        setLanguage(language);
    });
});
