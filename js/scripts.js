// Grill Demo - JavaScript Logic

const menuData = [
    {
        id: 1,
        name: "مشكل كباب وكفتة",
        category: "المشويات",
        price: 280,
        description: "سيخ كباب بلدي مع سيخ كفتة مشوية على الفحم، يقدم مع أرز بسمتي وسلطات.",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1000&auto=format&fit=crop",
        sizes: [
            { name: "وجبة فردية", extra: 0 },
            { name: "كيلو كامل", extra: 520 },
            { name: "نصف كيلو", extra: 150 }
        ],
        addons: [
            { name: "أرز بسمتي إضافي", price: 30 },
            { name: "سلطة طحينة", price: 15 },
            { name: "خبز محمص", price: 10 }
        ]
    },
    {
        id: 2,
        name: "ريش ضاني ملكي",
        category: "المشويات",
        price: 450,
        description: "ريش لحم ضاني متبلة بخلطة السلطان السرية ومشوية ببطء على نار هادئة.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
        sizes: [
            { name: "نصف كيلو", extra: 0 },
            { name: "كيلو كامل", extra: 400 }
        ],
        addons: [
            { name: "خضار مشوي", price: 40 },
            { name: "ثومية", price: 15 }
        ]
    },
    {
        id: 3,
        name: "فروج مشوي لبناني",
        category: "الدواجن",
        price: 190,
        description: "دجاجة كاملة متبلة بالثوم والليمون والزعتر المشوي على الفحم.",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=1000&auto=format&fit=crop",
        sizes: [
            { name: "دجاجة كاملة", extra: 0 },
            { name: "نصف دجاجة", extra: -90 }
        ],
        addons: [
            { name: "بطاطس محمرة", price: 35 },
            { name: "مخلل مشكل", price: 15 }
        ]
    },
    {
        id: 4,
        name: "صينية السلطان (عائلية)",
        category: "العروض",
        price: 950,
        description: "كيلو مشكل (كباب، كفتة، شيش) + دجاجة مشوية + أرز + 4 أنواع سلطات + خبز طازج.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
        sizes: [
            { name: "صينية وسط", extra: 0 },
            { name: "صينية VIP (كيلو إضافي)", extra: 600 }
        ],
        addons: [
            { name: "كوكاكولا 2 لتر", price: 65 },
            { name: "طبق كبة (4 قطع)", price: 80 }
        ]
    }
];

// Default fallback for items without specific options
menuData.forEach(item => {
    if (!item.sizes) item.sizes = [{ name: "حجم عادي", extra: 0 }];
    if (!item.addons) item.addons = [];
});

let cart = JSON.parse(localStorage.getItem('grillCart')) || [];
let currentCategory = 'الكل';
let selectedSize = null;
let selectedAddons = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu();
    updateCart();
    
    // Hide Preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('opacity-0');
            setTimeout(() => preloader.style.display = 'none', 700);
        }
    }, 1500);
});

// Category Filter Logic
function renderCategories() {
    const categories = ['الكل', ...new Set(menuData.map(item => item.category))];
    const container = document.getElementById('category-filters');
    
    container.innerHTML = categories.map(cat => `
        <button onclick="filterMenu('${cat}')" 
                class="category-btn whitespace-nowrap flex-shrink-0 px-8 py-4 rounded-2xl font-bold transition-all
                       ${currentCategory === cat ? 'bg-[#ff4d00] text-white shadow-lg' : 'bg-white/5 text-gray-400 hover:bg-white/10'}">
            ${cat}
        </button>
    `).join('');
}

function filterMenu(category) {
    currentCategory = category;
    renderCategories();
    renderMenu();
}

// Menu Rendering Logic
function renderMenu() {
    const container = document.getElementById('menu-grid');
    const filtered = currentCategory === 'الكل' 
        ? menuData 
        : menuData.filter(item => item.category === currentCategory);

    container.innerHTML = filtered.map(item => `
        <div class="menu-card rounded-[40px] overflow-hidden group bg-white/5 border border-white/5 p-4 hover:border-[#ff4d00]/30 transition-all duration-500">
            <div class="relative overflow-hidden rounded-[32px] cursor-pointer" onclick="openProductModal(${item.id})">
                <img src="${item.image}" alt="${item.name}" class="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="px-6 py-3 bg-white text-black font-black rounded-2xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">عرض التفاصيل</span>
                </div>
            </div>
            <div class="mt-6 px-2">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-black group-hover:text-[#ff4d00] transition-colors cursor-pointer" onclick="openProductModal(${item.id})">${item.name}</h3>
                    <span class="text-[#ff4d00] font-black">${item.price} ج.م</span>
                </div>
                <p class="text-gray-500 text-sm mb-6 line-clamp-2">${item.description}</p>
                <button onclick="openProductModal(${item.id})" class="w-full py-4 bg-[#ff4d00] text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
                    <span class="material-symbols-outlined">add_shopping_cart</span>
                    اطلب الآن
                </button>
            </div>
        </div>
    `).join('');
}

