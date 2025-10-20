# دليل النشر والتوزيع

هذا الدليل يشرح كيفية نشر موقعك على الإنترنت والبدء في جني الأرباح من Adsterra.

## 📋 المتطلبات قبل النشر

### 1. حساب Adsterra نشط
- ✅ تم إنشاء الحساب
- ✅ تم الموافقة على الحساب
- ✅ حصلت على معرف الناشر (Publisher ID)

### 2. معرف الناشر
استبدل `YOUR_PUBLISHER_ID` في جميع الملفات بمعرفك الفعلي:

```bash
# البحث عن جميع المواضع
grep -r "YOUR_PUBLISHER_ID" /home/ubuntu/free_tools_website/
```

### 3. بيانات الاتصال
حدّث معلومات الاتصال في:
- **Footer** - البريد الإلكتروني والهاتف
- **صفحة الاتصال** - (إذا أضفت واحدة)

## 🚀 خيارات النشر

### الخيار 1: استضافة مشتركة (Shared Hosting)

**الأفضل للمبتدئين**

#### الخطوات:
1. اختر موفر استضافة (مثل Bluehost, GoDaddy, Hostinger)
2. اشتر خطة استضافة
3. قم بتحميل الملفات عبر FTP:

```bash
# استخدام WinSCP أو FileZilla
# أو عبر سطر الأوامر:
ftp your-domain.com
# ثم اسحب الملفات إلى المجلد public_html
```

4. أشر النطاق إلى الاستضافة

#### المميزات:
- ✅ سهلة الاستخدام
- ✅ رخيصة نسبياً
- ✅ لا تحتاج خبرة تقنية

#### العيوب:
- ❌ أداء محدود
- ❌ موارد مشتركة

### الخيار 2: VPS (Virtual Private Server)

**للمواقع الكبيرة**

#### الخطوات:
1. اشتر VPS من (Linode, DigitalOcean, Vultr)
2. قم بتثبيت نظام التشغيل (Ubuntu/CentOS)
3. ثبّت خادم الويب:

```bash
# تثبيت Nginx
sudo apt update
sudo apt install nginx

# تثبيت PHP (اختياري)
sudo apt install php-fpm

# تثبيت SSL
sudo apt install certbot python3-certbot-nginx
```

4. انسخ الملفات:

```bash
scp -r /home/ubuntu/free_tools_website/* user@your-vps:/var/www/html/
```

5. كوّن الخادم:

```bash
# تفعيل الموقع
sudo systemctl enable nginx
sudo systemctl start nginx

# تفعيل SSL
sudo certbot certonly --nginx -d your-domain.com
```

#### المميزات:
- ✅ أداء عالي
- ✅ تحكم كامل
- ✅ موارد مخصصة

#### العيوب:
- ❌ أغلى سعراً
- ❌ تحتاج خبرة تقنية

### الخيار 3: خدمات الاستضافة الثابتة

**مثل Netlify أو Vercel**

