// 管理后台JavaScript逻辑

// 存储键名
const ADMIN_STORAGE_KEYS = {
    QUESTIONS: 'love_admin_questions',
    IMAGES: 'love_admin_images',  
    TIMELINE: 'love_admin_timeline',
    MESSAGES: 'love_admin_messages',
    SETTINGS: 'love_admin_settings'
};

// 全局变量
let currentSection = 'dashboard';
let currentQuestions = [];
let filteredQuestions = [];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查管理员权限
    if (!checkAdminAuth()) {
        window.location.href = 'auth.html';
        return;
    }
    
    // 初始化页面
    initAdminPanel();
    
    // 设置登录时间显示
    updateLoginTime();
    
    // 加载数据
    loadAllData();
    
    // 设置文件上传
    setupFileUpload();
});

// 检查管理员认证
function checkAdminAuth() {
    // 检查是否通过666后门进入（检查来源页面）
    const referrer = document.referrer;
    if (referrer && referrer.includes('auth.html')) {
        // 从验证页面过来的，设置临时管理员会话
        const sessionData = {
            timestamp: Math.floor(Date.now() / 1000),
            role: 'admin'
        };
        setStorageItem('love_admin_session', sessionData);
        return true;
    }
    
    const adminSession = getStorageItem('love_admin_session');
    if (!adminSession) return false;
    
    const now = Math.floor(Date.now() / 1000);
    const sessionTime = adminSession.timestamp;
    const isValid = (now - sessionTime) < (30 * 60); // 30分钟有效期
    
    if (!isValid) {
        removeStorageItem('love_admin_session');
        return false;
    }
    
    return adminSession.role === 'admin';
}

