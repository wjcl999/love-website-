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
    apiHost: 'devapi.qweather.com', // 免费版API Host
    cities: [
        { 
            code: '101120801', 
            name: '淄博',
            lat: 36.81,
            lon: 118.05
        },
        { 
            code: '101250101', 
            name: '长沙',
            lat: 28.23,
            lon: 112.94
        }
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

// 天气功能 - 全功能版本
let weatherData = {};
let currentWeatherView = 'current'; // current, forecast, warning, indices, air

function initWeather() {
    if (!WEATHER_CONFIG.enabled || !WEATHER_CONFIG.apiKey) {
        console.log('天气功能未启用，请配置API密钥');
        return;
    }
    
    fetchAllWeatherData();
    // 每30分钟更新一次天气
    setInterval(fetchAllWeatherData, 30 * 60 * 1000);
}

// API请求助手函数
async function makeWeatherRequest(endpoint, params = {}) {
    const url = new URL(`https://${WEATHER_CONFIG.apiHost}${endpoint}`);
    
    // 添加通用参数
    url.searchParams.append('key', WEATHER_CONFIG.apiKey);
    url.searchParams.append('lang', 'zh');
    url.searchParams.append('unit', 'm'); // 公制单位
    
    // 添加自定义参数
    Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
    });
    
    const response = await fetch(url.toString());
    return response.json();
}

async function fetchAllWeatherData() {
    if (!WEATHER_CONFIG.enabled) return;
    
    const weatherContainer = document.getElementById('weather-container');
    if (!weatherContainer) return;
    
    weatherContainer.innerHTML = '<div class="weather-loading">🌤️ 正在获取全面天气信息...</div>';
    
    try {
        for (const city of WEATHER_CONFIG.cities) {
            console.log(`正在获取${city.name}天气数据...`);
            
            // 并行获取多种天气数据
            const [nowData, forecast3d, forecast7d, warningData, indicesData, airData] = await Promise.allSettled([
                // 实时天气
                makeWeatherRequest('/v7/weather/now', { location: city.code }),
                
                // 3天预报
                makeWeatherRequest('/v7/weather/3d', { location: city.code }),
                
                // 7天预报  
                makeWeatherRequest('/v7/weather/7d', { location: city.code }),
                
                // 天气预警
                makeWeatherRequest('/v7/warning/now', { location: city.code }),
                
                // 生活指数（运动、洗车、穿衣、感冒、紫外线等）
                makeWeatherRequest('/v7/indices/1d', { 
                    location: city.code,
                    type: '1,2,3,9,5' // 运动、洗车、穿衣、感冒、紫外线
                }),
                
                // 空气质量
                fetch(`https://${WEATHER_CONFIG.apiHost}/v7/air/now?location=${city.code}&key=${WEATHER_CONFIG.apiKey}`)
                    .then(res => res.json())
                    .catch(() => null)
            ]);
            
            // 处理数据
            const cityWeatherData = {
                city: city,
                now: nowData.status === 'fulfilled' && nowData.value.code === '200' ? nowData.value.now : null,
                forecast3d: forecast3d.status === 'fulfilled' && forecast3d.value.code === '200' ? forecast3d.value.daily : null,
                forecast7d: forecast7d.status === 'fulfilled' && forecast7d.value.code === '200' ? forecast7d.value.daily : null,
                warning: warningData.status === 'fulfilled' && warningData.value.code === '200' ? warningData.value.warning : [],
                indices: indicesData.status === 'fulfilled' && indicesData.value.code === '200' ? indicesData.value.daily : [],
                air: airData.status === 'fulfilled' && airData.value && airData.value.code === '200' ? airData.value.now : null
            };
            
            weatherData[city.name] = cityWeatherData;
            
            // 调试信息
            console.log(`${city.name} 数据获取完成:`, {
                now: !!cityWeatherData.now,
                forecast3d: !!cityWeatherData.forecast3d,
                forecast7d: !!cityWeatherData.forecast7d,
                warning: cityWeatherData.warning.length,
                indices: cityWeatherData.indices.length,
                air: !!cityWeatherData.air
            });
        }
        
        displayWeather();
        
    } catch (error) {
        console.error('天气获取失败:', error);
        
        // 显示模拟数据作为后备
        WEATHER_CONFIG.cities.forEach((city, index) => {
            weatherData[city.name] = {
                city: city,
                now: {
                    temp: index === 0 ? 8 : 12,
                    text: index === 0 ? '多云' : '晴',
                    humidity: 65,
                    windDir: '北风',
                    windScale: '3',
                    feelsLike: index === 0 ? 5 : 15,
                    pressure: 1013,
                    vis: 16
                },
                forecast3d: createMockForecast(3),
                forecast7d: createMockForecast(7),
                warning: [],
                indices: createMockIndices(),
                air: {
                    aqi: index === 0 ? 85 : 62,
                    category: index === 0 ? '良' : '优',
                    primary: 'PM2.5'
                }
            };
        });
        
        displayWeather();
        
        // 显示友好提示
        setTimeout(() => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'weather-api-notice';
            errorDiv.innerHTML = '⚠️ 当前使用模拟数据展示，实际部署时需配置API权限';
            weatherContainer.appendChild(errorDiv);
        }, 1000);
    }
}

