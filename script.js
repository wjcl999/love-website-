// 奕铭 ❤️ 佳怡 - 纯静态爱情网站脚本

// ==================== 配置区域 ====================
// 恋爱开始时间 - 你可以修改这个日期
const LOVE_START_DATE = new Date('2024-01-26T00:00:00');

// 情侣信息
const COUPLE_INFO = {
    boy: {
        name: '奕铭',
        avatar: '👨‍💻',
        bio: '温柔体贴的程序员'
    },
    girl: {
        name: '佳怡', 
        avatar: '👩‍🎨',
        bio: '美丽可爱的设计师'
    }
};

// 重要时刻数据 - 奕铭 & 佳怡 的美好回忆
const TIMELINE_DATA = [
    {
        date: '2024-01-16',
        title: '初次相识 ✨',
        description: '命运让我们在这一天相遇，从此我的世界多了一个你，一切都变得不一样了...',
        icon: '✨',
        image: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/5063421a2324f20bf6fcc9361c4ba74d.jpg'
    },
    {
        date: '2024-01-26',
        title: '确定关系 💕',
        description: '这一天，我们正式在一起了！从朋友变成恋人，心中满怀甜蜜和期待...',
        icon: '💕',
        image: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/fe29a43cd82c7b5f3d74f944c74ebe06.jpg'
    },
    {
        date: '2024-07-21',
        title: '第一次见面 💖',
        description: '等了这么久，终于见到真正的你！第一次拥抱，第一次亲吻，一切都那么美好而紧张...',
        icon: '💖',
        images: [
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/cdd37313e374d91e5782bf2207671c35.jpg',
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f5ce1f2de1d47001e39504513edf9aae.jpg'
        ]
    },
    {
        date: '2024-07-22',
        title: '第一次分离 😢',
        description: '虽然不舍，但这次分离让我们更加珍惜在一起的时光，也更加期待下次相聚...',
        icon: '😢',
        image: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/ba48ff86aaa9c6068dff34a651bd575d.jpg'
    },
    {
        date: '2024-12-31',
        title: '第二次见面 & 生日惊喜 🎂',
        description: '年末最美好的礼物！不仅是我们第二次见面，还一起为我庆祝生日，第一次一起吃生日蛋糕，甜到心里...',
        icon: '🎂',
        images: [
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/8c27d844d6cfb32ee4089cc70eee04df.jpg',
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/753f30f4a80ca275a583ac84b25ee5e9.jpg'
        ]
    },
    {
        date: '2025-01-01',
        title: '新年 & 第二次分离 🎆',
        description: '新年第一天的分离，虽然不舍，但我们一起迎接了新的一年，满怀对未来的憧憬...',
        icon: '🎆',
        image: ''
    },
    {
        date: '2025-06-10',
        title: '高考结束 📚',
        description: '你高考结束了！从此我们可以天天聊天，没有学习的压力，只有满满的甜蜜...',
        icon: '📚',
        image: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/6db5e29123b7acec298d1de4908c9011.jpg'
    },
    {
        date: '2025-07-18',
        title: '第三次见面 🌟',
        description: '又一次的相聚，每次见面都让人激动不已，感觉时间过得好快又好慢...',
        icon: '🌟',
        images: [
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/c5b8466fe17452727d71040e12683d71.jpg',
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/2a0c8361a22adef3e0c5b237aa75fa75.jpg'
        ]
    },
    {
        date: '2025-07-21',
        title: '方特游玩 🎡',
        description: '第一次一起去游乐园！在方特度过了最快乐的一天，一起坐过山车，一起尖叫，一起欢笑...',
        icon: '🎡',
        images: [
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/e6b543e267291fd11d77e31743ae58a9.jpg',
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/21482faed34b985059194c504247f033.jpg'
        ]
    },
    {
        date: '2025-07-22',
        title: '第三次分离 💔',
        description: '每次分离都让人难过，但也让我们更加珍惜每一次的相聚，期待下一次的见面...',
        icon: '💔',
        images: [
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f852dd1b5a847dd3edd43d2f7388b8da.jpg',
            'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/9ccc8f9a5b040d64db6992f05a1f05c1.jpg'
        ]
    }
];

// 相册数据 - 你可以把图片上传到图床，然后把URL填入这里
const GALLERY_DATA = {
    'all': [
        {
            url: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Our+Memory+1',
            description: '第一张合影 💕',
            category: 'first_date',
            date: '2024-02-14'
        },
        {
            url: 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Travel+Memory',
            description: '海边漫步 🌊',
            category: 'travel',
            date: '2024-08-10'
        },
        {
            url: 'https://via.placeholder.com/400x300/45b7d1/ffffff?text=Daily+Life',
            description: '日常生活 😊',
            category: 'daily_life',
            date: '2024-06-15'
        },
        {
            url: 'https://via.placeholder.com/400x300/f9ca24/ffffff?text=Festival',
            description: '节日庆祝 🎉',
            category: 'festivals',
            date: '2024-12-25'
        }
    ]
};

