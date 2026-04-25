// Global Cart Badge Logic for all pages
document.addEventListener('DOMContentLoaded', () => {
    updateGlobalCartBadge();
    
    // Listen for storage changes in case cart is updated in another tab
    window.addEventListener('storage', (e) => {
        if (e.key === 'mashwiyatkom_cart') {
            updateGlobalCartBadge();
        }
    });
});

function updateGlobalCartBadge() {
    const cartData = JSON.parse(localStorage.getItem('mashwiyatkom_cart') || '[]');
    const count = cartData.length;
    
    // Find all global badges (usually in Bottom Nav)
    const badges = document.querySelectorAll('.global-cart-badge');
    badges.forEach(badge => {
        if (count > 0) {
            badge.innerText = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });
    
    // Also update the floating cart count if it exists on the page
    const floatingCount = document.getElementById('floating-cart-count');
    if (floatingCount) {
        if (count > 0) {
            floatingCount.innerText = count;
            floatingCount.classList.remove('hidden');
        } else {
            floatingCount.classList.add('hidden');
        }
    }
}
