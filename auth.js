// 认证系统配置
const AUTH_CONFIG = {
    MAX_ATTEMPTS: 3,           // 最大尝试次数
    LOCKOUT_DURATION: 60 * 60, // 锁定时间（秒）
    SESSION_DURATION: 24 * 60 * 60, // 会话持续时间（秒）
    ADMIN_PASSWORD: 'love2024@admin', // 管理员密码
};

// 本地存储键名
const STORAGE_KEYS = {
    AUTH_STATUS: 'love_auth_status',
    ATTEMPTS: 'love_attempts',
    LOCKOUT_TIME: 'love_lockout_time',
    LAST_QUESTION_DATE: 'love_last_question_date',
    ADMIN_SESSION: 'love_admin_session'
};

// 全局变量
let currentQuestion = null;
let isLocked = false;
let lockoutTimer = null;

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initAuthSystem();
});

// 初始化认证系统
function initAuthSystem() {
    // 检查是否已通过验证
    if (isAuthenticated()) {
        redirectToMainSite();
        return;
    }
    
    // 检查是否被锁定
    if (isAccountLocked()) {
        showLockoutScreen();
        return;
    }
    
    // 显示今日问题
    loadTodayQuestion();
    updateCurrentDate();
    
    // 设置键盘事件
    setupKeyboardEvents();
    
    // 显示剩余尝试次数
    updateAttemptsDisplay();
}

// 检查是否已通过验证
function isAuthenticated() {
    const authData = getStorageItem(STORAGE_KEYS.AUTH_STATUS);
    if (!authData) return false;
    
    const now = Math.floor(Date.now() / 1000);
    const authTime = authData.timestamp;
    const isValid = (now - authTime) < AUTH_CONFIG.SESSION_DURATION;
    
    // 检查是否是今天的验证
    const today = new Date().toDateString();
    const authDate = new Date(authTime * 1000).toDateString();
    const isSameDay = today === authDate;
    
    return isValid && isSameDay;
}

// 检查账户是否被锁定
function isAccountLocked() {
    const lockoutTime = getStorageItem(STORAGE_KEYS.LOCKOUT_TIME);
    if (!lockoutTime) return false;
    
    const now = Math.floor(Date.now() / 1000);
    const isLocked = (now - lockoutTime) < AUTH_CONFIG.LOCKOUT_DURATION;
    
    if (!isLocked) {
        // 锁定时间已过，清除锁定状态
        removeStorageItem(STORAGE_KEYS.LOCKOUT_TIME);
        removeStorageItem(STORAGE_KEYS.ATTEMPTS);
    }
    
    return isLocked;
}

// 加载今日问题
function loadTodayQuestion() {
    try {
        currentQuestion = getTodayQuestion();
        document.getElementById('dailyQuestion').textContent = currentQuestion.question;
        
        // 记录今日问题日期
        const today = new Date().toDateString();
        setStorageItem(STORAGE_KEYS.LAST_QUESTION_DATE, today);
    } catch (error) {
        console.error('加载问题失败:', error);
        document.getElementById('dailyQuestion').textContent = '问题加载失败，请刷新页面重试';
    }
}

// 更新当前日期显示
function updateCurrentDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    });
    document.getElementById('currentDate').textContent = `今天是 ${dateString}`;
}

// 提交答案
async function submitAnswer() {
    const answerInput = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitBtn');
    const userAnswer = answerInput.value.trim();
    
    if (!userAnswer) {
        showError('请输入答案');
        answerInput.focus();
        return;
    }
    
    // 显示加载状态
    setButtonLoading(submitBtn, true);
    hideError();
    
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 检查隐藏后门
    if (userAnswer === '666') {
        // 隐藏后门：直接进入管理后台
        window.location.href = 'admin.html';
        return;
    }
    
    // 验证答案
    const isCorrect = validateAnswer(userAnswer, currentQuestion.answers);
    
    if (isCorrect) {
        // 答案正确
        handleCorrectAnswer();
    } else {
        // 答案错误
        handleWrongAnswer();
    }
    
    setButtonLoading(submitBtn, false);
}

// 处理正确答案
function handleCorrectAnswer() {
    // 清除尝试次数和锁定状态
    removeStorageItem(STORAGE_KEYS.ATTEMPTS);
    removeStorageItem(STORAGE_KEYS.LOCKOUT_TIME);
    
    // 设置认证状态
    const authData = {
        timestamp: Math.floor(Date.now() / 1000),
        date: new Date().toDateString()
    };
    setStorageItem(STORAGE_KEYS.AUTH_STATUS, authData);
    
    // 显示成功动画并跳转
    showSuccessAnimation();
}

