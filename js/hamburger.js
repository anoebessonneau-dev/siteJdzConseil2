document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.mobile-menu-toggle');
    toggles.forEach(toggle => {
        // try to find a referenced nav by aria-controls, or fallback to next sibling
        const navId = toggle.getAttribute('aria-controls');
        const nav = navId ? document.getElementById(navId) : toggle.nextElementSibling;

        toggle.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            if (nav) nav.classList.toggle('open');
        });

        // close nav if clicking outside (mobile)
        document.addEventListener('click', function (e) {
            if (!nav) return;
            if (!nav.contains(e.target) && !toggle.contains(e.target)) {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
