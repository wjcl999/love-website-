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

// 天气API配置 - 使用和风天气API
const WEATHER_CONFIG = {
    apiKey: '80162660f80c4323b6ccc00c85440068', // 你的API Key
    apiHost: 'kq564u7k8t.re.qweatherapi.com', // 你的专属API Host
    jwtToken: null, // JWT Token（如果有的话，推荐使用）
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

// API请求助手函数 - 严格按照和风天气文档格式
async function makeWeatherRequest(endpoint, params = {}) {
    const url = new URL(`https://${WEATHER_CONFIG.apiHost}${endpoint}`);
    
    // 添加通用参数
    url.searchParams.append('lang', 'zh');
    url.searchParams.append('unit', 'm'); // 公制单位
    
    // 添加自定义参数
    Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
    });
    
    // 准备请求选项
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    
    // 根据文档要求选择认证方式
    if (WEATHER_CONFIG.jwtToken) {
        // 方式1: JWT Bearer Token认证（文档推荐）
        // 格式：-H 'Authorization: Bearer your_token'
        requestOptions.headers['Authorization'] = `Bearer ${WEATHER_CONFIG.jwtToken}`;
        console.log('使用JWT Bearer Token认证');
    } else if (WEATHER_CONFIG.apiKey) {
        // 方式2: API Key Header认证（文档标准方式）
        // 格式：-H "X-QW-Api-Key: ABCD1234EFGH"
        requestOptions.headers['X-QW-Api-Key'] = WEATHER_CONFIG.apiKey;
        console.log('使用API Key Header认证');
    } else {
        throw new Error('未配置API认证信息：请设置 jwtToken 或 apiKey');
    }
    
    // 添加压缩支持（文档要求）
    requestOptions.headers['Accept-Encoding'] = 'gzip';
    
    console.log(`🌤️ API请求: ${url.toString()}`);
    console.log(`🔑 认证方式: ${WEATHER_CONFIG.jwtToken ? 'JWT Bearer' : 'X-QW-Api-Key'}`);
    
    try {
        const response = await fetch(url.toString(), requestOptions);
        const data = await response.json();
        
        // 记录响应状态
        console.log(`📡 API响应 [${response.status}]:`, data);
        
        // 检查业务状态码
        if (data.code !== '200') {
            let errorMsg = `API业务错误: ${data.code}`;
            
            // 根据和风天气状态码提供具体建议
            switch(data.code) {
                case '401':
                    errorMsg += ' - API Key无效或未配置';
                    break;
                case '402':
                    errorMsg += ' - API Key已过期';
                    break;
                case '403':
                    errorMsg += ' - 无访问权限或超出调用次数';
                    break;
                case '404':
                    errorMsg += ' - 请求的数据不存在';
                    break;
                case '429':
                    errorMsg += ' - 超过调用频次限制';
                    break;
                case '500':
                    errorMsg += ' - 服务器内部错误';
                    break;
                default:
                    errorMsg += ' - 未知错误';
            }
            
            throw new Error(errorMsg);
        }
        
        if (!response.ok) {
            throw new Error(`HTTP请求失败: ${response.status} - ${response.statusText}`);
        }
        
        return data;
        
    } catch (error) {
        console.error('❌ API请求失败:', error.message);
        throw error;
    }
}