// 处理错误答案
function handleWrongAnswer() {
    let attempts = getStorageItem(STORAGE_KEYS.ATTEMPTS) || 0;
    attempts++;
    
    setStorageItem(STORAGE_KEYS.ATTEMPTS, attempts);
    
    if (attempts >= AUTH_CONFIG.MAX_ATTEMPTS) {
        // 超出尝试次数，锁定账户
        const lockoutTime = Math.floor(Date.now() / 1000);
        setStorageItem(STORAGE_KEYS.LOCKOUT_TIME, lockoutTime);
        showLockoutScreen();
    } else {
        // 显示错误信息和剩余尝试次数
        const remaining = AUTH_CONFIG.MAX_ATTEMPTS - attempts;
        showError(`答案不正确，还有 ${remaining} 次机会`);
        updateAttemptsDisplay();
        
        // 清空输入框
        document.getElementById('answerInput').value = '';
        document.getElementById('answerInput').focus();
    }
}

// 显示锁定屏幕
function showLockoutScreen() {
    isLocked = true;
    document.querySelector('.auth-card').style.display = 'none';
    document.getElementById('lockoutCard').style.display = 'block';
    
    // 开始倒计时
    startLockoutCountdown();
}

// 开始锁定倒计时
function startLockoutCountdown() {
    const lockoutTime = getStorageItem(STORAGE_KEYS.LOCKOUT_TIME);
    if (!lockoutTime) return;
    
    lockoutTimer = setInterval(() => {
        const now = Math.floor(Date.now() / 1000);
        const elapsed = now - lockoutTime;
        const remaining = AUTH_CONFIG.LOCKOUT_DURATION - elapsed;
        
        if (remaining <= 0) {
            // 锁定时间结束
            clearInterval(lockoutTimer);
            removeStorageItem(STORAGE_KEYS.LOCKOUT_TIME);
            removeStorageItem(STORAGE_KEYS.ATTEMPTS);
            location.reload();
        } else {
            // 更新倒计时显示
            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            document.getElementById('lockoutCountdown').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// 显示成功动画
function showSuccessAnimation() {
    const card = document.querySelector('.auth-card');
    card.innerHTML = `
        <div class="success-animation" style="text-align: center; padding: 40px 0;">
            <div style="font-size: 80px; margin-bottom: 20px; animation: bounce 1s ease-in-out;">💕</div>
            <h2 style="color: #27ae60; margin-bottom: 15px;">验证成功！</h2>
            <p style="color: #666; margin-bottom: 25px;">欢迎来到我们的爱情世界...</p>
            <div class="loading-progress" style="background: #eee; height: 4px; border-radius: 2px; overflow: hidden;">
                <div style="height: 100%; background: linear-gradient(45deg, #667eea, #764ba2); width: 0%; animation: progress 2s ease-out forwards;"></div>
            </div>
            <p style="color: #999; font-size: 14px; margin-top: 15px;">正在进入...</p>
        </div>
    `;
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
        @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
        }
    `;
    document.head.appendChild(style);
    
    // 2秒后跳转
    setTimeout(() => {
        redirectToMainSite();
    }, 2000);
}

// 跳转到主站
function redirectToMainSite() {
    window.location.href = 'index.html';
}

// 显示错误信息
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    const errorText = errorDiv.querySelector('.error-text');
    
    errorText.textContent = message;
    errorDiv.style.display = 'flex';
    
    // 3秒后自动隐藏
    setTimeout(hideError, 3000);
}

// 隐藏错误信息
function hideError() {
    document.getElementById('errorMessage').style.display = 'none';
}

// 更新尝试次数显示
function updateAttemptsDisplay() {
    const attempts = getStorageItem(STORAGE_KEYS.ATTEMPTS) || 0;
    const remaining = AUTH_CONFIG.MAX_ATTEMPTS - attempts;
    const attemptsDiv = document.getElementById('attemptsRemaining');
    
    if (attempts > 0 && remaining > 0) {
        document.getElementById('attemptsCount').textContent = remaining;
        attemptsDiv.style.display = 'block';
    } else {
        attemptsDiv.style.display = 'none';
    }
}

// 设置按钮加载状态
function setButtonLoading(button, loading) {
    const btnText = button.querySelector('.btn-text');
    const btnLoading = button.querySelector('.btn-loading');
    
    if (loading) {
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        button.disabled = true;
        button.classList.add('loading');
    } else {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        button.disabled = false;
        button.classList.remove('loading');
    }
}

// 设置键盘事件
function setupKeyboardEvents() {
    const answerInput = document.getElementById('answerInput');
    
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !isLocked) {
            submitAnswer();
        }
    });
    
    // ESC键关闭管理员弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideAdminLogin();
        }
    });
}


// 存储工具函数
function setStorageItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('存储数据失败:', error);
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

// 页面卸载时清理定时器
window.addEventListener('beforeunload', function() {
    if (lockoutTimer) {
        clearInterval(lockoutTimer);
    }
});

// 调试模式（开发时使用）
if (localStorage.getItem('debug_mode') === 'true') {
    console.log('Debug Mode: 当前问题', currentQuestion);
    console.log('Debug Mode: 认证状态', isAuthenticated());
    console.log('Debug Mode: 锁定状态', isAccountLocked());
}