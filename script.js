// 恋爱开始时间 - 你可以修改这个日期
const LOVE_START_DATE = new Date('2024-02-14T00:00:00');

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    document.body.style.animation = 'pageLoad 0.8s ease-out';
    
    // 初始化导航
    initNavigation();
    
    // 开始爱情计时器
    startLoveTimer();
    
    // 创建更多飘落的心形
    createFloatingHearts();
    
    // 初始化消息系统
    initMessages();
    
    // 添加交互效果
    initInteractiveEffects();
    
    // 初始化页面动画
    initPageAnimations();
    
    // 加载相册数据
    loadGalleryData();
    
    // 加载时光轴数据
    loadTimelineData();
    
    // 加载留言数据
    loadMessagesData();
    
    // 初始化留言输入
    initMessageInput();
    
    // 记录访问统计
    recordVisit();
});

// 导航系统
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
            
            // 更新活动导航链接
            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 显示指定部分
function showSection(sectionId) {
    // 隐藏所有section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// 爱情计时器
function startLoveTimer() {
    function updateTimer() {
        const now = new Date();
        const timeDiff = now - LOVE_START_DATE;
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        const durationElement = document.getElementById('love-duration');
        if (durationElement) {
            durationElement.innerHTML = `
                <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                    <div class="time-unit">
                        <div class="time-number">${days}</div>
                        <div class="time-label">天</div>
                    </div>
                    <div class="time-unit">
                        <div class="time-number">${hours}</div>
                        <div class="time-label">小时</div>
                    </div>
                    <div class="time-unit">
                        <div class="time-number">${minutes}</div>
                        <div class="time-label">分钟</div>
                    </div>
                    <div class="time-unit">
                        <div class="time-number">${seconds}</div>
                        <div class="time-label">秒</div>
                    </div>
                </div>
            `;
        }
    }
    
    // 立即更新一次
    updateTimer();
    
    // 每秒更新
    setInterval(updateTimer, 1000);
}

// 创建飘落的心形动画
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const heartEmojis = ['💖', '💕', '💗', '💓', '💝', '💘', '❤️', '💟'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.pointerEvents = 'none';
        heart.style.userSelect = 'none';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        const duration = Math.random() * 10 + 8; // 8-18秒
        const horizontalMovement = (Math.random() - 0.5) * 200; // -100px到100px的水平移动
        
        heart.style.animation = `
            heartFall ${duration}s linear forwards,
            heartSway ${duration * 0.3}s ease-in-out ${Math.random() * 2}s infinite alternate
        `;
        
        heartsContainer.appendChild(heart);
        
        // 动画结束后移除元素
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, duration * 1000);
    }
    
    // 定期创建心形
    setInterval(createHeart, 2000);
    
    // 立即创建几个
    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 1000);
    }
}

// 添加心形摆动动画的CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFall {
        to {
            transform: translateY(calc(100vh + 50px));
            opacity: 0;
        }
    }
    
    @keyframes heartSway {
        0%, 100% { transform: translateX(-20px); }
        50% { transform: translateX(20px); }
    }
    
    .time-unit {
        text-align: center;
        background: rgba(255, 255, 255, 0.2);
        padding: 15px 20px;
        border-radius: 15px;
        min-width: 80px;
    }
    
    .time-number {
        font-size: 2em;
        font-weight: bold;
        color: #e91e63;
    }
    
    .time-label {
        font-size: 0.9em;
        color: #666;
        margin-top: 5px;
    }