async function fetchAllWeatherData() {
    if (!WEATHER_CONFIG.enabled) return;
    
    const weatherContainer = document.getElementById('weather-container');
    if (!weatherContainer) return;
    
    // 验证API配置
    if (!WEATHER_CONFIG.apiKey && !WEATHER_CONFIG.jwtToken) {
        weatherContainer.innerHTML = `
            <div class="weather-error">
                <h3>⚠️ 天气API配置错误</h3>
                <p>请配置API Key 或 JWT Token</p>
                <small>请在 WEATHER_CONFIG 中正确配置认证信息</small>
            </div>
        `;
        return;
    }
    
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
        
        // 根据错误类型显示不同的错误信息
        let errorMessage = '天气数据获取失败';
        let errorDetails = error.message || '未知错误';
        
        if (error.message.includes('403')) {
            errorMessage = '⚠️ API访问权限问题';
            errorDetails = `
                <p><strong>可能的解决方案：</strong></p>
                <ul>
                    <li>1. 检查API Host是否正确（免费版：devapi.qweather.com，付费版：api.qweather.com）</li>
                    <li>2. 验证API Key是否有效且未过期</li>
                    <li>3. 确认账户是否有足够的调用次数</li>
                    <li>4. 尝试使用JWT Token认证（在WEATHER_CONFIG.jwtToken中配置）</li>
                </ul>
                <p><small>当前配置：${WEATHER_CONFIG.apiHost}</small></p>
            `;
        } else if (error.message.includes('401')) {
            errorMessage = '🔐 API认证失败';
            errorDetails = 'API Key无效或已过期，请检查配置';
        } else if (error.message.includes('429')) {
            errorMessage = '⏰ API调用次数超限';
            errorDetails = '今日API调用次数已用完，请明天再试或升级账户';
        }
        
        weatherContainer.innerHTML = `
            <div class="weather-error-detailed">
                <h3>${errorMessage}</h3>
                <div class="error-details">${errorDetails}</div>
                <button onclick="initWeather()" class="retry-btn">🔄 重试</button>
            </div>
        `;
        
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
        
        // 3秒后显示模拟数据
        setTimeout(() => {
            if (weatherContainer.querySelector('.weather-error-detailed')) {
                const mockNotice = document.createElement('div');
                mockNotice.className = 'weather-mock-notice';
                mockNotice.innerHTML = `
                    <h4>📊 显示模拟数据</h4>
                    <p>API暂不可用，以下为模拟天气数据展示</p>
                `;
                weatherContainer.appendChild(mockNotice);
                displayWeather();
            }
        }, 3000);
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
    
    // 初始化横向滚动功能
    setTimeout(() => {
        initHorizontalScroll();
    }, 100);
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

// 横向滚动功能 - 支持鼠标滚轮和触摸滑动
function initHorizontalScroll() {
    // 为所有.forecast-days容器添加横向滚动支持
    document.querySelectorAll('.forecast-days').forEach(container => {
        // 鼠标滚轮横向滚动
        container.addEventListener('wheel', function(e) {
            // 防止页面垂直滚动
            e.preventDefault();
            
            // 水平滚动
            const scrollAmount = e.deltaY * 2; // 调整滚动速度
            this.scrollLeft += scrollAmount;
            
            // 平滑滚动效果
            this.style.scrollBehavior = 'smooth';
        });
        
        // 鼠标进入时显示滚动提示
        container.addEventListener('mouseenter', function() {
            if (this.scrollWidth > this.clientWidth) {
                this.style.cursor = 'grab';
                
                // 检测是否为移动端
                const isMobile = window.innerWidth <= 768;
                
                // 添加滚动提示（如果不存在）
                if (!this.querySelector('.scroll-hint')) {
                    const hint = document.createElement('div');
                    hint.className = 'scroll-hint';
                    hint.innerHTML = isMobile ? '👆 滑动查看更多' : '🖱️ 滚动查看更多';
                    hint.style.cssText = `
                        position: absolute;
                        top: -30px;
                        right: 10px;
                        background: rgba(0, 0, 0, 0.8);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 15px;
                        font-size: 12px;
                        opacity: 0.8;
                        pointer-events: none;
                        animation: fadeIn 0.3s ease;
                        z-index: 10;
                    `;
                    this.appendChild(hint);
                    
                    // 3秒后自动消失
                    setTimeout(() => {
                        if (hint.parentNode) {
                            hint.style.animation = 'fadeOut 0.3s ease';
                            setTimeout(() => {
                                if (hint.parentNode) hint.remove();
                            }, 300);
                        }
                    }, 3000);
                }
                
                // 添加移动端滑动指示器
                if (isMobile && !this.querySelector('.mobile-swipe-hint')) {
                    const swipeHint = document.createElement('div');
                    swipeHint.className = 'mobile-swipe-hint';
                    swipeHint.innerHTML = '👉';
                    this.appendChild(swipeHint);
                    
                    // 用户开始滚动后隐藏提示
                    this.addEventListener('scroll', function hideHint() {
                        if (swipeHint.parentNode) {
                            swipeHint.style.animation = 'fadeOut 0.3s ease';
                            setTimeout(() => {
                                if (swipeHint.parentNode) swipeHint.remove();
                            }, 300);
                        }
                        this.removeEventListener('scroll', hideHint);
                    });
                }
                
                // 添加滚动进度指示器
                if (!this.querySelector('.scroll-indicator')) {
                    const indicator = document.createElement('div');
                    indicator.className = 'scroll-indicator';
                    
                    const itemCount = this.children.length;
                    const visibleItems = Math.floor(this.clientWidth / 155); // 每个item大约155px宽
                    const totalDots = Math.max(1, Math.ceil(itemCount / visibleItems));
                    
                    for (let i = 0; i < totalDots; i++) {
                        const dot = document.createElement('div');
                        dot.className = 'scroll-dot';
                        if (i === 0) dot.classList.add('active');
                        indicator.appendChild(dot);
                    }
                    
                    this.appendChild(indicator);
                    
                    // 滚动时更新指示器
                    this.addEventListener('scroll', () => {
                        const scrollPercent = this.scrollLeft / (this.scrollWidth - this.clientWidth);
                        const activeDot = Math.round(scrollPercent * (totalDots - 1));
                        
                        indicator.querySelectorAll('.scroll-dot').forEach((dot, index) => {
                            dot.classList.toggle('active', index === activeDot);
                        });
                    });
                }
            }
        });
        
        // 鼠标离开时恢复默认光标
        container.addEventListener('mouseleave', function() {
            this.style.cursor = 'default';
        });
        
        // 添加拖拽滚动支持
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', function(e) {
            isDown = true;
            this.style.cursor = 'grabbing';
            startX = e.pageX - this.offsetLeft;
            scrollLeft = this.scrollLeft;
            this.style.scrollBehavior = 'auto';
        });
        
        container.addEventListener('mouseleave', function() {
            isDown = false;
            this.style.cursor = 'default';
        });
        
        container.addEventListener('mouseup', function() {
            isDown = false;
            this.style.cursor = 'grab';
        });
        
        container.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - this.offsetLeft;
            const walk = (x - startX) * 2;
            this.scrollLeft = scrollLeft - walk;
        });
        
        // 触摸支持（移动端）
        let touchStartX = 0;
        let touchScrollLeft = 0;
        
        container.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchScrollLeft = this.scrollLeft;
            this.style.scrollBehavior = 'auto';
        });
        
        container.addEventListener('touchmove', function(e) {
            if (!touchStartX) return;
            
            const touchX = e.touches[0].clientX;
            const diff = touchStartX - touchX;
            this.scrollLeft = touchScrollLeft + diff;
        });
        
        container.addEventListener('touchend', function() {
            touchStartX = 0;
            this.style.scrollBehavior = 'smooth';
        });
    });
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
        
        /* 滚动提示动画 */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 0.8; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 0.8; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
        
        /* 滑动指示器样式 */
        .scroll-indicator {
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            padding: 5px 10px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .scroll-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transition: all 0.3s ease;
        }
        
        .scroll-dot.active {
            background: rgba(255, 107, 107, 0.8);
            transform: scale(1.2);
        }
        
        /* 移动端滑动提示 */
        .mobile-swipe-hint {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 8px;
            border-radius: 50%;
            font-size: 16px;
            animation: pulse 2s infinite;
            pointer-events: none;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: translateY(-50%) scale(1); }
            50% { opacity: 1; transform: translateY(-50%) scale(1.1); }
        }

        /* 天气错误提示样式 */
        .weather-error, .weather-error-detailed {
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            color: white;
            padding: 20px;
            border-radius: 15px;
            margin: 10px 0;
            text-align: center;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }
        
        .weather-error h3, .weather-error-detailed h3 {
            margin-top: 0;
            font-size: 1.2em;
        }
        
        .error-details {
            background: rgba(255, 255, 255, 0.15);
            padding: 15px;
            border-radius: 10px;
            margin: 15px 0;
            text-align: left;
        }
        
        .error-details ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        
        .error-details li {
            margin: 8px 0;
            line-height: 1.4;
        }
        
        .retry-btn {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .retry-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        
        .weather-mock-notice {
            background: linear-gradient(135deg, #4ecdc4, #45b7d1);
            color: white;
            padding: 15px;
            border-radius: 10px;
            margin: 10px 0;
            text-align: center;
        }
        
        .weather-mock-notice h4 {
            margin-top: 0;
            margin-bottom: 8px;
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
            
            .error-details {
                font-size: 0.9em;
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