// Product Modal Logic
function openProductModal(productId) {
    const item = menuData.find(p => p.id === productId);
    if (!item) return;

    const modal = document.getElementById('product-modal');
    document.getElementById('modal-product-image').src = item.image;
    document.getElementById('modal-product-name').textContent = item.name;
    document.getElementById('modal-product-category').textContent = item.category;
    document.getElementById('modal-product-description').textContent = item.description;
    
    // Reset selections
    selectedSize = item.sizes[0];
    selectedAddons = [];
    
    renderSizes(item);
    renderAddons(item);
    updateModalPrice(item);
    
    const addBtn = document.getElementById('modal-add-btn');
    addBtn.onclick = () => {
        const cartItemId = `${item.id}-${selectedSize.name}-${selectedAddons.map(a => a.name).join(',')}`;
        const itemWithTotal = {
            ...item,
            cartId: cartItemId,
            selectedSize: selectedSize,
            selectedAddons: [...selectedAddons],
            totalPrice: calculateItemTotal(item)
        };
        addToCartWithDetails(itemWithTotal);
        closeProductModal();
    };

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.bg-[var(--bg)]').classList.remove('scale-90');
    modal.querySelector('.bg-[var(--bg)]').classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

function renderSizes(item) {
    const container = document.getElementById('modal-sizes');
    container.innerHTML = item.sizes.map(size => `
        <button onclick="selectSize(${item.id}, '${size.name}')" 
                class="size-btn flex-1 py-3 px-4 rounded-xl border font-bold transition-all text-sm
                       ${selectedSize.name === size.name ? 'bg-[#ff4d00] border-[#ff4d00] text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}">
            ${size.name}
            <span class="block text-[10px] opacity-70">${size.extra > 0 ? '+' + size.extra : size.extra < 0 ? size.extra : ''} ج.م</span>
        </button>
    `).join('');
}

function selectSize(productId, sizeName) {
    const item = menuData.find(p => p.id === productId);
    selectedSize = item.sizes.find(s => s.name === sizeName);
    renderSizes(item);
    updateModalPrice(item);
}

function renderAddons(item) {
    const container = document.getElementById('modal-addons');
    if (item.addons.length === 0) {
        container.parentElement.style.display = 'none';
        return;
    }
    container.parentElement.style.display = 'block';
    container.innerHTML = item.addons.map(addon => `
        <button onclick="toggleAddon(${item.id}, '${addon.name}')" 
                class="addon-btn p-4 rounded-xl border text-right transition-all
                       ${selectedAddons.find(a => a.name === addon.name) ? 'bg-[#ff4d00]/10 border-[#ff4d00] text-[#ff4d00]' : 'bg-white/5 border-white/10 text-gray-400'}">
            <div class="flex justify-between items-center">
                <span class="text-xs font-bold">${addon.name}</span>
                <span class="text-[10px]">+${addon.price} ج.م</span>
            </div>
        </button>
    `).join('');
}

function toggleAddon(productId, addonName) {
    const item = menuData.find(p => p.id === productId);
    const addon = item.addons.find(a => a.name === addonName);
    const index = selectedAddons.findIndex(a => a.name === addonName);
    
    if (index > -1) {
        selectedAddons.splice(index, 1);
    } else {
        selectedAddons.push(addon);
    }
    
    renderAddons(item);
    updateModalPrice(item);
}

function updateModalPrice(item) {
    const total = calculateItemTotal(item);
    document.getElementById('modal-product-price').textContent = `${total} ج.م`;
}

function calculateItemTotal(item) {
    const sizeExtra = selectedSize ? selectedSize.extra : 0;
    const addonsTotal = selectedAddons.reduce((acc, a) => acc + a.price, 0);
    return item.price + sizeExtra + addonsTotal;
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.add('scale-90');
    modal.querySelector('.modal-content').classList.remove('scale-100');
    document.body.style.overflow = 'auto';
}

// Cart Management
function addToCartWithDetails(itemWithDetails) {
    const existingItem = cart.find(p => p.cartId === itemWithDetails.cartId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...itemWithDetails, quantity: 1 });
    }
    
    updateCart();
    showToast(`${itemWithDetails.name} أضيف للسلة بنجاح!`, 'success');
}

function removeFromCart(cartId) {
    cart = cart.filter(p => p.cartId !== cartId);
    updateCart();
}

