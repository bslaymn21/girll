// Premium Visual Effects for Mashwiyatkom Demo
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initHeaderScroll();
    initClickEffects();
});

// 1. Scroll Reveal Animation
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // Elements to reveal
    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-up, .grid > div');
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
}

// 2. Header Style Change on Scroll
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// 3. Simple Toast Notification System
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-3 pointer-events-none';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item animate-in-up bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 pointer-events-auto`;
    
    const icon = type === 'success' ? 'check_circle' : 'info';
    const iconColor = type === 'success' ? 'text-green-500' : 'text-orange-500';

    toast.innerHTML = `
        <span class="material-symbols-outlined ${iconColor}">${icon}</span>
        <span class="font-bold text-sm text-slate-800 dark:text-white">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('animate-out-up');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// 4. Subtle Click Feedback
function initClickEffects() {
    document.querySelectorAll('button, .clickable').forEach(btn => {
        btn.addEventListener('mousedown', () => btn.classList.add('active-scale'));
        btn.addEventListener('mouseup', () => btn.classList.remove('active-scale'));
        btn.addEventListener('mouseleave', () => btn.classList.remove('active-scale'));
    });
}
