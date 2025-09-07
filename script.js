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
    loadMessages();
}

function addMessage() {
    const messageText = document.getElementById('messageText');
    const text = messageText.value.trim();
    
    if (!text) {
        alert('请输入留言内容！');
        return;
    }
    
    const message = {
        content: text,
        time: new Date().toLocaleDateString('zh-CN'),
        id: Date.now()
    };
    
    // 保存到localStorage
    let messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    messages.unshift(message);
    localStorage.setItem('loveMessages', JSON.stringify(messages));
    
    // 清空输入框
    messageText.value = '';
    
    // 重新加载消息显示
    loadMessages();
    
    // 显示成功提示
    showNotification('💕 留言发送成功！');
}

function loadMessages() {
    const messagesList = document.getElementById('messagesList');
    const messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    
    // 如果没有消息，显示默认消息
    if (messages.length === 0) {
        messagesList.innerHTML = `
            <div class="message">
                <div class="message-content">每天和你在一起都是最幸福的时光 💕</div>
                <div class="message-time">2024-09-01</div>
            </div>
        `;
        return;
    }
    
    // 显示所有消息
    messagesList.innerHTML = messages.map(message => `
        <div class="message">
            <div class="message-content">${escapeHtml(message.content)}</div>
            <div class="message-time">${message.time}</div>
        </div>
    `).join('');
}

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

// 增强的消息添加功能
function addMessage() {
    const messageText = document.getElementById('messageText');
    const text = messageText.value.trim();
    
    if (!text) {
        // 添加错误动画
        messageText.classList.add('error-animation');
        setTimeout(() => messageText.classList.remove('error-animation'), 600);
        showNotification('请输入留言内容！', 'error');
        return;
    }
    
    const message = {
        content: text,
        time: new Date().toLocaleDateString('zh-CN'),
        id: Date.now()
    };
    
    // 保存到localStorage
    let messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    messages.unshift(message);
    localStorage.setItem('loveMessages', JSON.stringify(messages));
    
    // 清空输入框
    messageText.value = '';
    
    // 重新加载消息显示
    loadMessages();
    
    // 显示成功提示
    showNotification('💕 留言发送成功！', 'success');
    
    // 添加成功动画
    const submitBtn = messageText.parentNode.querySelector('button');
    submitBtn.classList.add('success-animation');
    setTimeout(() => submitBtn.classList.remove('success-animation'), 2000);
}

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
        const images = JSON.parse(localStorage.getItem('love_admin_images') || '[]');
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