// 天气API配置 - 使用和风天气API（国内访问更稳定）
const WEATHER_CONFIG = {
    apiKey: '6a4891b3a5744a9a8d6ee1feb42d55c2',
    cities: [
        { code: '101120801', name: '淄博' },
        { code: '101250101', name: '长沙' }
    ],
    enabled: true
};

// ==================== 主要功能 ====================

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 奕铭 & 佳怡的爱情网站加载中...');
    
    // 页面加载动画
    document.body.style.animation = 'pageLoad 0.8s ease-out';
    
    // 初始化各个功能模块
    initNavigation();
    startLoveTimer();
    createFloatingHearts();
    initInteractiveEffects();
    initPageAnimations();
    loadStaticTimeline();
    loadStaticGallery();
    initWeather();
    
    console.log('✨ 网站加载完成！');
});

// 导航系统
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
            
            // 更新导航状态
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 显示指定页面部分
function showSection(sectionId) {
    // 隐藏所有section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // 添加进入动画
        targetSection.style.animation = 'fadeInUp 0.6s ease-out';
        
        // 如果是相册页面，重新触发图片加载动画
        if (sectionId === 'gallery-section') {
            setTimeout(() => {
                initGalleryAnimations();
            }, 100);
        }
    }
}

// 爱情计时器
function startLoveTimer() {
    function updateTimer() {
        const now = new Date();
        const diff = now - LOVE_START_DATE;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const durationElement = document.getElementById('love-duration');
        if (durationElement) {
            durationElement.innerHTML = `
                <div class="time-unit">
                    <span class="time-number">${days}</span>
                    <span class="time-label">天</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">${hours}</span>
                    <span class="time-label">时</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">${minutes}</span>
                    <span class="time-label">分</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">${seconds}</span>
                    <span class="time-label">秒</span>
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
    if (!heartsContainer) return;
    
    const heartEmojis = ['💕', '💖', '💝', '💗', '💘', '❤️', '🧡', '💛', '💚', '💙', '💜'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // 随机位置和动画参数
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        
        heartsContainer.appendChild(heart);
        
        // 动画结束后移除元素
        setTimeout(() => {
            if (heart.parentNode) {
                heartsContainer.removeChild(heart);
            }
        }, 5000);
    }
    
    // 每1-3秒创建一个心形
    setInterval(createHeart, Math.random() * 2000 + 1000);
    
    // 初始创建几个
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 500);
    }
}

// 加载静态时光轴数据
function loadStaticTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    if (!timelineContainer) return;
    
    if (TIMELINE_DATA.length === 0) {
        timelineContainer.innerHTML = `
            <div class="timeline-placeholder">
                <div class="timeline-placeholder-icon">⏰</div>
                <p>时光轴记录还在整理中，敬请期待...</p>
            </div>
        `;
        return;
    }
    
    // 按日期排序（最新的在前）
    const sortedTimeline = TIMELINE_DATA.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    timelineContainer.innerHTML = '';
    
    sortedTimeline.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = (index * 0.2) + 's';
        
        const formattedDate = new Date(item.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // 创建包含文字和图片的完整项目
        let imageContent = '';
        
        // 如果有单张图片
        if (item.image) {
            imageContent = `
                <div class="timeline-image-wrapper" onclick="openTimelineImage('${item.image}', '${item.title}')" ontouchstart="">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="image-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            `;
        }
        
        // 如果有多张图片
        if (item.images) {
            const imagesHtml = item.images.map(imageUrl => `
                <div class="timeline-image-wrapper horizontal" onclick="openTimelineImage('${imageUrl}', '${item.title}')" ontouchstart="">
                    <img src="${imageUrl}" alt="${item.title}">
                    <div class="image-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            `).join('');
            
            imageContent = `<div class="timeline-images-horizontal">${imagesHtml}</div>`;
        }
        
        // 组合文字和图片内容
        timelineItem.innerHTML = `
            <div class="timeline-date">${formattedDate}</div>
            <div class="timeline-content">
                <div class="timeline-icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${imageContent}
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// 加载静态相册数据
function loadStaticGallery() {
    const galleryContainer = document.getElementById('photoGallery');
    if (!galleryContainer) return;
    
    // 显示所有图片
    displayGallery(GALLERY_DATA.all, 'all');
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
        gallery.innerHTML = `
            <div class="photo-placeholder-hint">
                <div class="photo-placeholder">📷</div>
                <p>这个分类还没有照片哦~</p>
            </div>
        `;
        return;
    }
    
    gallery.innerHTML = '';
    
    filteredImages.forEach((image, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.style.animationDelay = (index * 0.1) + 's';
        
        photoItem.innerHTML = `
            <div class="photo-wrapper">
                <img src="${image.url}" alt="${image.description}" onclick="openModal('${image.url}', '${image.description}')">
                <div class="photo-overlay">
                    <div class="photo-title">${image.description}</div>
                    <div class="photo-date">${image.date}</div>
                </div>
            </div>
        `;
        
        gallery.appendChild(photoItem);
    });
    
    // 触发加载动画
    setTimeout(() => {
        initGalleryAnimations();
    }, 100);
}

// 相册分类切换
function showGalleryCategory(category) {
    // 更新按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // 显示对应分类的图片
    displayGallery(GALLERY_DATA.all, category);
}

// 初始化相册动画
function initGalleryAnimations() {
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.classList.add('fade-in-up');
    });
}

// 照片模态框
function openModal(imageUrl, caption) {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalPhoto && modalCaption) {
        modalPhoto.innerHTML = `<img src="${imageUrl}" alt="${caption}">`;
        modalCaption.textContent = caption;
        modal.style.display = 'flex';
        modal.style.animation = 'fadeIn 0.3s ease-out';
    }
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// 点击模态框背景关闭
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

// 时光轴图片放大功能
function openTimelineImage(imageUrl, caption) {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    
    if (modal && modalPhoto) {
        modalPhoto.innerHTML = `<img src="${imageUrl}" alt="${caption}">`;
        modal.style.display = 'flex';
        modal.style.animation = 'fadeIn 0.3s ease-out';
    }
}

// 天气功能
let weatherData = {};
let currentWeatherView = 'current'; // current, forecast

function initWeather() {
    if (!WEATHER_CONFIG.enabled || !WEATHER_CONFIG.apiKey) {
        console.log('天气功能未启用，请配置API密钥');
        return;
    }
    
    fetchAllWeatherData();
    // 每30分钟更新一次天气
    setInterval(fetchAllWeatherData, 30 * 60 * 1000);
}

async function fetchAllWeatherData() {
    if (!WEATHER_CONFIG.enabled) return;
    
    const weatherContainer = document.getElementById('weather-container');
    if (!weatherContainer) return;
    
    weatherContainer.innerHTML = '<div class="weather-loading">🌤️ 加载天气信息中...</div>';
    
    try {
        for (const city of WEATHER_CONFIG.cities) {
            // 获取实时天气
            const nowResponse = await fetch(`https://devapi.qweather.com/v7/weather/now?location=${city.code}&key=${WEATHER_CONFIG.apiKey}`);
            const nowData = await nowResponse.json();
            
            // 获取3天预报
            const forecastResponse = await fetch(`https://devapi.qweather.com/v7/weather/3d?location=${city.code}&key=${WEATHER_CONFIG.apiKey}`);
            const forecastData = await forecastResponse.json();
            
            if (nowData.code === '200' && forecastData.code === '200') {
                weatherData[city.name] = {
                    now: nowData.now,
                    forecast: forecastData.daily
                };
            }
        }
        displayWeather();
    } catch (error) {
        console.log('天气获取失败:', error);
        weatherContainer.innerHTML = '<div class="weather-error">😔 天气信息获取失败</div>';
    }
}

