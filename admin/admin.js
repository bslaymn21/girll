// Admin Dashboard Logic for Mashwiyatkom - Premium Edition
let currentData = getMenuItems();
let performanceChart = null;
let statsMainChart = null;

document.addEventListener('DOMContentLoaded', () => {
    // Check Login
    if (localStorage.getItem('admin_logged_in') === 'true') {
        showDashboard();
    }

    // Initial Setup
    updateStats();
    renderOrders();
    renderReservations();
    renderMenuGrid();
    loadSettings();
    
    // Sidebar active state fix
    const currentTab = localStorage.getItem('admin_active_tab') || 'dashboard';
    switchTab(currentTab);

    // Form listener
    const itemForm = document.getElementById('item-form');
    if (itemForm) itemForm.addEventListener('submit', handleFormSubmit);

    // Init Charts
    initChart();
});

function showDashboard() {
    const loginOverlay = document.getElementById('login-overlay');
    const adminLayout = document.getElementById('admin-layout');
    if (loginOverlay) loginOverlay.classList.add('hidden');
    if (adminLayout) {
        adminLayout.classList.remove('hidden');
        setTimeout(() => adminLayout.classList.add('opacity-100'), 10);
    }
}

function checkLogin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === 'admin') {
        localStorage.setItem('admin_logged_in', 'true');
        showDashboard();
    } else {
        alert('كلمة مرور خاطئة (admin)');
    }
}

function logout() {
    localStorage.removeItem('admin_logged_in');
    window.location.reload();
}

// Sidebar & Mobile Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) {
        const isHidden = sidebar.classList.contains('translate-x-full');
        if (isHidden) {
            sidebar.classList.remove('translate-x-full');
            if (overlay) {
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.add('opacity-100'), 10);
            }
        } else {
            sidebar.classList.add('translate-x-full');
            if (overlay) {
                overlay.classList.remove('opacity-100');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && !sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.add('translate-x-full');
        if (overlay) {
            overlay.classList.remove('opacity-100');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }
    }
}

// Notifications Toggle
function toggleNotifications() {
    const dropdown = document.getElementById('notif-dropdown');
    if (dropdown) dropdown.classList.toggle('hidden');
}

// Tab Switching
function switchTab(tabName) {
    localStorage.setItem('admin_active_tab', tabName);
    
    // UI: Buttons State
    document.querySelectorAll('.sidebar-item').forEach(btn => {
        btn.classList.remove('active');
    });
    const clickedBtn = document.getElementById(`tab-${tabName}`);
    if (clickedBtn) clickedBtn.classList.add('active');

    // UI: Content Sections
    const tabs = ['dashboard', 'menu', 'reservations', 'orders', 'settings', 'stats', 'qrcode'];
    tabs.forEach(t => {
        const el = document.getElementById(`content-${t}`);
        if(el) el.classList.add('hidden');
    });
    
    const targetContent = document.getElementById(`content-${tabName}`);
    if(targetContent) targetContent.classList.remove('hidden');

    const titleKeys = { 
        dashboard: "لوحة التحكم", 
        orders: "الطلبات الحالية",
        reservations: "سجل الحجوزات",
        menu: "إدارة المنيو",
        qrcode: "كود المنيو الذكي",
        settings: "إعدادات النظام",
        stats: "الرسوم البيانية"
    };
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.innerText = titleKeys[tabName] || tabName;

    if (tabName === 'dashboard' || tabName === 'stats') {
        setTimeout(initChart, 100);
    }
    if (tabName === 'qrcode') {
        generateQRCode();
    }

    if (window.innerWidth < 1024) closeSidebar();
}

function updateStats() {
    // Placeholder logic for stats
}

function getStatusBadge(status) {
    const configs = {
        pending: { bg: 'bg-amber-100/10', text: 'text-amber-500', label: 'قيد الانتظار' },
        confirmed: { bg: 'bg-green-100/10', text: 'text-green-500', label: 'مؤكد' },
        cancelled: { bg: 'bg-red-100/10', text: 'text-red-500', label: 'ملغي' }
    };
    const c = configs[status] || configs.pending;
    return `<span class="status-badge ${c.bg} ${c.text}">${c.label}</span>`;
}

function renderOrders() {
    const tbody = document.getElementById('orders-table-body');
    if (!tbody) return;
    
    // Mock for demo
    const mockOrders = [
        { id: 1023, user: 'أحمد محمود', items: '2x كيلو كفتة، 1x أرز', total: 650, status: 'pending' },
        { id: 1022, user: 'سارة يوسف', items: 'صينية التوفير', total: 850, status: 'confirmed' }
    ];

    tbody.innerHTML = mockOrders.map(o => `
        <tr class="hover:bg-slate-50/50 dark:hover:bg-white/5">
            <td class="px-8 py-5"><span class="font-black text-orange-600">#${o.id}</span></td>
            <td class="px-8 py-5 font-bold">${o.user}</td>
            <td class="px-8 py-5 text-xs">${o.items}</td>
            <td class="px-8 py-5 font-black">${o.total} جم</td>
            <td class="px-8 py-5">${getStatusBadge(o.status)}</td>
            <td class="px-8 py-5 text-left text-xs">
                <button class="bg-[#991b1b] text-white px-3 py-1.5 rounded-lg">تأكيد</button>
            </td>
        </tr>
    `).join('');
}

