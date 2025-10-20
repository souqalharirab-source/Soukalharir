// ============================================
// أدوات مجانية وتحميلات سريعة - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('موقع أدوات مجانية وتحميلات سريعة - تم التحميل بنجاح');
    
    // Initialize all features
    initializeNavigation();
    initializeAdsterra();
    initializeSmoothScroll();
    initializeAnalytics();
});

// ============================================
// Navigation Functions
// ============================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    // Update active state
                    navLinks.forEach(l => l.style.opacity = '0.8');
                    this.style.opacity = '1';
                }
            }
        });
    });
}

// ============================================
// Adsterra Integration
// ============================================

function initializeAdsterra() {
    // This function initializes Adsterra ads
    // Replace YOUR_PUBLISHER_ID with your actual Adsterra publisher ID
    
    const publisherId = 'YOUR_PUBLISHER_ID';
    
    // Load Adsterra popunder script
    loadAdsterraPopunder(publisherId);
    
    // Load banner ads
    loadAdsterraBanners();
    
    // Optional: Load push notifications
    // loadAdsterraPushNotifications(publisherId);
    
    console.log('تم تهيئة إعلانات Adsterra');
}

function loadAdsterraPopunder(publisherId) {
    // Popunder ads configuration
    const adsterraCode = {
        at_type: 'popunder',
        at_work: 'cpm',
        at_pub: publisherId,
        at_tag: 'popunder_tag',
        at_split: 1
    };
    
    // Create and load the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = ('https:' === document.location.protocol ? 'https:' : 'http:') + 
                 '//www.adsterra.com/code/registerScript/' + publisherId;
    
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
}

function loadAdsterraBanners() {
    // Banner ads configuration
    // These will be displayed in the ad-space divs
    
    const adSpaces = document.querySelectorAll('.ad-space');
    
    adSpaces.forEach((space, index) => {
        // Create a unique ID for each ad space
        const adId = 'ad-' + index;
        space.id = adId;
        
        // Add Adsterra banner code here
        // This is a placeholder - replace with your actual Adsterra code
        const adScript = document.createElement('script');
        adScript.type = 'text/javascript';
        adScript.innerHTML = `
            // Adsterra banner ad code
            // Replace with your actual Adsterra banner code
        `;
        space.appendChild(adScript);
    });
}

function loadAdsterraPushNotifications(publisherId) {
    // Push notification integration
    // This is optional and can be enabled/disabled
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.adsterra.com/code/registerScript/' + publisherId;
    
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
}

// ============================================
// Smooth Scroll
// ============================================

function initializeSmoothScroll() {
    // Smooth scroll is already enabled in CSS with scroll-behavior: smooth
    // This function adds additional smooth scroll functionality if needed
    
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ============================================
// Analytics & Tracking
// ============================================

function initializeAnalytics() {
    // Track page views
    trackPageView();
    
    // Track user interactions
    trackUserInteractions();
    
    // Track ad impressions
    trackAdImpressions();
}

function trackPageView() {
    // Log page view
    console.log('صفحة تم تحميلها:', document.title);
    
    // You can send this data to your analytics service
    // Example: sendToAnalytics('pageview', { page: window.location.pathname });
}

function trackUserInteractions() {
    // Track button clicks
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent;
            console.log('تم الضغط على الزر:', text);
            
            // Send to analytics
            // sendToAnalytics('button_click', { button: text });
        });
    });
    
    // Track link clicks
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            console.log('تم الضغط على الرابط:', href);
            
            // Send to analytics
            // sendToAnalytics('link_click', { link: href });
        });
    });
}

function trackAdImpressions() {
    // Track ad impressions
    const adSpaces = document.querySelectorAll('.ad-space');
    
    adSpaces.forEach((space, index) => {
        // Check if ad is visible
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    console.log('إعلان مرئي:', index);
                    // Send to analytics
                    // sendToAnalytics('ad_impression', { ad_position: index });
                }
            });
        });
        
        observer.observe(space);
    });
}

// ============================================
// Utility Functions
// ============================================

function sendToAnalytics(eventName, eventData) {
    // Send event to your analytics service
    // This is a placeholder function
    console.log('تحليل:', eventName, eventData);
}

function showNotification(message, type = 'info') {
    // Show a notification to the user
    const notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(function() {
        notification.remove();
    }, 5000);
}

// ============================================
// Mobile Menu (if needed)
// ============================================

function initializeMobileMenu() {
    // This function can be used to add mobile menu functionality
    // if you add a hamburger menu to the navigation
    
    const menuButton = document.querySelector('.menu-button');
    const navbar = document.querySelector('.navbar');
    
    if (menuButton && navbar) {
        menuButton.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
}

// ============================================
// Form Validation (if needed)
// ============================================

function validateForm(formElement) {
    // Basic form validation
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// ============================================
// API Integration (if needed)
// ============================================

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('خطأ في جلب البيانات');
        }
        return await response.json();
    } catch (error) {
        console.error('خطأ:', error);
        showNotification('حدث خطأ في تحميل البيانات', 'error');
    }
}

// ============================================
// Local Storage Functions
// ============================================

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('خطأ في حفظ البيانات:', error);
    }
}

function getFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('خطأ في استرجاع البيانات:', error);
        return null;
    }
}

// ============================================
// Cookie Functions
// ============================================

function setCookie(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    
    return null;
}

// ============================================
// Export Functions
// ============================================

// Make functions available globally if needed
window.showNotification = showNotification;
window.fetchData = fetchData;
window.saveToLocalStorage = saveToLocalStorage;
window.getFromLocalStorage = getFromLocalStorage;
window.setCookie = setCookie;
window.getCookie = getCookie;