// 初始化管理面板
function initAdminPanel() {
    // 默认显示仪表盘
    showSection('dashboard');
    
    // 设置导航点击事件
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            showSection(section);
        });
    });
    
    // 设置模态框关闭事件
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// 显示指定部分
function showSection(sectionId) {
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
    
    // 更新内容区域
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${sectionId}-section`).classList.add('active');
    
    // 更新面包屑
    const sectionNames = {
        'dashboard': '仪表盘',
        'questions': '问题管理', 
        'images': '图片管理',
        'timeline': '时光轴管理',
        'messages': '留言管理',
        'settings': '系统设置'
    };
    document.getElementById('currentSection').textContent = sectionNames[sectionId];
    
    currentSection = sectionId;
    
    // 根据不同section加载对应数据
    switch(sectionId) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'questions':
            loadQuestionsData();
            break;
        case 'images':
            loadImagesData();
            break;
        case 'timeline':
            loadTimelineData();
            break;
        case 'messages':
            loadMessagesData();
            break;
        case 'settings':
            loadSettingsData();
            break;
    }
}

// 加载所有数据
function loadAllData() {
    // 从questions.js加载问题数据
    if (typeof QUESTIONS_DATABASE !== 'undefined') {
        currentQuestions = [...QUESTIONS_DATABASE.questions];
        filteredQuestions = [...currentQuestions];
    }
    
    // 更新统计数据
    updateStats();
}

// 更新统计数据
function updateStats() {
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    document.getElementById('totalImages').textContent = getStorageItem(ADMIN_STORAGE_KEYS.IMAGES)?.length || 0;
    document.getElementById('totalMessages').textContent = JSON.parse(localStorage.getItem('loveMessages') || '[]').length;
    document.getElementById('todayVisits').textContent = '0'; // 后续可以实现访问统计
}

// 加载仪表盘数据
function loadDashboardData() {
    // 显示今日问题
    if (typeof getTodayQuestion === 'function') {
        const todayQ = getTodayQuestion();
        document.getElementById('todayQuestionText').textContent = todayQ.question;
        document.getElementById('todayQuestionAnswers').textContent = todayQ.answers.join(', ');
    }
}

// 加载问题数据
function loadQuestionsData() {
    displayQuestionsTable();
}

// 显示问题表格
function displayQuestionsTable() {
    const tbody = document.getElementById('questionsTableBody');
    tbody.innerHTML = '';
    
    if (filteredQuestions.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: #999;">
                    暂无问题数据
                </td>
            </tr>
        `;
        return;
    }
    
    filteredQuestions.forEach(question => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${question.id}</td>
            <td class="question-text" title="${question.question}">
                ${question.question.length > 30 ? question.question.substring(0, 30) + '...' : question.question}
            </td>
            <td><span class="category-badge">${QUESTIONS_DATABASE.categories[question.category] || question.category}</span></td>
            <td><span class="difficulty-badge difficulty-${question.difficulty}">${getDifficultyText(question.difficulty)}</span></td>
            <td>${question.answers.length}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="editQuestion(${question.id})" title="编辑">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteQuestion(${question.id})" title="删除" style="margin-left: 8px;">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// 获取难度文本
function getDifficultyText(difficulty) {
    const texts = {
        'easy': '简单',
        'medium': '中等', 
        'hard': '困难'
    };
    return texts[difficulty] || difficulty;
}

// 过滤问题
function filterQuestions() {
    const category = document.getElementById('categoryFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;
    
    filteredQuestions = currentQuestions.filter(q => {
        return (!category || q.category === category) && 
               (!difficulty || q.difficulty === difficulty);
    });
    
    displayQuestionsTable();
}

// 搜索问题
function searchQuestions() {
    const keyword = document.getElementById('questionSearch').value.toLowerCase();
    
    if (!keyword) {
        filterQuestions(); // 如果没有关键词，使用当前过滤条件
        return;
    }
    
    filteredQuestions = currentQuestions.filter(q => {
        return q.question.toLowerCase().includes(keyword) ||
               q.answers.some(answer => answer.toLowerCase().includes(keyword)) ||
               q.hint.toLowerCase().includes(keyword);
    });
    
    displayQuestionsTable();
}

// 显示添加问题模态框
function showAddQuestionModal() {
    // 清空表单
    document.getElementById('questionForm').reset();
    
    // 显示模态框
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('addQuestionModal').classList.add('active');
    
    // 聚焦到问题输入框
    document.getElementById('questionText').focus();
}

// 保存问题
function saveQuestion() {
    const questionText = document.getElementById('questionText').value.trim();
    const category = document.getElementById('questionCategory').value;
    const difficulty = document.getElementById('questionDifficulty').value;
    const answersText = document.getElementById('questionAnswers').value.trim();
    const hint = document.getElementById('questionHint').value.trim();
    
    // 验证输入
    if (!questionText) {
        alert('请输入问题内容');
        return;
    }
    
    if (!answersText) {
        alert('请输入至少一个答案');
        return;
    }
    
    // 解析答案
    const answers = answersText.split('\n').map(a => a.trim()).filter(a => a);
    
    if (answers.length === 0) {
        alert('请输入至少一个有效答案');
        return;
    }
    
    // 创建新问题
    const newQuestion = {
        id: Math.max(...currentQuestions.map(q => q.id), 0) + 1,
        category: category,
        question: questionText,
        answers: answers,
        difficulty: difficulty,
        hint: hint || '暂无提示'
    };
    
    // 添加到问题列表
    currentQuestions.push(newQuestion);
    filteredQuestions = [...currentQuestions];
    
    // 保存到本地存储
    saveQuestionsToStorage();
    
    // 更新显示
    displayQuestionsTable();
    updateStats();
    
    // 关闭模态框
    closeModal();
    
    // 显示成功消息
    showNotification('问题添加成功！', 'success');
}

// 编辑问题
function editQuestion(id) {
    const question = currentQuestions.find(q => q.id === id);
    if (!question) return;
    
    // 填充表单
    document.getElementById('questionText').value = question.question;
    document.getElementById('questionCategory').value = question.category;
    document.getElementById('questionDifficulty').value = question.difficulty;
    document.getElementById('questionAnswers').value = question.answers.join('\n');
    document.getElementById('questionHint').value = question.hint;
    
    // 修改保存按钮行为
    const saveBtn = document.querySelector('#addQuestionModal .btn-primary');
    saveBtn.textContent = '更新';
    saveBtn.onclick = function() {
        updateQuestion(id);
    };
    
    // 显示模态框
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('addQuestionModal').classList.add('active');
}

// 更新问题
function updateQuestion(id) {
    const questionIndex = currentQuestions.findIndex(q => q.id === id);
    if (questionIndex === -1) return;
    
    const questionText = document.getElementById('questionText').value.trim();
    const category = document.getElementById('questionCategory').value;
    const difficulty = document.getElementById('questionDifficulty').value;
    const answersText = document.getElementById('questionAnswers').value.trim();
    const hint = document.getElementById('questionHint').value.trim();
    
    // 验证输入
    if (!questionText || !answersText) {
        alert('请填写完整信息');
        return;
    }
    
    // 解析答案
    const answers = answersText.split('\n').map(a => a.trim()).filter(a => a);
    
    // 更新问题
    currentQuestions[questionIndex] = {
        ...currentQuestions[questionIndex],
        question: questionText,
        category: category,
        difficulty: difficulty,
        answers: answers,
        hint: hint || '暂无提示'
    };
    
    // 更新过滤后的列表
    filteredQuestions = [...currentQuestions];
    
    // 保存到本地存储
    saveQuestionsToStorage();
    
    // 更新显示
    displayQuestionsTable();
    
    // 重置保存按钮
    const saveBtn = document.querySelector('#addQuestionModal .btn-primary');
    saveBtn.textContent = '保存';
    saveBtn.onclick = saveQuestion;
    
    // 关闭模态框
    closeModal();
    
    // 显示成功消息
    showNotification('问题更新成功！', 'success');
}

// 删除问题
function deleteQuestion(id) {
    if (!confirm('确定要删除这个问题吗？此操作不可恢复。')) {
        return;
    }
    
    // 从列表中移除
    currentQuestions = currentQuestions.filter(q => q.id !== id);
    filteredQuestions = filteredQuestions.filter(q => q.id !== id);
    
    // 保存到本地存储
    saveQuestionsToStorage();
    
    // 更新显示
    displayQuestionsTable();
    updateStats();
    
    // 显示成功消息
    showNotification('问题删除成功！', 'success');
}

// 保存问题到本地存储
function saveQuestionsToStorage() {
    setStorageItem(ADMIN_STORAGE_KEYS.QUESTIONS, currentQuestions);
}

// 加载图片数据
function loadImagesData() {
    const imagesGrid = document.getElementById('imagesGrid');
    const images = getStorageItem(ADMIN_STORAGE_KEYS.IMAGES) || [];
    
    if (images.length === 0) {
        imagesGrid.innerHTML = `
            <div class="upload-placeholder">
                <i class="fas fa-cloud-upload-alt"></i>
                <p>暂无图片，点击上传按钮添加照片</p>
                <button class="btn btn-outline" onclick="showUploadModal()">开始上传</button>
            </div>
        `;
        return;
    }
    
    imagesGrid.innerHTML = '';
    images.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}">
            <div class="image-info">
                <div class="image-title">${image.title}</div>
                <div class="image-date">${image.date}</div>
                <div style="margin-top: 10px;">
                    <button class="btn btn-sm btn-outline" onclick="editImage('${image.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteImage('${image.id}')">删除</button>
                </div>
            </div>
        `;
        imagesGrid.appendChild(imageItem);
    });
}

// 加载时光轴数据
function loadTimelineData() {
    const timelineList = document.getElementById('timelineList');
    const timeline = getStorageItem(ADMIN_STORAGE_KEYS.TIMELINE) || [];
    
    if (timeline.length === 0) {
        timelineList.innerHTML = `
            <div style="text-align: center; padding: 60px; color: #999;">
                <i class="fas fa-clock" style="font-size: 48px; margin-bottom: 20px; color: #ddd;"></i>
                <p>暂无时光轴数据</p>
                <button class="btn btn-outline" onclick="showAddTimelineModal()">添加第一个时刻</button>
            </div>
        `;
        return;
    }
    
    // 按日期排序
    timeline.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    timelineList.innerHTML = '';
    timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-description">${item.description}</div>
                <div style="margin-top: 15px;">
                    <button class="btn btn-sm btn-outline" onclick="editTimeline('${item.id}')">编辑</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTimeline('${item.id}')">删除</button>
                </div>
            </div>
        `;
        timelineList.appendChild(timelineItem);
    });
}

