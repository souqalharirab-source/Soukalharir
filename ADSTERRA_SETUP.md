# دليل دمج إعلانات Adsterra المتقدم

هذا الدليل يشرح كيفية دمج إعلانات Adsterra بشكل احترافي وفعال على موقعك.

## 📋 جدول المحتويات

1. [الإعداد الأساسي](#الإعداد-الأساسي)
2. [أنواع الإعلانات](#أنواع-الإعلانات)
3. [التكامل التفصيلي](#التكامل-التفصيلي)
4. [تحسين الأداء](#تحسين-الأداء)
5. [استكشاف الأخطاء](#استكشاف-الأخطاء)

## الإعداد الأساسي

### الخطوة 1: إنشاء حساب Adsterra

1. اذهب إلى [www.adsterra.com](https://www.adsterra.com)
2. انقر على "Sign Up" (التسجيل)
3. اختر "Publisher" (ناشر)
4. ملء البيانات المطلوبة:
   - البريد الإلكتروني
   - كلمة المرور
   - اسم الموقع
   - رابط الموقع
   - نوع المحتوى

### الخطوة 2: الموافقة والتفعيل

- انتظر رسالة تأكيد على بريدك الإلكتروني
- انقر على رابط التفعيل
- قد تستغرق الموافقة من 24 إلى 48 ساعة

### الخطوة 3: الحصول على معرف الناشر

بعد الموافقة:
1. سجل دخولك إلى لوحة التحكم
2. اذهب إلى "Account" أو "الحساب"
3. ابحث عن "Publisher ID" أو "معرف الناشر"
4. انسخ المعرف (مثال: `12345678`)

## أنواع الإعلانات

### 1. إعلانات Popunder

**الوصف:** نافذة منفصلة تفتح خلف النافذة الحالية

**المميزات:**
- معدل نقر عالي
- لا تزعج المستخدم كثيراً
- دخل جيد

**الكود:**

```html
<script>
(function() {
    var adsterra_code = {
        "at_type": "popunder",
        "at_work": "cpm",
        "at_pub": "YOUR_PUBLISHER_ID",
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
</script>
```

### 2. إعلانات البانر

**الوصف:** إعلانات ثابتة أو عائمة على الصفحة

**الأحجام الشائعة:**
- 728x90 (Leaderboard)
- 300x250 (Medium Rectangle)
- 160x600 (Wide Skyscraper)
- 300x600 (Half Page)

**الكود:**

```html
<div id="ad-banner-1"></div>

<script>
(function() {
    var adsterra_code = {
        "at_type": "banner",
        "at_work": "cpm",
        "at_pub": "YOUR_PUBLISHER_ID",
        "at_tag": "banner_tag",
        "at_split": 1
    };
    
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + 
             '//www.adsterra.com/code/registerScript/' + adsterra_code.at_pub;
    
    ((document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scr));
})();
</script>
```

### 3. إشعارات الدفع (Push Notifications)

**الوصف:** إشعارات تظهر على سطح المكتب

**المميزات:**
- معدل تحويل عالي
- لا تؤثر على تجربة المستخدم
- دخل ممتاز

**الكود:**

```html
<script>
(function() {
    var adsterra_code = {
        "at_type": "push",
        "at_work": "cpm",
        "at_pub": "YOUR_PUBLISHER_ID",
        "at_tag": "push_tag",
        "at_split": 1
    };
    
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + 
             '//www.adsterra.com/code/registerScript/' + adsterra_code.at_pub;
    
    ((document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scr));
})();
</script>
```

### 4. الإعلانات الأصلية (Native Ads)

**الوصف:** إعلانات تتناسب مع تصميم الموقع

**الكود:**

```html
<div id="native-ad"></div>

<script>
(function() {
    var adsterra_code = {
        "at_type": "native",
        "at_work": "cpm",
        "at_pub": "YOUR_PUBLISHER_ID",
        "at_tag": "native_tag",
        "at_split": 1
    };
    
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + 
             '//www.adsterra.com/code/registerScript/' + adsterra_code.at_pub;
    
    ((document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scr));
})();
</script>
```

## التكامل التفصيلي

### الطريقة 1: دمج متعدد الإعلانات

```html
<!DOCTYPE html>
<html dir="rtl">
<head>
    <title>موقعي</title>
</head>
<body>
    <!-- محتوى الصفحة -->
    
    <!-- إعلان البانر العلوي -->
    <div id="ad-top" style="text-align: center; padding: 20px;">
        <!-- سيتم إدراج الإعلان هنا -->
    </div>
    
    <!-- محتوى الصفحة -->
    
    <!-- إعلان البانر الوسطي -->
    <div id="ad-middle" style="text-align: center; padding: 20px;">
        <!-- سيتم إدراج الإعلان هنا -->
    </div>
    
    <!-- محتوى الصفحة -->
    
    <!-- Popunder -->
    <script>
    (function() {
        var adsterra_code = {
            "at_type": "popunder",
            "at_work": "cpm",
            "at_pub": "YOUR_PUBLISHER_ID",
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
    </script>
    
    <!-- Push Notifications -->
    <script>
    (function() {
        var adsterra_code = {
            "at_type": "push",
            "at_work": "cpm",
            "at_pub": "YOUR_PUBLISHER_ID",
            "at_tag": "push_tag",
            "at_split": 1
        };
        
        var scr = document.createElement('script');
        scr.type = 'text/javascript';
        scr.async = true;
        scr.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + 
                 '//www.adsterra.com/code/registerScript/' + adsterra_code.at_pub;
        
        ((document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scr));
    })();
    </script>
</body>
</html>
```

### الطريقة 2: دمج ديناميكي مع JavaScript

```javascript
// دالة لتحميل إعلانات Adsterra
function loadAdsterraAds(publisherId, adType = 'popunder') {
    var adsterra_code = {
        "at_type": adType,
        "at_work": "cpm",
        "at_pub": publisherId,
        "at_tag": adType + "_tag",
        "at_split": 1
    };
    
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + 
             '//www.adsterra.com/code/registerScript/' + publisherId;
    
    ((document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scr));
}

// استخدام الدالة
document.addEventListener('DOMContentLoaded', function() {
    loadAdsterraAds('YOUR_PUBLISHER_ID', 'popunder');
    loadAdsterraAds('YOUR_PUBLISHER_ID', 'push');
});
```

### الطريقة 3: دمج مع التحكم في الوقت

```javascript
// تحميل الإعلانات بعد 3 ثوانٍ من تحميل الصفحة
setTimeout(function() {
    var adsterra_code = {
        "at_type": "popunder",
        "at_work": "cpm",
        "at_pub": "YOUR_PUBLISHER_ID",
        "at_tag": "popunder_tag",
        "at_split": 1
    };
    
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + 
             '//www.adsterra.com/code/registerScript/' + adsterra_code.at_pub;
    
    ((document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scr));
}, 3000);
```

## تحسين الأداء

### 1. تحسين معدل النقر (CTR)

```javascript
// تتبع نقرات الإعلانات
document.addEventListener('click', function(e) {
    if (e.target.closest('[data-ad]')) {
        console.log('تم النقر على إعلان');
        // أرسل البيانات إلى خدمة التحليل
    }
});
```

### 2. تحسين موضع الإعلانات

**الأماكن الفعالة:**
- أعلى الصفحة (Header)
- وسط المحتوى
- نهاية الصفحة (Footer)
- في الشريط الجانبي

### 3. تحسين توقيت الإعلانات

```javascript
// عرض الإعلان بعد قراءة المحتوى
let scrollPercentage = 0;

window.addEventListener('scroll', function() {
    scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage > 50 && !adLoaded) {
        loadAdsterraAds('YOUR_PUBLISHER_ID');
        adLoaded = true;
    }
});
```

## استكشاف الأخطاء

### المشكلة: الإعلانات لا تظهر

**الحلول:**
1. تحقق من معرف الناشر
2. تأكد من تفعيل الحساب
3. افتح Console وابحث عن الأخطاء
4. تحقق من حجب الإعلانات في المتصفح

### المشكلة: الإعلانات تظهر ببطء

**الحلول:**
1. استخدم `async` في السكريبت
2. حمّل الإعلانات بعد تحميل الصفحة
3. استخدم CDN للملفات الثقيلة

### المشكلة: الدخل منخفض

**الحلول:**
1. أضف أنواع إعلانات متعددة
2. حسّن موضع الإعلانات
3. زد عدد الزوار
4. استهدف دول ذات CPC عالي

## نصائح إضافية

### 1. تتبع الأداء

```javascript
// تتبع ظهور الإعلانات
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            console.log('إعلان مرئي');
        }
    });
});

observer.observe(document.getElementById('ad-space'));
```

### 2. الامتثال للسياسات

- لا تشجع النقر على الإعلانات
- لا تخفي الإعلانات
- لا تعدّل كود Adsterra
- احترم سياسات الخصوصية

### 3. اختبار الإعلانات

```javascript
// اختبر الإعلانات في بيئة التطوير
if (window.location.hostname === 'localhost') {
    console.log('وضع الاختبار: الإعلانات معطلة');
    // لا تحمّل الإعلانات الحقيقية
}
```

## الدعم والمساعدة

للمزيد من المعلومات:
- [Adsterra Support](https://support.adsterra.com)
- [Adsterra Documentation](https://www.adsterra.com/documentation)
- [Adsterra Blog](https://www.adsterra.com/blog)

---

**ملاحظة مهمة:** استبدل `YOUR_PUBLISHER_ID` بمعرف الناشر الفعلي الخاص بك من لوحة التحكم في Adsterra.

