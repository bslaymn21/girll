// Language Selector Logic for Mashwiyatkom
document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferred_language') || 'ar';
    applyLanguage(preferredLang);
});

function setLanguage(lang) {
    localStorage.setItem('preferred_language', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    if (lang === 'ar') {
        html.classList.add('rtl-mode');
    } else {
        html.classList.remove('rtl-mode');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Attribute translations
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('title', translations[lang][key]);
        }
    });
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('preferred_language') || 'ar';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}