// 加载留言数据
function loadMessagesData() {
    const messagesList = document.getElementById('messagesList');
    const messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    
    if (messages.length === 0) {
        messagesList.innerHTML = `
            <div style="text-align: center; padding: 60px; color: #999;">
                <i class="fas fa-comments" style="font-size: 48px; margin-bottom: 20px; color: #ddd;"></i>
                <p>暂无留言数据</p>
            </div>
        `;
        return;
    }
    
    messagesList.innerHTML = '';
    messages.forEach(message => {
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.innerHTML = `
            <div class="message-header">
                <div class="message-time">${message.time}</div>
                <button class="btn btn-sm btn-danger" onclick="deleteMessage(${message.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="message-content">${escapeHtml(message.content)}</div>
        `;
        messagesList.appendChild(messageItem);
    });
}

// 加载设置数据
function loadSettingsData() {
    const settings = getStorageItem(ADMIN_STORAGE_KEYS.SETTINGS) || {};
    
    // 填充表单
    document.getElementById('maxAttempts').value = settings.maxAttempts || 3;
    document.getElementById('lockoutDuration').value = settings.lockoutDuration || 60;
    document.getElementById('sessionDuration').value = settings.sessionDuration || 24;
    document.getElementById('imageHosting').value = settings.imageHosting || 'local';
    document.getElementById('apiKey').value = settings.apiKey || '';
    document.getElementById('bucketName').value = settings.bucketName || '';
}

