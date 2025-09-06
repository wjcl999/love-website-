// 恋爱开始时间 - 你可以修改这个日期
const LOVE_START_DATE = new Date('2024-02-14T00:00:00');

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航
    initNavigation();
    
    // 开始爱情计时器
    startLoveTimer();
    
    // 创建更多飘落的心形
    createFloatingHearts();
    
    // 初始化消息系统
    initMessages();
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