function displayWeather() {
    const weatherContainer = document.getElementById('weather-container');
    if (!weatherContainer) return;
    
    // 天气图标映射
    const weatherIcons = {
        '晴': '☀️', '多云': '⛅', '阴': '☁️', '小雨': '🌦️', '中雨': '🌧️', 
        '大雨': '⛈️', '雪': '❄️', '雾': '🌫️', '霾': '😷', '雷阵雨': '⛈️',
        '小到中雨': '🌧️', '中到大雨': '⛈️', '大到暴雨': '🌊', '暴雨': '🌊'
    };
    
    let weatherHtml = `
        <div class="weather-widget">
            <div class="weather-tabs">
                <button class="weather-tab ${currentWeatherView === 'current' ? 'active' : ''}" onclick="switchWeatherView('current')">实时天气</button>
                <button class="weather-tab ${currentWeatherView === 'forecast' ? 'active' : ''}" onclick="switchWeatherView('forecast')">三天预报</button>
            </div>
            <div class="weather-content">
    `;
    
    if (currentWeatherView === 'current') {
        // 实时天气显示
        weatherHtml += '<div class="weather-cities">';
        WEATHER_CONFIG.cities.forEach(city => {
            const data = weatherData[city.name];
            if (data && data.now) {
                const temp = Math.round(data.now.temp);
                const description = data.now.text;
                const icon = weatherIcons[description] || '🌤️';
                const humidity = data.now.humidity;
                const windDir = data.now.windDir;
                const windScale = data.now.windScale;
                
                weatherHtml += `
                    <div class="weather-city-card">
                        <h3 class="city-name">${city.name}</h3>
                        <div class="weather-main">
                            <div class="weather-icon">${icon}</div>
                            <div class="temperature">${temp}°C</div>
                        </div>
                        <div class="weather-desc">${description}</div>
                        <div class="weather-details">
                            <span>💧 湿度 ${humidity}%</span>
                            <span>💨 ${windDir}风 ${windScale}级</span>
                        </div>
                    </div>
                `;
            }
        });
        weatherHtml += '</div>';
    } else {
        // 预报天气显示
        weatherHtml += '<div class="weather-forecast">';
        WEATHER_CONFIG.cities.forEach(city => {
            const data = weatherData[city.name];
            if (data && data.forecast) {
                weatherHtml += `<div class="forecast-city">
                    <h3 class="city-name">${city.name}</h3>
                    <div class="forecast-days">`;
                
                data.forecast.slice(0, 3).forEach((day, index) => {
                    const date = new Date(day.fxDate);
                    const dayName = index === 0 ? '今天' : (index === 1 ? '明天' : '后天');
                    const dateStr = `${date.getMonth() + 1}/${date.getDate()}`;
                    const icon = weatherIcons[day.textDay] || '🌤️';
                    
                    weatherHtml += `
                        <div class="forecast-day">
                            <div class="day-info">
                                <span class="day-name">${dayName}</span>
                                <span class="day-date">${dateStr}</span>
                            </div>
                            <div class="day-weather">
                                <div class="day-icon">${icon}</div>
                                <div class="day-temp">${day.tempMin}°-${day.tempMax}°</div>
                                <div class="day-desc">${day.textDay}</div>
                            </div>
                        </div>
                    `;
                });
                
                weatherHtml += '</div></div>';
            }
        });
        weatherHtml += '</div>';
    }
    
    weatherHtml += '</div></div>';
    weatherContainer.innerHTML = weatherHtml;
}

