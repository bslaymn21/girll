// Language Switcher Logic
const translations = {
    ar: {
        title: "مشويات السلطان | الطعم الأصلي",
        brand: "مشويات السلطان",
        master: "Master of Grills",
        nav_menu: "القائمة",
        nav_process: "سر المهنة",
        nav_contact: "اتصل بنا",
        hero_badge: "أفضل مشويات في المدينة",
        hero_title: "فن الشواء <br> <span class='text-[#ff4d00]'>على أصوله</span>",
        hero_desc: "نختار أجود أنواع اللحوم البلدية، نتبلها بخلطتنا السرية المتوارثة، ونشويها على نار الفحم الهادئة لنقدم لكم مذاقاً لا يُنسى.",
        order_now: "اطلب الآن",
        our_secret: "سر خلطتنا",
        stats_exp: "سنة خبرة",
        stats_customers: "عميل سعيد",
        stats_fresh: "بلدي طازج",
        menu_title: "من شواية <span class='text-[#ff4d00]'>السلطان</span>",
        menu_desc: "استمتع بتشكيلة واسعة من أشهى المشويات المحضرة طازجة يومياً.",
        process_title: "كيف نصنع <span class='text-[#ff4d00]'>السحر؟</span>",
        process_desc: "نحن لا نطهو الطعام فحسب، نحن نصنع تجربة حسية متكاملة تبدأ من اختيار الذبيحة وتنتهي بتقديمها على مائدتكم.",
        proc_1_title: "لحوم بلدية 100%",
        proc_1_desc: "نتعامل مع أفضل المزارع لضمان وصول اللحوم طازجة يومياً دون تجميد.",
        proc_2_title: "التتبيلة السرية",
        proc_2_desc: "أكثر من 20 نوعاً من البهارات والأعشاب الطبيعية تمنح مشوياتنا نكهة لا تقاوم.",
        proc_3_title: "شواء على الفحم",
        proc_3_desc: "نستخدم أجود أنواع فحم الحمضيات الذي يمنح اللحم رائحة الشواء الأصيلة.",
        cart_title: "طلباتك <span class='text-[#ff4d00]'>الجاهزة</span>",
        cart_total: "إجمالي الحساب",
        cart_checkout: "إتمام الطلب عبر واتساب",
        mobile_home: "الرئيسية",
        mobile_menu: "القائمة",
        mobile_cart: "السلة",
        mobile_contact: "تواصل",
        contact_title: "نحن هنا <br> <span class='text-[#ff4d00]'>لخدمتك دائماً</span>",
        lang_toggle: "English"
    },
    en: {
        title: "Al Sultan Grills | Original Taste",
        brand: "Al Sultan Grills",
        master: "Master of Grills",
        nav_menu: "Menu",
        nav_process: "Our Secret",
        nav_contact: "Contact",
        hero_badge: "Best Grills in Town",
        hero_title: "The Art of <br> <span class='text-[#ff4d00]'>True Grilling</span>",
        hero_desc: "We select the finest local meats, season them with our inherited secret blend, and grill them over slow charcoal to deliver an unforgettable taste.",
        order_now: "Order Now",
        our_secret: "Our Secret",
        stats_exp: "Years Experience",
        stats_customers: "Happy Customers",
        stats_fresh: "Fresh Local",
        menu_title: "From <span class='text-[#ff4d00]'>Al Sultan's</span> Grill",
        menu_desc: "Enjoy a wide selection of the most delicious grills prepared fresh daily.",
        process_title: "How We Make <span class='text-[#ff4d00]'>Magic?</span>",
        process_desc: "We don't just cook food; we craft a full sensory experience that starts from livestock selection to your table.",
        proc_1_title: "100% Local Meat",
        proc_1_desc: "We work with top farms to ensure meat arrives fresh daily without freezing.",
        proc_2_title: "Secret Seasoning",
        proc_2_desc: "Over 20 types of spices and natural herbs give our grills an irresistible flavor.",
        proc_3_title: "Charcoal Grilling",
        proc_3_desc: "We use premium citrus charcoal that gives meat the authentic BBQ aroma.",
        cart_title: "Your <span class='text-[#ff4d00]'>Ready</span> Orders",
        cart_total: "Total Amount",
        cart_checkout: "Checkout via WhatsApp",
        mobile_home: "Home",
        mobile_menu: "Menu",
        mobile_cart: "Cart",
        mobile_contact: "Contact",
        contact_title: "We are here <br> <span class='text-[#ff4d00]'>To Serve You</span>",
        lang_toggle: "العربية"
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

const langBtn = document.createElement('button');
langBtn.id = 'lang-toggle';
langBtn.className = 'px-4 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d00] transition-all duration-300 font-bold text-sm';
langBtn.onclick = toggleLanguage;

document.addEventListener('DOMContentLoaded', () => {
    const headerActions = document.querySelector('header .flex.items-center.gap-4');
    if (headerActions) {
        headerActions.prepend(langBtn);
    }
    applyLanguage();
});

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
    location.reload(); // Simplest way to refresh all content and directions
}

function applyLanguage() {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    langBtn.innerText = t.lang_toggle;
    
    // Data attributes mapping could be used, but for a demo, we'll use IDs or just text
    // (This is a simplified version, usually we'd use data-i18n attributes)
}
