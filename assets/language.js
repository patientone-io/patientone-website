(() => {
  const supported = new Set(['pl', 'en']);
  let language = 'pl';
  try {
    const saved = localStorage.getItem('pref_lang');
    language = supported.has(saved) ? saved : (navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en');
  } catch {
    language = (navigator.language || '').toLowerCase().startsWith('pl') ? 'pl' : 'en';
  }
  // Run in the head so the first render already uses the chosen language.
  document.documentElement.lang = language;
  function updateButtons() {
    document.querySelectorAll('[data-set-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.setLanguage === language));
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.language-switch').forEach(control => { control.hidden = false; });
    updateButtons();
    document.querySelectorAll('[data-set-language]').forEach(button => {
      button.addEventListener('click', () => {
        const next = button.dataset.setLanguage;
        if (!supported.has(next)) return;
        language = next;
        document.documentElement.lang = language;
        try { localStorage.setItem('pref_lang', language); } catch { /* Switching also works without storage. */ }
        updateButtons();
      });
    });
  });
})();