// 创建模拟预报数据
function createMockForecast(days) {
    const forecast = [];
    const today = new Date();
    const temps = [8, 12, 15, 18, 22, 19, 16, 13];
    const weathers = ['晴', '多云', '阴', '小雨', '晴', '多云', '晴', '阴'];
    
    for (let i = 0; i < days; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        
        forecast.push({
            fxDate: date.toISOString().split('T')[0],
            tempMax: temps[i] + 5,
            tempMin: temps[i] - 2,
            textDay: weathers[i],
            textNight: weathers[i],
            windDirDay: '北风',
            windScaleDay: '3-4',
            humidity: 65 + (i * 2),
            uvIndex: i < 3 ? 6 : 4,
            sunrise: '06:30',
            sunset: '18:00'
        });
    }
    
    return forecast;
}

// 创建模拟生活指数数据
function createMockIndices() {
    return [
        { type: '1', name: '运动指数', level: '2', category: '较适宜', text: '天气较好，适宜进行各项运动' },
        { type: '2', name: '洗车指数', level: '1', category: '适宜', text: '天气较好，适合洗车' },
        { type: '3', name: '穿衣指数', level: '3', category: '较冷', text: '建议着厚外套加毛衣等服装' },
        { type: '9', name: '感冒指数', level: '2', category: '较易发', text: '天气转凉，注意预防感冒' },
        { type: '5', name: '紫外线指数', level: '3', category: '中等', text: '外出需要防晒措施' }
    ];
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
                <button class="weather-tab ${currentWeatherView === 'current' ? 'active' : ''}" onclick="switchWeatherView('current')">实时</button>
                <button class="weather-tab ${currentWeatherView === 'forecast' ? 'active' : ''}" onclick="switchWeatherView('forecast')">预报</button>
                <button class="weather-tab ${currentWeatherView === 'warning' ? 'active' : ''}" onclick="switchWeatherView('warning')">预警</button>
                <button class="weather-tab ${currentWeatherView === 'indices' ? 'active' : ''}" onclick="switchWeatherView('indices')">指数</button>
                <button class="weather-tab ${currentWeatherView === 'air' ? 'active' : ''}" onclick="switchWeatherView('air')">空气</button>
            </div>
            <div class="weather-content">
    `;
    
    // 根据当前视图显示不同内容
    switch (currentWeatherView) {
        case 'current':
            weatherHtml += renderCurrentWeather(weatherIcons);
            break;
        case 'forecast':
            weatherHtml += renderForecastWeather(weatherIcons);
            break;
        case 'warning':
            weatherHtml += renderWarningWeather();
            break;
        case 'indices':
            weatherHtml += renderIndicesWeather();
            break;
        case 'air':
            weatherHtml += renderAirQuality();
            break;
    }
    
    weatherHtml += '</div></div>';
    weatherContainer.innerHTML = weatherHtml;
}

// 渲染实时天气
function renderCurrentWeather(weatherIcons) {
    let html = '<div class="weather-cities">';
    
    WEATHER_CONFIG.cities.forEach(city => {
        const data = weatherData[city.name];
        if (data && data.now) {
            const temp = Math.round(data.now.temp);
            const feelsLike = data.now.feelsLike ? Math.round(data.now.feelsLike) : temp;
            const description = data.now.text;
            const icon = weatherIcons[description] || '🌤️';
            const humidity = data.now.humidity;
            const windDir = data.now.windDir;
            const windScale = data.now.windScale;
            const pressure = data.now.pressure;
            const vis = data.now.vis;
            
            html += `
                <div class="weather-city-card">
                    <h3 class="city-name">${city.name}</h3>
                    <div class="weather-main">
                        <div class="weather-icon">${icon}</div>
                        <div class="temp-section">
                            <div class="temperature">${temp}°C</div>
                            <div class="feels-like">体感 ${feelsLike}°C</div>
                        </div>
                    </div>
                    <div class="weather-desc">${description}</div>
                    <div class="weather-details">
                        <div class="detail-row">
                            <span>💧 湿度 ${humidity}%</span>
                            <span>💨 ${windDir} ${windScale}级</span>
                        </div>
                        <div class="detail-row">
                            <span>📊 气压 ${pressure}hPa</span>
                            <span>👁️ 能见度 ${vis}km</span>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    html += '</div>';
    return html;
}

