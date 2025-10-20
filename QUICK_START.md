# 🚀 دليل البدء السريع - نشر الموقع على الإنترنت

هذا الدليل يشرح كيفية نشر الموقع على الإنترنت في أقل من 5 دقائق!

## الخيار 1: النشر على Netlify (الأسهل والأسرع) ⭐

### الخطوة 1: إنشاء حساب GitHub
1. اذهب إلى [GitHub.com](https://github.com)
2. انقر على "Sign up" (التسجيل)
3. ملء البيانات المطلوبة
4. تحقق من بريدك الإلكتروني

### الخطوة 2: رفع الموقع إلى GitHub
1. انسخ الأوامر التالية في Terminal:

```bash
cd /home/ubuntu/free_tools_website

# إضافة المستودع البعيد
git remote add origin https://github.com/YOUR_USERNAME/free_tools_website.git

# تغيير اسم الفرع إلى main
git branch -M main

# رفع الملفات
git push -u origin main
```

2. استبدل `YOUR_USERNAME` باسم المستخدم الخاص بك على GitHub

### الخطوة 3: نشر على Netlify
1. اذهب إلى [Netlify.com](https://www.netlify.com)
2. انقر على "Sign up" (التسجيل)
3. اختر "Sign up with GitHub"
4. انقر على "Authorize Netlify"
5. اختر "New site from Git"
6. اختر مستودعك `free_tools_website`
7. اترك الإعدادات كما هي
8. انقر على "Deploy site"

### الخطوة 4: انتظر النشر
- سيستغرق الأمر 1-2 دقيقة
- ستحصل على رابط مثل: `https://your-site-name.netlify.app`

### الخطوة 5: تخصيص النطاق (اختياري)
1. في لوحة تحكم Netlify
2. اذهب إلى "Site settings"
3. اختر "Domain management"
4. أضف نطاقك الخاص (إذا كان لديك واحد)

---

## الخيار 2: النشر على GitHub Pages

### الخطوة 1: رفع إلى GitHub
```bash
cd /home/ubuntu/free_tools_website

git remote add origin https://github.com/YOUR_USERNAME/free_tools_website.git
git branch -M main
git push -u origin main
```

### الخطوة 2: تفعيل GitHub Pages
1. اذهب إلى مستودعك على GitHub
2. انقر على "Settings"
3. اختر "Pages" من القائمة اليسرى
4. اختر "main" كـ source
5. انقر على "Save"

### الخطوة 3: انتظر النشر
- سيستغرق 1-2 دقيقة
- سيكون الرابط: `https://YOUR_USERNAME.github.io/free_tools_website`

---

## الخيار 3: النشر على Vercel

### الخطوة 1: إنشاء حساب Vercel
1. اذهب إلى [Vercel.com](https://vercel.com)
2. انقر على "Sign up"
3. اختر "Continue with GitHub"

### الخطوة 2: رفع إلى GitHub أولاً
```bash
cd /home/ubuntu/free_tools_website

git remote add origin https://github.com/YOUR_USERNAME/free_tools_website.git
git branch -M main
git push -u origin main
```

### الخطوة 3: نشر على Vercel
1. في لوحة تحكم Vercel
2. انقر على "New Project"
3. اختر مستودعك `free_tools_website`
4. اترك الإعدادات كما هي
5. انقر على "Deploy"

---

## ✅ بعد النشر

### 1. استبدل معرف Adsterra
```bash
# ابحث عن YOUR_PUBLISHER_ID في جميع الملفات
grep -r "YOUR_PUBLISHER_ID" .

# استبدله بمعرفك الفعلي
# ثم رفع التحديثات:
git add .
git commit -m "Update Adsterra Publisher ID"
git push
```

### 2. اختبر الموقع
- افتح الرابط الذي حصلت عليه
- تحقق من أن جميع الصفحات تعمل
- تحقق من أن الإعلانات تظهر

### 3. أضف نطاقك الخاص (اختياري)
- اشتر نطاق من GoDaddy أو Namecheap
- أشر النطاق إلى Netlify/Vercel
- تفعيل HTTPS (تلقائي)

### 4. حسّن SEO
- سجل الموقع في Google Search Console
- أرسل sitemap.xml
- راقب الأداء

---

## 🎯 معلومات مهمة

### روابط مفيدة:
- [GitHub](https://github.com) - لحفظ الكود
- [Netlify](https://netlify.com) - للنشر المجاني
- [Vercel](https://vercel.com) - بديل Netlify
- [GitHub Pages](https://pages.github.com) - نشر مجاني

### الخطوات التالية:
1. استبدل معرف Adsterra
2. أضف محتوى جديد
3. حسّن SEO
4. شارك الموقع على وسائل التواصل

### الدعم:
- اقرأ [README.md](README.md) للمزيد من المعلومات
- اقرأ [ADSTERRA_SETUP.md](ADSTERRA_SETUP.md) لدمج الإعلانات
- اقرأ [DEPLOYMENT.md](DEPLOYMENT.md) للتفاصيل الكاملة

---

## ⚠️ تنبيهات مهمة

1. **معرف Adsterra:** لا تنسَ استبدال `YOUR_PUBLISHER_ID` بمعرفك الفعلي
2. **البيانات الشخصية:** حدّث البريد الإلكتروني والهاتف في Footer
3. **HTTPS:** تأكد من أن الموقع يعمل على HTTPS
4. **الأداء:** راقب سرعة الموقع وحسّنها

---

**تم إنشاؤه:** 18 أكتوبر 2025

**آخر تحديث:** 18 أكتوبر 2025

**الحالة:** جاهز للنشر الفوري ✅

