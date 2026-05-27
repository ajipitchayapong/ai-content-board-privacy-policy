document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    const contentEn = document.getElementById('content-en');
    const contentTh = document.getElementById('content-th');
    const body = document.body;

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            
            // Update active state of buttons
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Apply fade-out/in animations on language change
            let activeContent = selectedLang === 'en' ? contentEn : contentTh;
            let inactiveContent = selectedLang === 'en' ? contentTh : contentEn;

            inactiveContent.style.opacity = '0';
            setTimeout(() => {
                inactiveContent.classList.add('hidden');
                activeContent.classList.remove('hidden');
                
                // Toggle body class for inline translations (.en / .th)
                if (selectedLang === 'th') {
                    body.classList.add('lang-th');
                } else {
                    body.classList.remove('lang-th');
                }
                
                // Smooth fade-in
                setTimeout(() => {
                    activeContent.style.opacity = '1';
                }, 50);
            }, 200);
        });
    });

    // Initial styles for animations
    if (contentEn && contentTh) {
        contentEn.style.transition = 'opacity 0.2s ease';
        contentTh.style.transition = 'opacity 0.2s ease';
        contentEn.style.opacity = '1';
        contentTh.style.opacity = '0';
    }
});