function updateQuantity(cartId, delta) {
    const item = cart.find(p => p.cartId === cartId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(cartId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const mobileCartCount = document.getElementById('mobile-cart-count');
    
    localStorage.setItem('grillCart', JSON.stringify(cart));
    
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.totalPrice * item.quantity), 0);
    
    if (mobileCartCount) {
        mobileCartCount.textContent = totalCount;
        mobileCartCount.classList.toggle('hidden', totalCount === 0);
    }
    
    cartTotal.textContent = `${totalPrice} ج.م`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center opacity-30 py-20">
                <span class="material-symbols-outlined text-8xl mb-6">shopping_basket</span>
                <p class="text-xl font-bold">السلة فارغة حالياً</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="flex items-center gap-6 p-4 bg-white/5 rounded-3xl group border border-white/5 hover:border-white/10 transition-all">
            <img src="${item.image}" class="w-20 h-20 rounded-2xl object-cover">
            <div class="flex-grow">
                <h4 class="font-bold text-sm mb-1">${item.name}</h4>
                <p class="text-[10px] text-gray-500 mb-2">${item.selectedSize.name} ${item.selectedAddons.length > 0 ? '+ ' + item.selectedAddons.map(a => a.name).join(', ') : ''}</p>
                <p class="text-[#ff4d00] font-black text-sm">${item.totalPrice * item.quantity} ج.م</p>
                <div class="flex items-center gap-4 mt-3">
                    <button onclick="updateQuantity('${item.cartId}', -1)" class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#ff4d00] transition-colors">-</button>
                    <span class="font-black text-xs">${item.quantity}</span>
                    <button onclick="updateQuantity('${item.cartId}', 1)" class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#ff4d00] transition-colors">+</button>
                </div>
            </div>
            <button onclick="removeFromCart('${item.cartId}')" class="text-gray-600 hover:text-red-500 transition-colors">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    `).join('');
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const isOpen = drawer.classList.contains('translate-x-0');
    
    if (isOpen) {
        drawer.classList.add('translate-x-full');
        drawer.classList.remove('translate-x-0');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    } else {
        drawer.classList.remove('translate-x-full');
        drawer.classList.add('translate-x-0');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
    }
}

// Order Management Logic
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('برجاء إضافة أصناف للسلة أولاً', 'error');
        return;
    }
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.remove('scale-90');
    modal.querySelector('.modal-content').classList.add('scale-100');
    
    document.getElementById('modal-name').value = localStorage.getItem('customerName') || '';
    document.getElementById('modal-phone').value = localStorage.getItem('customerPhone') || '';
    document.getElementById('modal-address').value = localStorage.getItem('customerAddress') || '';
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.add('scale-90');
    modal.querySelector('.modal-content').classList.remove('scale-100');
}

function confirmOrder() {
    const name = document.getElementById('modal-name').value;
    const phone = document.getElementById('modal-phone').value;
    const address = document.getElementById('modal-address').value;

    if (!name || !phone || !address) {
        showToast('برجاء ملء كافة البيانات المطلوبة', 'error');
        return;
    }

    localStorage.setItem('customerName', name);
    localStorage.setItem('customerPhone', phone);
    localStorage.setItem('customerAddress', address);

    const totalPrice = cart.reduce((acc, item) => acc + (item.totalPrice * item.quantity), 0);
    const orderDetails = cart.map(item => {
        const options = `${item.selectedSize.name}${item.selectedAddons.length > 0 ? ' + ' + item.selectedAddons.map(a => a.name).join(', ') : ''}`;
        return `- ${item.name} (${options}) [${item.quantity} × ${item.totalPrice}]`;
    }).join('%0A');
    
    const message = `*طلب جديد من مشويات السلطان*%0A%0A` +
                    `*بيانات العميل:*%0A` +
                    `الاسم: ${name}%0A` +
                    `الهاتف: ${phone}%0A` +
                    `العنوان: ${address}%0A%0A` +
                    `*الطلبات:*%0A${orderDetails}%0A%0A` +
                    `*الإجمالي:* ${totalPrice} ج.م`;
    
    window.open(`https://wa.me/201000000000?text=${message}`);
    
    cart = [];
    updateCart();
    closeCheckoutModal();
    toggleCart();
    showToast('تم إرسال طلبك بنجاح!', 'success');
}

// Custom Toast System
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-[#ff4d00]'
    };

    toast.className = `${colors[type]} text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in-up`;
    toast.innerHTML = `
        <span class="material-symbols-outlined">${type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}</span>
        <span class="font-bold text-sm">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-x-10');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Navigation Active State Highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    const updateLink = (link) => {
        const href = link.getAttribute('href');
        link.classList.remove('text-[#ff4d00]');
        link.classList.add('text-gray-500');
        
        if (href === `#${current}` || (current === 'home' && href === '#')) {
            link.classList.add('text-[#ff4d00]');
            link.classList.remove('text-gray-500');
        }
    };

    navLinks.forEach(updateLink);
    mobileLinks.forEach(updateLink);
});

// Scroll to Top Logic
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.remove('opacity-0', 'translate-y-10');
        scrollTopBtn.classList.add('opacity-1', 'translate-y-0');
    } else {
        scrollTopBtn.classList.add('opacity-0', 'translate-y-10');
        scrollTopBtn.classList.remove('opacity-1', 'translate-y-0');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