`;
document.head.appendChild(style);

// 照片模态框功能
function openModal(photoId) {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalCaption = document.getElementById('modalCaption');
    
    // 根据photoId设置不同的内容
    const photoData = {
        photo1: { emoji: '🥰', caption: '第一次约会 - 那个让人心动的午后' },
        photo2: { emoji: '✈️', caption: '一起旅行 - 看遍世界的美好' },
        photo3: { emoji: '🏠', caption: '日常生活 - 平凡中的小幸福' },
        photo4: { emoji: '🎉', caption: '节日庆祝 - 每个重要的时刻' }
    };
    
    const data = photoData[photoId] || { emoji: '📷', caption: '美好回忆' };
    
    modalPhoto.textContent = data.emoji;
    modalCaption.textContent = data.caption;
    
    modal.style.display = 'block';
    
    // 添加淡入动画
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transition = 'opacity 0.3s ease';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// 点击模态框外部关闭
document.getElementById('photoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// 留言系统
function initMessages() {
    // 从localStorage加载消息
    loadMessagesData();
}

// 旧的addMessage函数已删除，使用下方统一的新版本

// 旧的loadMessages函数已删除，使用loadMessagesData

// HTML转义函数
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 通知系统
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(45deg, #e91e63, #ff9a9e);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 3000;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 滑入动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 3秒后自动消失
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // ESC关闭模态框
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl+Enter发送留言
    if (e.ctrlKey && e.key === 'Enter') {
        const messageText = document.getElementById('messageText');
        if (document.activeElement === messageText) {
            addMessage();
        }
    }
});

// 页面可见性API - 当页面重新可见时更新计时器
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // 页面变为可见时，确保计时器是准确的
        startLoveTimer();
    }
});

// 初始化交互效果
function initInteractiveEffects() {
    // 添加按钮点击波纹效果
    const buttons = document.querySelectorAll('button, .btn, .nav-links a');
    buttons.forEach(button => {
        if (!button.classList.contains('ripple')) {
            button.classList.add('ripple');
        }
    });
    
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.timeline-content, .message, .photo-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 添加数字跳动效果
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // 观察时间数字元素
    const timeUnits = document.querySelectorAll('.time-number');
    timeUnits.forEach(unit => observer.observe(unit));
}

// 数字动画效果
function animateNumbers(element) {
    const finalValue = parseInt(element.textContent);
    let currentValue = 0;
    const increment = finalValue / 50;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            element.textContent = finalValue;
            element.classList.add('number-roll');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, 30);
}

// 初始化页面动画
function initPageAnimations() {
    // 创建气泡效果
    createBubbles();
    
    // 添加页面切换动画
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('transitionend', function() {
            if (this.classList.contains('active')) {
                // 重新触发内部元素的动画
                const animatedElements = this.querySelectorAll('.fade-in-up');
                animatedElements.forEach((el, index) => {
                    el.style.animation = 'none';
                    setTimeout(() => {
                        el.style.animation = `fadeInUp 0.8s ease-out forwards`;
                        el.style.animationDelay = `${index * 0.1}s`;
                    }, 50);
                });
            }
        });
    });
    
    // 添加鼠标跟随效果
    initMouseFollower();
}

// 创建气泡效果
function createBubbles() {
    const bubbleContainer = document.querySelector('.background');
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + 'px';
        bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
        bubble.style.animationDelay = Math.random() * 2 + 's';
        
        bubbleContainer.appendChild(bubble);
        
        // 5秒后移除气泡
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, 6000);
    }
    
    // 每2秒创建一个气泡
    setInterval(createBubble, 2000);
}

// 鼠标跟随效果
function initMouseFollower() {
    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    let speed = 0.1;
    
    // 创建跟随光标
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    follower.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255,154,158,0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: multiply;
    `;
    document.body.appendChild(follower);
    
    // 跟踪鼠标位置
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // 平滑跟随动画
    function animate() {
        ballX += (mouseX - ballX) * speed;
        ballY += (mouseY - ballY) * speed;
        
        follower.style.transform = `translate(${ballX - 10}px, ${ballY - 10}px)`;
        
        requestAnimationFrame(animate);
    }
    animate();
}

// 旧的重复addMessage函数已删除，使用下方统一版本

