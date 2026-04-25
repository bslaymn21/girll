// Preloader Logic for Mashwiyatkom - Enhanced for Production Feel
(function() {
    // 1. Core Loading Logic
    function hideLoader() {
        const loader = document.getElementById('site-preloader');
        if (loader) {
            // Add a small artificial delay to ensure everything settled 
            // and the user feels the "Mashwiyatkom" branding
            setTimeout(() => {
                loader.classList.add('fade-out');
                document.body.style.overflow = '';
            }, 800); // Increased delay as requested for "ready" feel
        }
    }

    // 2. Wait for everything (DOM, Images, Fonts)
    window.addEventListener('load', () => {
        // Double check for any large images 
        const images = document.querySelectorAll('img');
        let loadedCount = 0;
        
        if(images.length === 0) {
            hideLoader();
        } else {
            images.forEach(img => {
                if(img.complete) {
                    loadedCount++;
                } else {
                    img.addEventListener('load', () => {
                        loadedCount++;
                        if(loadedCount === images.length) hideLoader();
                    });
                    img.addEventListener('error', () => {
                        loadedCount++;
                        if(loadedCount === images.length) hideLoader();
                    });
                }
            });
            if(loadedCount === images.length) hideLoader();
        }
    });

    // 3. Fallback to hide after 4 seconds regardless (prevents infinite loading)
    setTimeout(hideLoader, 4000);

    // 4. Handle Page Transitions (Interceptor)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('http') && link.target !== '_blank') {
            e.preventDefault();
            const loader = document.getElementById('site-preloader');
            if (loader) {
                loader.classList.remove('fade-out');
                const bar = loader.querySelector('.preloader-progress-bar');
                if (bar) {
                    bar.classList.remove('animate-loading');
                    void bar.offsetWidth; 
                    bar.classList.add('animate-loading');
                }
            }
            setTimeout(() => { window.location.href = href; }, 300);
        }
    });
})();
