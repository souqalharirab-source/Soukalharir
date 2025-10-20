# أدوات مجانية وتحميلات سريعة

موقع ويب عربي متكامل يقدم أدوات مجانية وتطبيقات وتحميلات سريعة مع دمج إعلانات Adsterra.

## 📋 المحتويات

- [الميزات](#الميزات)
- [البنية](#البنية)
- [التثبيت](#التثبيت)
- [دمج Adsterra](#دمج-adsterra)
- [التخصيص](#التخصيص)
- [النشر](#النشر)

## ✨ الميزات

- ✅ تصميم عربي احترافي وسريع الاستجابة
- ✅ دعم كامل للغة العربية (RTL)
- ✅ تصميم متوافق مع جميع الأجهزة (Mobile, Tablet, Desktop)
- ✅ دمج سهل لإعلانات Adsterra
- ✅ صفحات سياسة الخصوصية وشروط الاستخدام
- ✅ تتبع تحليلات المستخدمين
- ✅ أداء سريع وتحسين SEO

## 📁 البنية

```
free_tools_website/
├── index.html              # الصفحة الرئيسية
├── styles.css              # ملف CSS الرئيسي
├── script.js               # ملف JavaScript الرئيسي
├── privacy.html            # سياسة الخصوصية
├── terms.html              # شروط الاستخدام
├── disclaimer.html         # إخلاء المسؤولية
├── android-apps.html       # صفحة تطبيقات أندرويد (قريباً)
├── ios-apps.html           # صفحة تطبيقات iOS (قريباً)
├── pc-programs.html        # صفحة برامج الكمبيوتر (قريباً)
├── image-converter.html    # أداة تحويل الصور (قريباً)
├── audio-converter.html    # أداة تحويل الصوت (قريباً)
├── text-editor.html        # محرر النصوص (قريباً)
└── README.md               # هذا الملف
```

## 🚀 التثبيت

### المتطلبات
- متصفح ويب حديث (Chrome, Firefox, Safari, Edge)
- خادم ويب (Apache, Nginx, أو أي خادم آخر)

### خطوات التثبيت

1. **انسخ جميع الملفات إلى مجلد على خادمك:**
```bash
cp -r free_tools_website/* /var/www/html/
```

2. **تأكد من أن جميع الملفات لها الأذونات الصحيحة:**
```bash
chmod 644 *.html *.css *.js
chmod 755 /var/www/html
```

3. **افتح الموقع في متصفحك:**
```
http://localhost/
```

## 🎯 دمج Adsterra

### الخطوة 1: إنشاء حساب Adsterra

1. اذهب إلى [Adsterra.com](https://www.adsterra.com)
2. قم بإنشاء حساب جديد
3. انتظر الموافقة على حسابك

### الخطوة 2: الحصول على معرف الناشر

بعد الموافقة على حسابك:
1. اذهب إلى لوحة التحكم
2. ابحث عن "Publisher ID" أو "معرف الناشر"
3. انسخ معرفك

### الخطوة 3: دمج الكود

#### أ) إعلانات Popunder

في ملف `index.html`، استبدل `YOUR_PUBLISHER_ID` بمعرفك:

```javascript
(function() {
    var adsterra_code = {
        "at_type": "popunder",
        "at_work": "cpm",
        "at_pub": "YOUR_PUBLISHER_ID",  // ← استبدل هنا
        "at_tag": "popunder_tag",
        "at_split": 1
    };
    
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + 
             '//www.adsterra.com/code/registerScript/' + adsterra_code.at_pub;
    
    ((document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scr));
})();
```

#### ب) إعلانات البانر

استبدل الكود في `script.js` في دالة `loadAdsterraBanners()`:

```javascript
function loadAdsterraBanners() {
    const adSpaces = document.querySelectorAll('.ad-space');
    
    adSpaces.forEach((space, index) => {
        const adId = 'ad-' + index;
        space.id = adId;
        
        // أضف كود Adsterra للبانر هنا
        const adScript = document.createElement('script');
        adScript.type = 'text/javascript';
        adScript.src = 'https://www.adsterra.com/code/registerScript/YOUR_PUBLISHER_ID';
        space.appendChild(adScript);
    });
}
```

#### ج) إشعارات الدفع (اختياري)

لتفعيل إشعارات الدفع من Adsterra:

1. افتح `index.html`
2. ابحث عن قسم "Push Notification Script"
3. قم بإلغاء التعليق عن الكود واستبدل `YOUR_PUBLISHER_ID`

### الخطوة 4: اختبار الإعلانات

1. افتح الموقع في متصفح
2. تحقق من ظهور الإعلانات
3. تأكد من أن الإعلانات تظهر بشكل صحيح

## 🎨 التخصيص

### تغيير الألوان

في ملف `styles.css`، عدّل متغيرات CSS:

```css
:root {
    --primary-color: #2563eb;      /* اللون الأساسي */
    --secondary-color: #1e40af;    /* اللون الثانوي */
    --accent-color: #f59e0b;       /* لون التركيز */
    --text-dark: #1f2937;          /* لون النص الغامق */
    --text-light: #6b7280;         /* لون النص الفاتح */
    --bg-light: #f9fafb;           /* لون الخلفية الفاتح */
    --bg-white: #ffffff;           /* لون الخلفية الأبيض */
}
```

### تغيير المحتوى

1. **الشعار والعنوان:**
```html
<h1>🛠️ أدوات مجانية</h1>
<p class="tagline">كل ما تحتاجه في مكان واحد</p>
```

2. **معلومات الاتصال:**
```html
<p>البريد الإلكتروني: <a href="mailto:info@example.com">info@example.com</a></p>
<p>الهاتف: +966 XX XXX XXXX</p>
```

3. **الأقسام والمحتوى:**
عدّل محتوى الأقسام المختلفة حسب احتياجاتك

## 📊 تحليلات المستخدمين

الموقع يتضمن وظائف تحليلية بسيطة:

```javascript
// تتبع مشاهدات الصفحة
trackPageView();

// تتبع نقرات الأزرار
trackUserInteractions();

// تتبع ظهور الإعلانات
trackAdImpressions();
```

يمكنك دمج خدمات تحليلات متقدمة مثل Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 الاستجابة والتوافق

الموقع مصمم ليكون متوافقًا مع:
- ✅ الهواتف الذكية (320px وما فوق)
- ✅ الأجهزة اللوحية (768px وما فوق)
- ✅ أجهزة الكمبيوتر (1024px وما فوق)

## 🔒 الأمان

### نصائح الأمان

1. **استخدم HTTPS:**
```bash
# تفعيل SSL/TLS على خادمك
```

2. **حماية من XSS:**
```javascript
// تجنب استخدام innerHTML مع بيانات المستخدم
element.textContent = userInput; // آمن
```

3. **حماية من CSRF:**
أضف رموز CSRF للنماذج إن وجدت

## 🚀 النشر

### على Hosting عام

1. **رفع الملفات:**
```bash
ftp://your-domain.com
# أو استخدم File Manager في لوحة التحكم
```

2. **تأكد من الإعدادات:**
- تفعيل HTTPS
- ضبط Domain الصحيح
- تفعيل Gzip Compression

### على GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/free_tools_website.git
git push -u origin main
```

ثم فعّل GitHub Pages من إعدادات المستودع.

## 📈 تحسين SEO

### Meta Tags

```html
<meta name="description" content="مجموعة من الأدوات المجانية والتطبيقات المفيدة">
<meta name="keywords" content="أدوات مجانية, تطبيقات, تحميلات">
<meta name="author" content="اسمك">
<meta property="og:title" content="أدوات مجانية وتحميلات سريعة">
<meta property="og:description" content="كل ما تحتاجه في مكان واحد">
```

### Sitemap

أنشئ ملف `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/privacy.html</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 🐛 استكشاف الأخطاء

### الإعلانات لا تظهر

1. تحقق من معرف الناشر
2. تأكد من أن الحساب مفعّل
3. افتح Console في المتصفح وابحث عن الأخطاء

### الموقع بطيء

1. ضغط الصور
2. تقليل عدد الطلبات
3. استخدام CDN

### مشاكل التوافق

1. استخدم أدوات اختبار المتصفح
2. اختبر على أجهزة حقيقية
3. تحقق من console للأخطاء

## 📞 الدعم والمساعدة

للمزيد من المعلومات:
- [Adsterra Documentation](https://www.adsterra.com/documentation)
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License.

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:
1. عمل Fork للمستودع
2. إنشاء فرع جديد
3. عمل Commit للتغييرات
4. عمل Push للفرع
5. فتح Pull Request

---

**آخر تحديث:** 18 أكتوبر 2025

**الإصدار:** 1.0.0

