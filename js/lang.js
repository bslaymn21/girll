// Language Switcher Logic
const translations = {
    ar: {
        title: "مشويات السلطان | الطعم الأصلي",
        preloader: "جاري التحضير...",
        brand: "مشويات السلطان",
        master: "Master of Grills",
        nav_home: "الرئيسية",
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
        menu_badge: "قائمتنا المختارة",
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
        review_badge: "آراء عملائنا",
        review_title: "ماذا يقولون عن <br> <span class='text-[#ff4d00]'>تجربة السلطان؟</span>",
        review_text: "\"أفضل كفتة أكلتها في حياتي! الطعم مدخن بشكل مثالي واللحم طري جداً. الخدمة أيضاً ممتازة.\"",
        review_author: "أحمد محمد",
        review_status: "عميل وفي",
        contact_badge: "تواصل معنا",
        contact_title: "نحن هنا <br> <span class='text-[#ff4d00]'>لخدمتك دائماً</span>",
        phone_label: "رقم الهاتف",
        phone_desc: "للحجز والاستفسار:",
        address_label: "عنواننا",
        address_desc: "القاهرة، مدينة نصر، شارع عباس العقاد، بجوار كبري الساعة.",
        map_link: "عرض على الخريطة",
        form_name: "الاسم",
        form_phone: "الهاتف",
        form_msg: "الرسالة",
        form_submit: "إرسال الرسالة",
        form_name_placeholder: "اسمك الكريم",
        form_phone_placeholder: "01xxxxxxxxx",
        form_address_placeholder: "العنوان بالتفصيل",
        footer_desc: "مشويات السلطان ليست مجرد مطعم، بل هي تجربة تذوق فريدة تجمع بين أصالة الماضي وجودة الحاضر.",
        footer_links_title: "روابط سريعة",
        footer_home: "القائمة الرئيسية",
        footer_offers: "عروض السلطان",
        footer_contact: "تواصل معنا",
        footer_hours_title: "مواعيد العمل",
        footer_delivery: "خدمة التوصيل",
        copyright: "© 2024 مشويات السلطان. جميع الحقوق محفوظة.",
        cart_title: "طلباتك <span class='text-[#ff4d00]'>الجاهزة</span>",
        cart_total_label: "إجمالي الحساب",
        cart_checkout: "إتمام الطلب عبر واتساب",
        modal_size_label: "اختر الحجم",
        modal_addon_label: "إضافات مميزة",
        modal_price_label: "السعر",
        modal_add_cart: "إضافة للسلة",
        checkout_title: "بيانات التوصيل",
        checkout_desc: "يرجى إدخال بياناتك لنتمكن من توصيل الطلب إليك",
        checkout_confirm: "تأكيد الطلب وإرسال",
        checkout_cancel: "إلغاء",
        mobile_home: "الرئيسية",
        mobile_menu: "القائمة",
        mobile_secret: "سر المهنة",
        mobile_contact: "تواصل",
        lang_toggle: "English"
    },
    en: {
        title: "Al Sultan Grills | Original Taste",
        preloader: "Preparing Magic...",
        brand: "Al Sultan Grills",
        master: "Master of Grills",
        nav_home: "Home",
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
        menu_badge: "Our Selection",
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
        review_badge: "Customer Reviews",
        review_title: "What They Say About <br> <span class='text-[#ff4d00]'>Al Sultan?</span>",
        review_text: "\"Best Kofta I've ever had! Perfect smoky taste and very tender meat. Excellent service too.\"",
        review_author: "Ahmed Mohamed",
        review_status: "Loyal Customer",
        contact_badge: "Contact Us",
        contact_title: "We are here <br> <span class='text-[#ff4d00]'>To Serve You</span>",
        phone_label: "Phone Number",
        phone_desc: "For reservations & inquiries:",
        address_label: "Our Address",
        address_desc: "Cairo, Nasr City, Abbas El Akkad St., near El Sa'a Bridge.",
        map_link: "View on Map",
        form_name: "Name",
        form_phone: "Phone",
        form_msg: "Message",
        form_submit: "Send Message",
        form_name_placeholder: "Your Name",
        form_phone_placeholder: "01xxxxxxxxx",
        form_address_placeholder: "Detailed Address",
        footer_desc: "Al Sultan Grills is not just a restaurant; it's a unique tasting experience blending heritage and quality.",
        footer_links_title: "Quick Links",
        footer_home: "Main Menu",
        footer_offers: "Sultan Offers",
        footer_contact: "Contact Us",
        footer_hours_title: "Working Hours",
        footer_delivery: "Delivery Service",
        copyright: "© 2024 Al Sultan Grills. All rights reserved.",
        cart_title: "Your <span class='text-[#ff4d00]'>Ready</span> Orders",
        cart_total_label: "Total Amount",
        cart_checkout: "Checkout via WhatsApp",
        modal_size_label: "Choose Size",
        modal_addon_label: "Premium Add-ons",
        modal_price_label: "Price",
        modal_add_cart: "Add to Cart",
        checkout_title: "Delivery Info",
        checkout_desc: "Please enter your details so we can deliver your order",
        checkout_confirm: "Confirm & Send",
        checkout_cancel: "Cancel",
        mobile_home: "Home",
        mobile_menu: "Menu",
        mobile_secret: "Secret",
        mobile_contact: "Contact",
        lang_toggle: "العربية"
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

const langBtn = document.createElement('button');
langBtn.id = 'lang-toggle';
langBtn.className = 'px-4 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d00] transition-all duration-300 font-bold text-xs uppercase tracking-widest';
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
    // Re-render menu items since they are generated dynamically
    if (typeof renderMenu === 'function') renderMenu();
}

function applyLanguage() {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    langBtn.innerText = t.lang_toggle;

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });
}