// 渲染预报天气
function renderForecastWeather(weatherIcons) {
    let html = '<div class="weather-forecast">';
    
    WEATHER_CONFIG.cities.forEach(city => {
        const data = weatherData[city.name];
        if (data && (data.forecast7d || data.forecast3d)) {
            const forecast = data.forecast7d || data.forecast3d;
            
            html += `<div class="forecast-city">
                <h3 class="city-name">${city.name} - ${forecast.length}天预报</h3>
                <div class="forecast-days">`;
            
            forecast.forEach((day, index) => {
                const date = new Date(day.fxDate);
                const dayName = index === 0 ? '今天' : (index === 1 ? '明天' : (index === 2 ? '后天' : `${date.getMonth() + 1}/${date.getDate()}`));
                const icon = weatherIcons[day.textDay] || '🌤️';
                const uvLevel = day.uvIndex ? `UV ${day.uvIndex}` : '';
                
                html += `
                    <div class="forecast-day">
                        <div class="day-info">
                            <span class="day-name">${dayName}</span>
                            <span class="day-date">${day.fxDate}</span>
                        </div>
                        <div class="day-weather">
                            <div class="day-icon">${icon}</div>
                            <div class="day-temp">${day.tempMin}° / ${day.tempMax}°</div>
                            <div class="day-desc">${day.textDay}</div>
                            ${uvLevel ? `<div class="day-uv">${uvLevel}</div>` : ''}
                        </div>
                        <div class="day-details">
                            <span>💨 ${day.windDirDay} ${day.windScaleDay}</span>
                            <span>💧 ${day.humidity}%</span>
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
    });
    
    html += '</div>';
    return html;
}

// 渲染预警信息
function renderWarningWeather() {
    let html = '<div class="weather-warnings">';
    
    let hasWarnings = false;
    WEATHER_CONFIG.cities.forEach(city => {
        const data = weatherData[city.name];
        if (data && data.warning && data.warning.length > 0) {
            hasWarnings = true;
            html += `<div class="warning-city">
                <h3 class="city-name">${city.name}</h3>
                <div class="warning-list">`;
            
            data.warning.forEach(warning => {
                const severityColors = {
                    'Blue': '#2196F3',
                    'Yellow': '#FF9800', 
                    'Orange': '#FF5722',
                    'Red': '#F44336'
                };
                const color = severityColors[warning.severityColor] || '#2196F3';
                
                html += `
                    <div class="warning-item" style="border-left-color: ${color}">
                        <div class="warning-header">
                            <span class="warning-type">${warning.typeName}</span>
                            <span class="warning-level" style="background: ${color}">${warning.severity}</span>
                        </div>
                        <div class="warning-title">${warning.title}</div>
                        <div class="warning-time">发布时间: ${new Date(warning.pubTime).toLocaleString()}</div>
                        <div class="warning-text">${warning.text}</div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
    });
    
    if (!hasWarnings) {
        html += `
            <div class="no-warnings">
                <div class="no-warnings-icon">🌤️</div>
                <h3>暂无天气预警</h3>
                <p>当前两地天气状况良好，无需特别关注</p>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// 渲染生活指数
function renderIndicesWeather() {
    let html = '<div class="weather-indices">';
    
    WEATHER_CONFIG.cities.forEach(city => {
        const data = weatherData[city.name];
        if (data && data.indices && data.indices.length > 0) {
            html += `<div class="indices-city">
                <h3 class="city-name">${city.name}</h3>
                <div class="indices-grid">`;
            
            data.indices.forEach(index => {
                const levelColors = {
                    '1': '#4CAF50', // 绿色 - 优
                    '2': '#8BC34A', // 浅绿 - 良好
                    '3': '#FF9800', // 橙色 - 一般
                    '4': '#FF5722', // 红色 - 差
                    '5': '#9C27B0'  // 紫色 - 很差
                };
                const color = levelColors[index.level] || '#607D8B';
                
                html += `
                    <div class="index-item">
                        <div class="index-header">
                            <span class="index-name">${index.name}</span>
                            <span class="index-level" style="background: ${color}">${index.category}</span>
                        </div>
                        <div class="index-text">${index.text}</div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
    });
    
    html += '</div>';
    return html;
}

// 渲染空气质量
function renderAirQuality() {
    let html = '<div class="weather-air">';
    
    WEATHER_CONFIG.cities.forEach(city => {
        const data = weatherData[city.name];
        if (data && data.air) {
            const aqi = data.air.aqi;
            const category = data.air.category;
            const primary = data.air.primary;
            
            // AQI等级颜色
            const aqiColors = {
                '优': '#4CAF50',
                '良': '#8BC34A', 
                '轻度污染': '#FF9800',
                '中度污染': '#FF5722',
                '重度污染': '#9C27B0',
                '严重污染': '#795548'
            };
            const color = aqiColors[category] || '#607D8B';
            
            html += `
                <div class="air-city-card">
                    <h3 class="city-name">${city.name}</h3>
                    <div class="air-main">
                        <div class="aqi-value" style="color: ${color}">${aqi}</div>
                        <div class="aqi-info">
                            <div class="aqi-category" style="background: ${color}">${category}</div>
                            <div class="aqi-primary">主要污染物: ${primary}</div>
                        </div>
                    </div>
                    <div class="air-suggestion">
                        <p>💡 ${getAirSuggestion(category)}</p>
                    </div>
                </div>
            `;
        }
    });
    
    html += '</div>';
    return html;
}

// 获取空气质量建议
function getAirSuggestion(category) {
    const suggestions = {
        '优': '空气质量令人满意，基本无空气污染，可以正常活动。',
        '良': '空气质量可以接受，少数特别敏感人群应减少户外活动。',
        '轻度污染': '易感人群症状有轻度加剧，健康人群出现刺激症状。',
        '中度污染': '进一步加剧易感人群症状，可能对健康人群心脏、呼吸系统有影响。',
        '重度污染': '心脏病和肺病患者症状显著加剧，运动耐受力降低。',
        '严重污染': '健康人群运动耐受力降低，有明显强烈症状。'
    };
    return suggestions[category] || '建议关注空气质量变化。';
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