// 显示上传模态框
function showUploadModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('uploadModal').classList.add('active');
}

// 设置文件上传
function setupFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.querySelector('.upload-area');
    
    // 点击上传
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    // 文件选择
    fileInput.addEventListener('change', handleFileSelect);
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#667eea';
    });
    
    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ddd';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ddd';
        handleFileSelect({ target: { files: e.dataTransfer.files } });
    });
}

// 处理文件选择
function handleFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    
    // 显示进度条
    document.getElementById('uploadProgress').style.display = 'block';
    
    // 模拟上传过程
    let progress = 0;
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // 处理文件
            processUploadedFiles(files);
        }
        
        progressBar.style.width = progress + '%';
        progressText.textContent = Math.floor(progress) + '%';
    }, 200);
}

// 处理上传的文件
function processUploadedFiles(files) {
    const images = getStorageItem(ADMIN_STORAGE_KEYS.IMAGES) || [];
    
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = {
                    id: Date.now() + Math.random().toString(36).substr(2, 9),
                    title: file.name.split('.')[0],
                    url: e.target.result,
                    date: new Date().toLocaleDateString('zh-CN'),
                    size: file.size,
                    type: file.type
                };
                
                images.push(imageData);
                setStorageItem(ADMIN_STORAGE_KEYS.IMAGES, images);
                
                // 更新统计
                updateStats();
                
                // 如果当前在图片管理页面，刷新显示
                if (currentSection === 'images') {
                    loadImagesData();
                }
            };
            reader.readAsDataURL(file);
        }
    });
    
    // 延迟关闭模态框和显示成功消息
    setTimeout(() => {
        closeModal();
        showNotification('图片上传成功！', 'success');
        
        // 重置上传进度
        document.getElementById('uploadProgress').style.display = 'none';
        document.querySelector('.progress-fill').style.width = '0%';
        document.querySelector('.progress-text').textContent = '0%';
        document.getElementById('fileInput').value = '';
    }, 500);
}