function switchWeatherView(view) {
    currentWeatherView = view;
    displayWeather();
}

// 交互效果
function initInteractiveEffects() {
    // 鼠标跟随效果
    document.addEventListener('mousemove', function(e) {
        createMouseTrail(e.clientX, e.clientY);
    });
    
    // 点击波纹效果
    document.addEventListener('click', function(e) {
        createClickRipple(e.clientX, e.clientY);
    });
}

// 鼠标轨迹效果
function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 1000);
}

// 点击波纹效果
function createClickRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = (x - 25) + 'px';
    ripple.style.top = (y - 25) + 'px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// 页面动画初始化
function initPageAnimations() {
    // 滚动触发动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.fade-in-up, .timeline-item, .photo-item').forEach(el => {
        observer.observe(el);
    });
}

// 工具函数
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 添加CSS样式到头部
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* 时间显示样式 */
        .time-unit {
            display: inline-block;
            margin: 0 10px;
            text-align: center;
        }
        
        .time-number {
            display: block;
            font-size: 2.5em;
            font-weight: bold;
            color: #ff6b6b;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .time-label {
            font-size: 0.9em;
            color: #666;
            margin-top: 5px;
        }
        
        /* 飘落心形动画 */
        .floating-heart {
            position: absolute;
            animation: float-down linear infinite;
            pointer-events: none;
            z-index: 1;
        }
        
        @keyframes float-down {
            0% {
                transform: translateY(-100px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        /* 鼠标轨迹效果 */
        .mouse-trail {
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #ff6b6b, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: trail-fade 1s ease-out forwards;
        }
        
        @keyframes trail-fade {
            0% {
                opacity: 0.8;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0.3);
            }
        }
        
        /* 点击波纹效果 */
        .click-ripple {
            position: fixed;
            width: 50px;
            height: 50px;
            border: 2px solid #ff6b6b;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: ripple-expand 0.6s ease-out forwards;
        }
        
        @keyframes ripple-expand {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        /* 时光轴图片样式 */
        .timeline-image {
            width: 100%;
            max-width: 300px;
            height: auto;
            border-radius: 10px;
            margin-top: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        /* 天气信息样式 */
        .weather-info {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        
        .temperature {
            font-size: 1.2em;
            font-weight: bold;
            color: #333;
        }
        
        .description {
            color: #666;
        }
        
        .location {
            color: #999;
            font-size: 0.9em;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .time-unit {
                margin: 0 5px;
            }
            
            .time-number {
                font-size: 1.8em;
            }
            
            .timeline-image {
                max-width: 250px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// 页面加载完成后添加样式
document.addEventListener('DOMContentLoaded', function() {
    addCustomStyles();
});

console.log('💕 静态爱情网站脚本加载完成 - 奕铭 & 佳怡');