function renderReservations() {
    const tbody = document.getElementById('res-table-body');
    if (!tbody) return;
    
    const mockRes = [
        { id: 1, name: 'محمد رأفت', phone: '0102345678', guests: 6, time: 'اليوم، 09:30 م', status: 'pending' }
    ];

    tbody.innerHTML = mockRes.map(r => `
        <tr class="hover:bg-slate-50/50 dark:hover:bg-white/5">
            <td class="px-8 py-5 font-bold">${r.name}</td>
            <td class="px-8 py-5 text-xs">${r.phone}</td>
            <td class="px-8 py-5 font-black text-orange-600">${r.guests} أفراد</td>
            <td class="px-8 py-5 text-xs font-bold text-slate-500">${r.time}</td>
            <td class="px-8 py-5">${getStatusBadge(r.status)}</td>
            <td class="px-8 py-5 text-left"><button class="bg-[#991b1b] text-white px-3 py-1.5 rounded-lg text-xs">تأكيد</button></td>
        </tr>
    `).join('');
}

function renderMenuGrid() {
    const grid = document.getElementById('menu-grid');
    if(!grid) return;
    grid.innerHTML = '';

    currentData.forEach(item => {
        const card = document.createElement('div');
        card.className = "premium-card overflow-hidden group animate-in";
        card.innerHTML = `
            <div class="aspect-video relative overflow-hidden">
                <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-lg text-orange-600">${item.category}</div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-black italic">${item.name_ar}</h4>
                    <span class="text-orange-600 font-black text-lg">${item.price}جم</span>
                </div>
                <p class="text-[11px] text-slate-400 mb-6 leading-relaxed line-clamp-2">${item.description_ar}</p>
                <div class="flex gap-2">
                    <button class="flex-grow py-3 bg-slate-50 dark:bg-white/5 rounded-xl text-xs font-black hover:bg-orange-600 hover:text-white transition-all">تعديل</button>
                    <button class="w-12 h-12 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><span class="material-symbols-outlined text-lg">delete</span></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initChart() {
    const isDark = document.documentElement.classList.contains('dark');
    const colorPrimary = '#991b1b';
    const colorSecondary = '#ea580c';

    const dashCanvas = document.getElementById('performanceChart');
    if (dashCanvas) {
        if (performanceChart) performanceChart.destroy();
        performanceChart = new Chart(dashCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
                datasets: [{
                    data: [18, 25, 15, 30, 22, 45, 60],
                    borderColor: colorPrimary,
                    borderWidth: 4,
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { display: false }, x: { grid: { display: false } } }
            }
        });
    }

    const statsCanvas = document.getElementById('statsMainChart');
    if (statsCanvas) {
        if (statsMainChart) statsMainChart.destroy();
        statsMainChart = new Chart(statsCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4'],
                datasets: [
                    { label: 'المبيعات', data: [4200, 3800, 5100, 6200], backgroundColor: colorPrimary, borderRadius: 12 },
                    { label: 'الحجوزات', data: [2100, 1900, 2800, 3100], backgroundColor: colorSecondary, borderRadius: 12 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } }
            }
        });
    }
}

function loadSettings() {
    const settings = getSiteSettings();
    const whatsapp = document.getElementById('setting-whatsapp');
    const address = document.getElementById('setting-address_ar');
    if(whatsapp) whatsapp.value = settings.whatsapp || '';
    if(address) address.value = settings.address_ar || '';
}

function saveSettings(e) {
    e.preventDefault();
    alert('تم حفظ الإعدادات بنجاح!');
}

function generateQRCode() {
    const container = document.getElementById('qrcode-container');
    if (!container) return;
    container.innerHTML = "";
    new QRCode(container, {
        text: window.location.origin + "/menu.html",
        width: 256, height: 256,
        colorDark : "#1a1010", colorLight : "#ffffff"
    });
}

function downloadQRCode() {
    const qrImage = document.querySelector('#qrcode-container img');
    if (!qrImage) return;
    const link = document.createElement('a');
    link.download = 'mashwiyatkom-qr.png';
    link.href = qrImage.src;
    link.click();
}

function openModal() { document.getElementById('item-modal').classList.remove('hidden'); }
function closeModal() { document.getElementById('item-modal').classList.add('hidden'); }

function handleFormSubmit(e) {
    e.preventDefault();
    alert('هذا عرض تجريبي (Demo). لم يتم تغيير البيانات الفعلية.');
    closeModal();
}