// 关闭模态框
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    
    // 重置问题表单保存按钮
    const saveBtn = document.querySelector('#addQuestionModal .btn-primary');
    if (saveBtn) {
        saveBtn.textContent = '保存';
        saveBtn.onclick = saveQuestion;
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        font-weight: 500;
        z-index: 3000;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
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
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 导出所有数据
function exportAllData() {
    const allData = {
        questions: currentQuestions,
        images: getStorageItem(ADMIN_STORAGE_KEYS.IMAGES) || [],
        timeline: getStorageItem(ADMIN_STORAGE_KEYS.TIMELINE) || [],
        messages: JSON.parse(localStorage.getItem('loveMessages') || '[]'),
        settings: getStorageItem(ADMIN_STORAGE_KEYS.SETTINGS) || {},
        exportTime: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(allData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `love-website-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('数据导出成功！', 'success');
}

// 刷新今日问题
function refreshTodayQuestion() {
    if (typeof getTodayQuestion === 'function') {
        const todayQ = getTodayQuestion();
        document.getElementById('todayQuestionText').textContent = todayQ.question;
        document.getElementById('todayQuestionAnswers').textContent = todayQ.answers.join(', ');
        showNotification('今日问题已刷新', 'success');
    }
}

// 访问主站
function visitMainSite() {
    window.open('index.html', '_blank');
}

// 退出登录
function logout() {
    if (confirm('确定要退出登录吗？')) {
        removeStorageItem('love_admin_session');
        window.location.href = 'auth.html';
    }
}

// 更新登录时间显示
function updateLoginTime() {
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN');
    document.getElementById('loginTime').textContent = `登录时间: ${timeStr}`;
}

// 侧边栏切换（移动端）
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}

// HTML转义函数
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 存储工具函数
function setStorageItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('存储数据失败:', error);
        showNotification('存储失败：' + error.message, 'error');
    }
}

function getStorageItem(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('读取数据失败:', error);
        return null;
    }
}

function removeStorageItem(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('删除数据失败:', error);
    }
}

// 保存安全设置
function saveSecuritySettings() {
    const settings = getStorageItem(ADMIN_STORAGE_KEYS.SETTINGS) || {};
    
    settings.maxAttempts = parseInt(document.getElementById('maxAttempts').value);
    settings.lockoutDuration = parseInt(document.getElementById('lockoutDuration').value);
    settings.sessionDuration = parseInt(document.getElementById('sessionDuration').value);
    
    setStorageItem(ADMIN_STORAGE_KEYS.SETTINGS, settings);
    showNotification('安全设置保存成功！', 'success');
}

// 保存图片设置
function saveImageSettings() {
    const settings = getStorageItem(ADMIN_STORAGE_KEYS.SETTINGS) || {};
    
    settings.imageHosting = document.getElementById('imageHosting').value;
    settings.apiKey = document.getElementById('apiKey').value;
    settings.bucketName = document.getElementById('bucketName').value;
    
    setStorageItem(ADMIN_STORAGE_KEYS.SETTINGS, settings);
    showNotification('图片配置保存成功！', 'success');
}

// 删除留言
function deleteMessage(messageId) {
    if (!confirm('确定要删除这条留言吗？')) return;
    
    let messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    messages = messages.filter(msg => msg.id !== messageId);
    localStorage.setItem('loveMessages', JSON.stringify(messages));
    
    loadMessagesData();
    updateStats();
    showNotification('留言删除成功！', 'success');
}

// 清空所有留言
function clearAllMessages() {
    if (!confirm('确定要清空所有留言吗？此操作不可恢复！')) return;
    
    localStorage.setItem('loveMessages', '[]');
    loadMessagesData();
    updateStats();
    showNotification('所有留言已清空！', 'success');
}

// 导出留言
function exportMessages() {
    const messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    const dataStr = JSON.stringify(messages, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `love-messages-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('留言导出成功！', 'success');
}