// 增强的通知系统
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColors = {
        success: 'linear-gradient(135deg, #4caf50, #66bb6a)',
        error: 'linear-gradient(135deg, #f44336, #ef5350)',
        info: 'linear-gradient(135deg, #2196f3, #42a5f5)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${bgColors[type]};
        color: white;
        border-radius: 15px;
        font-weight: 500;
        z-index: 3000;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: inherit;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 滑入动画
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // 3秒后消失
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// 增强的心形创建
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const heartEmojis = ['💖', '💕', '💗', '💓', '💝', '💘', '❤️', '💟', '💜', '🧡'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 25 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100vh';
        heart.style.pointerEvents = 'none';
        heart.style.userSelect = 'none';
        heart.style.zIndex = '1';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        const duration = Math.random() * 8 + 12;
        const horizontalMovement = (Math.random() - 0.5) * 300;
        const rotation = Math.random() * 720;
        
        heart.style.animation = `
            heartFloat ${duration}s linear forwards,
            heartSway ${duration * 0.3}s ease-in-out infinite alternate,
            heartSpin ${duration}s ease-in-out forwards
        `;
        
        // 添加动态CSS动画
        if (!document.getElementById('dynamic-heart-styles')) {
            const style = document.createElement('style');
            style.id = 'dynamic-heart-styles';
            style.textContent = `
                @keyframes heartFloat {
                    from {
                        transform: translateY(0) scale(0.5);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                        transform: translateY(-10vh) scale(1);
                    }
                    90% {
                        opacity: 1;
                        transform: translateY(-90vh) scale(1.2);
                    }
                    to {
                        transform: translateY(-100vh) scale(0.3);
                        opacity: 0;
                    }
                }
                @keyframes heartSway {
                    0%, 100% { transform: translateX(-30px) rotate(0deg); }
                    50% { transform: translateX(30px) rotate(10deg); }
                }
                @keyframes heartSpin {
                    from { filter: hue-rotate(0deg); }
                    to { filter: hue-rotate(${rotation}deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, duration * 1000);
    }
    
    // 定期创建心形
    setInterval(createHeart, 3000);
    
    // 立即创建几个
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 800);
    }
}

// 添加点击心形效果
document.addEventListener('click', function(e) {
    // 在点击位置创建爆炸心形效果
    createClickEffect(e.clientX, e.clientY);
});

function createClickEffect(x, y) {
    const hearts = ['💖', '💕', '✨'];
    
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: 16px;
            pointer-events: none;
            z-index: 9999;
            animation: clickExplode 1s ease-out forwards;
            animation-delay: ${i * 0.1}s;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                document.body.removeChild(heart);
            }
        }, 1100);
    }
}

// 添加点击爆炸动画
const clickStyle = document.createElement('style');
clickStyle.textContent = `
    @keyframes clickExplode {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg) translateY(-50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(clickStyle);

// === 相册功能 ===

// 当前显示的分类
let currentGalleryCategory = 'all';

// 加载相册数据
function loadGalleryData() {
    try {
        // 使用与管理后台完全相同的存储键
        const images = JSON.parse(localStorage.getItem('love_admin_images') || '[]');
        console.log('加载到的图片数据:', images); // 调试日志
        displayGallery(images, currentGalleryCategory);
    } catch (error) {
        console.error('加载相册数据失败:', error);
        // 显示占位提示
        displayEmptyGallery();
    }
}

// 显示相册
function displayGallery(images, category = 'all') {
    const gallery = document.getElementById('photoGallery');
    
    if (!gallery) return;
    
    // 过滤图片
    let filteredImages = images;
    if (category !== 'all') {
        filteredImages = images.filter(img => img.category === category);
    }
    
    if (filteredImages.length === 0) {
        displayEmptyGallery();
        return;
    }
    
    // 生成图片HTML
    gallery.innerHTML = filteredImages.map((img, index) => `
        <div class="photo-item photo-zoom glow-on-hover fade-in-up delay-${index % 4}00" 
             onclick="openPhotoModal('${img.id}')">
            <img src="${img.url}" alt="${img.description}" 
                 style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
            <p>${img.description}</p>
            <small style="color: rgba(255,255,255,0.8);">${img.date}</small>
        </div>
    `).join('');
    
    // 重新触发动画
    setTimeout(() => {
        gallery.querySelectorAll('.photo-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// 显示空相册提示
function displayEmptyGallery() {
    const gallery = document.getElementById('photoGallery');
    if (!gallery) return;
    
    gallery.innerHTML = `
        <div class="photo-placeholder-hint">
            <div class="photo-placeholder">📷</div>
            <p>还没有照片，快去管理后台上传吧~</p>
        </div>
    `;
}

// 显示相册分类
function showGalleryCategory(category) {
    // 更新按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // 保存当前分类
    currentGalleryCategory = category;
    
    // 重新加载数据
    loadGalleryData();
}

// 打开照片模态框
function openPhotoModal(imageId) {
    try {
        const images = JSON.parse(localStorage.getItem('love_admin_images') || '[]');
        const image = images.find(img => img.id === imageId);
        
        if (!image) return;
        
        // 创建模态框HTML
        const modalHtml = `
            <div id="photoModalOverlay" class="photo-modal-overlay" onclick="closePhotoModal()">
                <div class="photo-modal-content" onclick="event.stopPropagation()">
                    <span class="photo-modal-close" onclick="closePhotoModal()">&times;</span>
                    <img src="${image.url}" alt="${image.description}" class="modal-photo">
                    <div class="photo-modal-info">
                        <h3>${image.description}</h3>
                        <p class="photo-date">📅 ${image.date}</p>
                        <p class="photo-category">📂 ${getCategoryDisplayName(image.category)}</p>
                    </div>
                </div>
            </div>
        `;
        
        // 添加到页面
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // 添加动画
        const overlay = document.getElementById('photoModalOverlay');
        setTimeout(() => {
            overlay.style.opacity = '1';
            overlay.querySelector('.photo-modal-content').style.transform = 'scale(1)';
        }, 10);
        
    } catch (error) {
        console.error('打开照片模态框失败:', error);
    }
}

// 关闭照片模态框
function closePhotoModal() {
    const overlay = document.getElementById('photoModalOverlay');
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.querySelector('.photo-modal-content').style.transform = 'scale(0.8)';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// 获取分类显示名称
function getCategoryDisplayName(category) {
    const names = {
        'first_date': '第一次约会',
        'travel': '一起旅行',
        'daily_life': '日常生活',
        'festivals': '节日庆祝'
    };
    return names[category] || '未分类';
}

// 添加相册模态框样式
const galleryModalStyle = document.createElement('style');
galleryModalStyle.textContent = `
    .photo-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .photo-modal-content {
        max-width: 90%;
        max-height: 90%;
        position: relative;
        transform: scale(0.8);
        transition: all 0.3s ease;
        text-align: center;
    }
    
    .modal-photo {
        max-width: 100%;
        max-height: 70vh;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    
    .photo-modal-close {
        position: absolute;
        top: -40px;
        right: -40px;
        color: white;
        font-size: 30px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .photo-modal-close:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
    
    .photo-modal-info {
        color: white;
        margin-top: 20px;
    }
    
    .photo-modal-info h3 {
        margin-bottom: 10px;
        font-size: 24px;
    }
    
    .photo-date, .photo-category {
        margin: 5px 0;
        opacity: 0.8;
    }
    
    @media (max-width: 768px) {
        .photo-modal-close {
            top: -30px;
            right: -10px;
            font-size: 24px;
            width: 30px;
            height: 30px;
        }
        
        .photo-modal-info h3 {
            font-size: 20px;
        }
    }
`;
document.head.appendChild(galleryModalStyle);

// === 时光轴功能 ===

// 加载时光轴数据
function loadTimelineData() {
    try {
        // 使用与管理后台完全相同的存储键
        const timeline = JSON.parse(localStorage.getItem('love_admin_timeline') || '[]');
        console.log('加载到的时光轴数据:', timeline); // 调试日志
        displayTimeline(timeline);
    } catch (error) {
        console.error('加载时光轴数据失败:', error);
        displayEmptyTimeline();
    }
}

// 显示时光轴
function displayTimeline(timeline) {
    const container = document.getElementById('timelineContainer');
    
    if (!container) return;
    
    if (timeline.length === 0) {
        displayEmptyTimeline();
        return;
    }
    
    // 按日期排序（最新的在前）
    const sortedTimeline = timeline.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = sortedTimeline.map((item, index) => `
        <div class="timeline-item fade-in-up delay-${index % 3}00">
            <div class="timeline-date">${formatTimelineDate(item.date)}</div>
            <div class="timeline-content">
                <h3>${item.icon} ${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
    
    // 重新触发动画
    setTimeout(() => {
        container.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 150);
        });
    }, 100);
}

// 显示空时光轴
function displayEmptyTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="timeline-placeholder">
            <div class="timeline-placeholder-icon">⏰</div>
            <p>还没有时光轴记录，快去管理后台添加吧~</p>
        </div>
    `;
}

// 格式化时光轴日期显示
function formatTimelineDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// === 留言功能 ===

// 初始化留言输入
function initMessageInput() {
    const messageText = document.getElementById('messageText');
    const charCount = document.getElementById('charCount');
    
    if (messageText && charCount) {
        messageText.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;
            
            // 字符数接近限制时变色提醒
            if (count > 450) {
                charCount.style.color = '#ff6b6b';
            } else if (count > 400) {
                charCount.style.color = '#ffa726';
            } else {
                charCount.style.color = 'rgba(255, 255, 255, 0.7)';
            }
        });
        
        // 回车发送留言（Ctrl+Enter或Cmd+Enter）
        messageText.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                addMessage();
            }
        });
    }
}

// 加载留言数据
function loadMessagesData() {
    try {
        const messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
        displayMessages(messages);
    } catch (error) {
        console.error('加载留言数据失败:', error);
        displayEmptyMessages();
    }
}

// 显示留言
function displayMessages(messages) {
    const container = document.getElementById('messagesList');
    
    if (!container) return;
    
    if (messages.length === 0) {
        displayEmptyMessages();
        return;
    }
    
    // 按时间倒序排列（最新的在上面）
    const sortedMessages = messages.sort((a, b) => new Date(b.time) - new Date(a.time));
    
    container.innerHTML = sortedMessages.map((msg, index) => `
        <div class="message fade-in-up delay-${index % 3}00" style="opacity: 0; transform: translateY(20px);">
            <div class="message-content">${escapeHtml(msg.text)}</div>
            <div class="message-time">${formatMessageTime(msg.time)}</div>
        </div>
    `).join('');
    
    // 触发渐入动画
    setTimeout(() => {
        container.querySelectorAll('.message').forEach((msg, index) => {
            setTimeout(() => {
                msg.style.transition = 'all 0.6s ease';
                msg.style.opacity = '1';
                msg.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// 显示空留言状态
function displayEmptyMessages() {
    const container = document.getElementById('messagesList');
    if (!container) return;
    
    container.innerHTML = `
        <div class="messages-placeholder">
            <div class="messages-placeholder-icon">💌</div>
            <p>还没有留言，快留下第一句爱的话语吧~</p>
        </div>
    `;
}

// 添加留言
function addMessage() {
    const messageText = document.getElementById('messageText');
    
    if (!messageText) return;
    
    const text = messageText.value.trim();
    
    if (!text) {
        // 简单的提示动画
        messageText.style.background = 'rgba(255, 107, 107, 0.1)';
        messageText.placeholder = '请输入留言内容...';
        setTimeout(() => {
            messageText.style.background = '';
            messageText.placeholder = '写下想对TA说的话...';
        }, 2000);
        return;
    }
    
    if (text.length > 500) {
        alert('留言内容不能超过500个字符');
        return;
    }
    
    // 获取现有留言
    const messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    
    // 创建新留言
    const newMessage = {
        id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        text: text,
        time: new Date().toISOString()
    };
    
    // 添加到列表
    messages.push(newMessage);
    
    // 保存到localStorage
    localStorage.setItem('loveMessages', JSON.stringify(messages));
    
    // 清空输入框
    messageText.value = '';
    document.getElementById('charCount').textContent = '0';
    document.getElementById('charCount').style.color = 'rgba(255, 255, 255, 0.7)';
    
    // 重新加载显示
    loadMessagesData();
    
    // 成功提示动画
    showMessageSuccess();
}

// 显示留言成功动画
function showMessageSuccess() {
    // 创建临时成功提示
    const successDiv = document.createElement('div');
    successDiv.innerHTML = '💕 留言发送成功！';
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b6b, #ee5a52);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: bold;
        z-index: 9999;
        transform: translateX(300px);
        opacity: 0;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    `;
    
    document.body.appendChild(successDiv);
    
    // 显示动画
    setTimeout(() => {
        successDiv.style.transform = 'translateX(0)';
        successDiv.style.opacity = '1';
    }, 100);
    
    // 消失动画
    setTimeout(() => {
        successDiv.style.transform = 'translateX(300px)';
        successDiv.style.opacity = '0';
        setTimeout(() => {
            if (successDiv.parentNode) {
                document.body.removeChild(successDiv);
            }
        }, 300);
    }, 3000);
}

// 格式化留言时间
function formatMessageTime(timeString) {
    const date = new Date(timeString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
        return '今天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 2) {
        return '昨天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays <= 7) {
        return `${diffDays - 1}天前`;
    } else {
        return date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' });
    }
}

// HTML转义防XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// === 访问统计功能 ===

// 记录访问
function recordVisit() {
    try {
        const today = new Date().toDateString();
        const visits = JSON.parse(localStorage.getItem('love_visits') || '{}');
        
        // 初始化今日访问数
        if (!visits[today]) {
            visits[today] = 0;
        }
        
        visits[today]++;
        localStorage.setItem('love_visits', JSON.stringify(visits));
        
        console.log('今日访问数已记录:', visits[today]);
    } catch (error) {
        console.error('记录访问失败:', error);
    }
}