#### الخطوات:
1. اذهب إلى [Netlify.com](https://www.netlify.com)
2. قم بالتسجيل
3. اختر "New site from Git"
4. ربط مستودع GitHub الخاص بك
5. اضبط الإعدادات:

```yaml
# netlify.toml
[build]
  publish = "."
  command = "echo 'No build needed'"

[context.production]
  environment = { NODE_ENV = "production" }
```

6. انشر الموقع

#### المميزات:
- ✅ سهلة جداً
- ✅ مجانية (مع خيارات مدفوعة)
- ✅ SSL تلقائي
- ✅ CDN مدمج

#### العيوب:
- ❌ محدودة للمواقع الثابتة
- ❌ قد تكون بطيئة مع الإعلانات

## 🔒 تأمين الموقع

### 1. تفعيل HTTPS

```bash
# على Nginx
sudo certbot certonly --nginx -d your-domain.com

# إعادة توجيه HTTP إلى HTTPS
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

### 2. حماية من الهجمات

```bash
# تثبيت ModSecurity
sudo apt install libmodsecurity3 libmodsecurity-dev

# تحديث الخادم
sudo apt update && sudo apt upgrade
```

### 3. النسخ الاحتياطية

```bash
# نسخ احتياطية يومية
0 2 * * * tar -czf /backup/website-$(date +\%Y\%m\%d).tar.gz /var/www/html/
```

## 📊 تحسين الأداء

### 1. ضغط الملفات

```bash
# تفعيل Gzip على Nginx
gzip on;
gzip_types text/plain text/css text/javascript application/json;
gzip_min_length 1000;
```

### 2. تخزين مؤقت (Caching)

```html
<!-- في .htaccess (Apache) -->
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
</IfModule>
```

### 3. استخدام CDN

```html
<!-- استخدام Cloudflare -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
```

## 📈 تحسين SEO

### 1. ملف robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://your-domain.com/sitemap.xml
```

### 2. ملف sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://your-domain.com/android-apps.html</loc>
    <lastmod>2025-10-18</lastmod>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
</urlset>
```

### 3. Meta Tags

```html
<!-- في head -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="أدوات مجانية وتحميلات سريعة">
<meta name="keywords" content="أدوات, تطبيقات, تحميلات">
<meta name="author" content="اسمك">

<!-- Open Graph -->
<meta property="og:title" content="أدوات مجانية وتحميلات سريعة">
<meta property="og:description" content="كل ما تحتاجه في مكان واحد">
<meta property="og:image" content="https://your-domain.com/image.jpg">
<meta property="og:url" content="https://your-domain.com/">
```

## 📱 اختبار الموقع

### 1. اختبار الأداء

```bash
# استخدام Google PageSpeed Insights
# https://pagespeed.web.dev/

# أو استخدام GTmetrix
# https://gtmetrix.com/
```

### 2. اختبار التوافق

```bash
# اختبر على:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers
```

### 3. اختبار الإعلانات

```javascript
// في Console
console.log('تحقق من ظهور الإعلانات');
console.log('تحقق من عدم وجود أخطاء');
```

## 🎯 خطوات ما بعد النشر

### 1. تسجيل الموقع في محركات البحث

```bash
# Google Search Console
# https://search.google.com/search-console

# Bing Webmaster Tools
# https://www.bing.com/webmasters

# Yandex Webmaster
# https://webmaster.yandex.com/
```

### 2. إضافة Google Analytics

```html
<!-- في head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 3. مراقبة الأداء

- تحقق من إحصائيات Adsterra يومياً
- راقب حركة المرور
- حسّن المحتوى بناءً على البيانات

## 💰 تحسين الدخل من Adsterra

### 1. زيادة حركة المرور

- ✅ تحسين SEO
- ✅ التسويق عبر وسائل التواصل
- ✅ إنشاء محتوى جديد بانتظام
- ✅ بناء روابط خارجية

### 2. تحسين معدل النقر (CTR)

- ✅ ضع الإعلانات في أماكن بارزة
- ✅ استخدم ألوان جذابة
- ✅ لا تخفي الإعلانات
- ✅ استهدف دول ذات CPC عالي

### 3. زيادة عدد الإعلانات

- ✅ أضف Popunder
- ✅ أضف Push Notifications
- ✅ أضف Banner Ads
- ✅ أضف Native Ads

## 📞 الدعم والمساعدة

### للمشاكل التقنية:
- [Adsterra Support](https://support.adsterra.com)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Apache Documentation](https://httpd.apache.org/docs/)

### للمشاكل المتعلقة بالاستضافة:
- تواصل مع فريق الدعم الخاص بالاستضافة
- اقرأ قاعدة المعرفة الخاصة بهم

## ✅ قائمة التحقق قبل النشر

- [ ] استبدلت `YOUR_PUBLISHER_ID` بمعرفك الفعلي
- [ ] حدثت معلومات الاتصال
- [ ] اختبرت الموقع على أجهزة مختلفة
- [ ] تفعيل HTTPS
- [ ] أضفت robots.txt و sitemap.xml
- [ ] اختبرت الإعلانات
- [ ] سجلت الموقع في محركات البحث
- [ ] أضفت Google Analytics
- [ ] أنشأت نسخة احتياطية

---

**ملاحظة:** تأكد من الامتثال لسياسات Adsterra وقوانين الدول المستهدفة.

