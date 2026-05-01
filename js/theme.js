// Theme Switcher Logic
const themeBtn = document.createElement('button');
themeBtn.id = 'theme-toggle';
themeBtn.className = 'w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d00] transition-all duration-300 group';
themeBtn.innerHTML = '<span class="material-symbols-outlined text-xl">dark_mode</span>';
themeBtn.onclick = toggleTheme;

// Wait for header to load or inject manually
document.addEventListener('DOMContentLoaded', () => {
    const headerActions = document.querySelector('header .flex.items-center.gap-4');
    if (headerActions) {
        headerActions.prepend(themeBtn);
    }
    
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
        themeBtn.innerHTML = '<span class="material-symbols-outlined text-xl">light_mode</span>';
    }
});

function toggleTheme() {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    themeBtn.innerHTML = isLight 
        ? '<span class="material-symbols-outlined text-xl">light_mode</span>' 
        : '<span class="material-symbols-outlined text-xl">dark_mode</span>';
    
    showToast(isLight ? 'تم تفعيل الوضع الفاتح' : 'تم تفعيل الوضع الغامق', 'info');
}
