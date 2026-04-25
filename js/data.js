const menuItems = [
    // Main Grills
    {
        id: 1,
        name_en: "Kebab & Kofta Mix",
        name_ar: "ميكس كباب وكفتة",
        price: 320,
        discountPrice: 280,
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
        description_en: "Succulent lamb kebab and traditional spiced kofta grilled over charcoal.",
        description_ar: "قطع لحم ضأن كباب وكفتة متبلة بالخلطة السرية مشوية على الفحم.",
        tags: ["Best Seller"],
        ordered: 1240
    },
    {
        id: 2,
        name_en: "Shish Tawook",
        name_ar: "شيش طاووق",
        price: 180,
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800",
        description_en: "Marinated chicken cubes grilled with colorful peppers and onions.",
        description_ar: "شيش طاووق دجاج متبل بزبادي وأعشاب مشوي مع خضروات طازجة.",
        tags: ["Special 🔥"],
        ordered: 850
    },
    {
        id: 3,
        name_en: "Lamb Chops (Rish)",
        name_ar: "ريش ضأن",
        price: 450,
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800",
        description_en: "Premium lamb chops grilled to perfection with a hint of rosemary.",
        description_ar: "ريش ضأن بلدي مشوية بخلطة الأعشاب والروزماري.",
        tags: ["Chef's Signature"],
        ordered: 500
    },
    {
        id: 4,
        name_en: "Stuffed Mombar",
        name_ar: "ممبار محشي",
        price: 90,
        category: "Starters",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800",
        description_en: "Traditional Egyptian sausage stuffed with spiced rice and herbs.",
        description_ar: "ممبار بيتي محشي خلطة أرز مميزة ومقلي لونه ذهبي.",
        tags: ["Popular"],
        ordered: 2100
    },
    {
        id: 5,
        name_en: "Mix Grill Platter (Family)",
        name_ar: "صينية مشويات عائلية",
        price: 1200,
        discountPrice: 999,
        category: "Platters",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000",
        description_en: "Huge assortment of kebab, kofta, tarab, and shish tawook with rice and salads.",
        description_ar: "وليمة عائلية من الكباب والكفتة والطرب والشيش طاووق مع أرز بسمتي وسلطات.",
        tags: ["Family Choice"],
        ordered: 450
    },
    {
        id: 6,
        name_en: "Oriental Salads Set",
        name_ar: "طقم سلطات شرقية",
        price: 60,
        category: "Starters",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
        description_en: "Tahini, Baba Ghanoush, Green Salad, and Garlic Dip.",
        description_ar: "مجموعة سلطات: طحينة، بابا غنوج، سلطة خضراء، وثومية.",
        tags: ["Vegetarian"],
        ordered: 3000
    },
    {
        id: 7,
        name_en: "Vermicelli Rice",
        name_ar: "أرز بالشعرية",
        price: 40,
        category: "Gluten-Free",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=800",
        description_en: "Traditional Egyptian rice with toasted vermicelli noodles.",
        description_ar: "أرز مصري مفلفل بالشعرية الساخنة.",
        tags: ["Classic"],
        ordered: 5000
    },
    {
        id: 8,
        name_en: "Basmati Yellow Rice",
        name_ar: "أرز بسمتي أصفر",
        price: 55,
        category: "Gluten-Free",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=800",
        description_en: "Long grain basmati rice with oriental spices and raisins.",
        description_ar: "أرز بسمتي طويل الحبة متبل بكركم وزبيب ومكسرات.",
        tags: ["Royal"],
        ordered: 4200
    }
];

const homeRecommendations = [1, 2, 5];

const siteSettings = {
    whatsapp: "201099995678",
    address_en: "Central District - Grill Boulevard, Cairo",
    address_ar: "حي جاردن سيتي - طريق المشويات، القاهرة",
    hours_en: "1:00 PM - 1:00 AM",
    hours_ar: "1 ظهراً - 1 بعد منتصف الليل"
};

function getMenuItems() { 
    const saved = localStorage.getItem('menu_items');
    return saved ? JSON.parse(saved) : menuItems; 
}
function getHomeRecommendations() { return homeRecommendations; }
function getSiteSettings() { 
    const saved = localStorage.getItem('site_settings');
    return saved ? JSON.parse(saved) : siteSettings; 
}
function getWhatsAppLink() { return `https://wa.me/${getSiteSettings().whatsapp}`; }
