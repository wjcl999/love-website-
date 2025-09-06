// 问题库数据 - 情侣私密问题
const QUESTIONS_DATABASE = {
    // 问题分类
    categories: {
        "first_meet": "初次相遇",
        "important_date": "重要日期", 
        "daily_life": "日常生活",
        "pet_name": "昵称宠物",
        "preferences": "喜好习惯",
        "memory": "美好回忆",
        "future": "未来计划"
    },

    // 问题列表
    questions: [
        // 初次相遇类
        {
            id: 1,
            category: "first_meet",
            question: "我们第一次见面是在哪里？",
            answers: ["咖啡厅", "星巴克", "那家咖啡店", "咖啡店"],
            difficulty: "easy",
            hint: "那个有香草拿铁的地方..."
        },
        {
            id: 2,
            category: "first_meet", 
            question: "第一次约会我们看了什么电影？",
            answers: ["复仇者联盟", "漫威电影", "超级英雄电影"],
            difficulty: "medium",
            hint: "有超级英雄的那部"
        },
        {
            id: 3,
            category: "first_meet",
            question: "第一次牵手是在什么时候？",
            answers: ["电影院", "看电影的时候", "电影院里", "看电影时"],
            difficulty: "easy",
            hint: "黑暗的地方，大屏幕..."
        },

        // 重要日期类
        {
            id: 4,
            category: "important_date",
            question: "我们的恋爱纪念日是哪一天？",
            answers: ["2024-02-14", "2月14日", "情人节", "214", "2024年2月14日"],
            difficulty: "easy",
            hint: "充满爱意的那个节日"
        },
        {
            id: 5,
            category: "important_date",
            question: "我的生日是几月几号？",
            answers: ["6月1日", "6-1", "儿童节", "601", "6月1号"],
            difficulty: "easy",
            hint: "永远的大儿童"
        },
        {
            id: 6,
            category: "important_date",
            question: "我们第一次说我爱你是什么时候？",
            answers: ["3月20日", "3-20", "320", "春分那天"],
            difficulty: "medium",
            hint: "春天的一个特殊日子"
        },

        // 日常生活类
        {
            id: 7,
            category: "daily_life",
            question: "我最爱喝的饮品是什么？",
            answers: ["奶茶", "珍珠奶茶", "芋圆奶茶", "奶茶店"],
            difficulty: "easy",
            hint: "甜甜的，有珍珠的"
        },
        {
            id: 8,
            category: "daily_life",
            question: "我最害怕什么小动物？",
            answers: ["蟑螂", "小强", "虫子", "蟑螂虫"],
            difficulty: "easy",
            hint: "黑黑的，会飞的讨厌虫子"
        },
        {
            id: 9,
            category: "daily_life",
            question: "我的手机品牌是什么？",
            answers: ["苹果", "iPhone", "Apple", "iphone"],
            difficulty: "easy",
            hint: "被咬了一口的水果"
        },

        // 昵称宠物类
        {
            id: 10,
            category: "pet_name",
            question: "你最常叫我什么昵称？",
            answers: ["宝贝", "宝宝", "小宝贝", "宝", "baby"],
            difficulty: "easy",
            hint: "最甜蜜的称呼"
        },
        {
            id: 11,
            category: "pet_name",
            question: "我叫你什么特别的昵称？",
            answers: ["小猪猪", "猪猪", "小猪", "pig"],
            difficulty: "medium",
            hint: "粉嫩嫩的小动物"
        },
        {
            id: 12,
            category: "pet_name",
            question: "我们养的虚拟宠物叫什么名字？",
            answers: ["团团", "小团团", "tuantuan"],
            difficulty: "medium",
            hint: "圆圆的，软软的"
        },

        // 喜好习惯类
        {
            id: 13,
            category: "preferences",
            question: "我最喜欢的颜色是什么？",
            answers: ["粉色", "粉红色", "pink", "少女粉"],
            difficulty: "easy",
            hint: "少女心的颜色"
        },
        {
            id: 14,
            category: "preferences",
            question: "我最爱的零食是什么？",
            answers: ["薯片", "乐事", "薯条", "土豆片"],
            difficulty: "easy",
            hint: "咔嚓脆响的"
        },
        {
            id: 15,
            category: "preferences",
            question: "我最喜欢的季节是什么？",
            answers: ["春天", "春季", "spring"],
            difficulty: "medium",
            hint: "万物复苏的季节"
        },

        // 美好回忆类
        {
            id: 16,
            category: "memory",
            question: "我们第一次旅行去了哪里？",
            answers: ["海边", "青岛", "海滨城市", "海"],
            difficulty: "medium",
            hint: "有海风和浪花的地方"
        },
        {
            id: 17,
            category: "memory",
            question: "我们一起看过的第一部电视剧是什么？",
            answers: ["我的前半生", "前半生", "靳东的剧"],
            difficulty: "hard",
            hint: "关于女性成长的剧"
        },
        {
            id: 18,
            category: "memory",
            question: "我们第一次吵架是因为什么？",
            answers: ["游戏", "打游戏", "玩游戏", "手机游戏"],
            difficulty: "medium",
            hint: "让人上瘾的电子产品活动"
        },

        // 未来计划类
        {
            id: 19,
            category: "future",
            question: "我们计划几年后结婚？",
            answers: ["2年", "两年", "2026年", "2026"],
            difficulty: "medium",
            hint: "不远的将来"
        },
        {
            id: 20,
            category: "future",
            question: "我们想要几个孩子？",
            answers: ["2个", "两个", "一男一女", "龙凤胎"],
            difficulty: "easy",
            hint: "成双成对"
        },

        // 更多问题...
        {
            id: 21,
            category: "daily_life",
            question: "我的星座是什么？",
            answers: ["双子座", "双子", "gemini"],
            difficulty: "easy",
            hint: "善变的双重性格"
        },
        {
            id: 22,
            category: "preferences",
            question: "我最讨厌吃什么蔬菜？",
            answers: ["胡萝卜", "萝卜", "红萝卜"],
            difficulty: "medium",
            hint: "橙色的，兔子爱吃的"
        },
        {
            id: 23,
            category: "memory",
            question: "我们第一次过生日一起吃了什么蛋糕？",
            answers: ["草莓蛋糕", "草莓", "水果蛋糕"],
            difficulty: "hard",
            hint: "红红的小果子装饰"
        },
        {
            id: 24,
            category: "daily_life",
            question: "我每天晚上几点睡觉？",
            answers: ["11点", "23点", "十一点", "11:00"],
            difficulty: "medium",
            hint: "夜猫子的作息"
        },
        {
            id: 25,
            category: "preferences",
            question: "我最喜欢的运动是什么？",
            answers: ["羽毛球", "打羽毛球", "badminton"],
            difficulty: "medium",
            hint: "需要球拍的室内运动"
        }
    ]
};

// 获取今日问题的函数
function getTodayQuestion() {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD格式
    
    // 使用日期作为种子来生成随机数，确保同一天得到相同的问题
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        const char = dateString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // 转换为32位整数
    }
    
    // 确保hash为正数并获取问题索引
    const index = Math.abs(hash) % QUESTIONS_DATABASE.questions.length;
    return QUESTIONS_DATABASE.questions[index];
}

// 验证答案的函数
function validateAnswer(userAnswer, correctAnswers) {
    if (!userAnswer || !correctAnswers) return false;
    
    // 标准化用户输入
    const normalizedUserAnswer = userAnswer.toLowerCase()
        .replace(/\s+/g, '') // 去除空格
        .replace(/[^\w\u4e00-\u9fa5]/g, ''); // 去除特殊字符，保留中英文数字
    
    // 检查是否匹配任何一个正确答案
    return correctAnswers.some(answer => {
        const normalizedCorrectAnswer = answer.toLowerCase()
            .replace(/\s+/g, '')
            .replace(/[^\w\u4e00-\u9fa5]/g, '');
        
        // 完全匹配或包含匹配
        return normalizedCorrectAnswer === normalizedUserAnswer || 
               normalizedCorrectAnswer.includes(normalizedUserAnswer) ||
               normalizedUserAnswer.includes(normalizedCorrectAnswer);
    });
}

// 获取随机问题（用于管理员测试）
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * QUESTIONS_DATABASE.questions.length);
    return QUESTIONS_DATABASE.questions[randomIndex];
}

// 根据分类获取问题
function getQuestionsByCategory(category) {
    return QUESTIONS_DATABASE.questions.filter(q => q.category === category);
}

// 根据难度获取问题
function getQuestionsByDifficulty(difficulty) {
    return QUESTIONS_DATABASE.questions.filter(q => q.difficulty === difficulty);
}

// 搜索问题
function searchQuestions(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return QUESTIONS_DATABASE.questions.filter(q => 
        q.question.toLowerCase().includes(lowerKeyword) ||
        q.answers.some(answer => answer.toLowerCase().includes(lowerKeyword)) ||
        q.hint.toLowerCase().includes(lowerKeyword)
    );
}

// 导出配置（用于管理页面）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QUESTIONS_DATABASE,
        getTodayQuestion,
        validateAnswer,
        getRandomQuestion,
        getQuestionsByCategory,
        getQuestionsByDifficulty,
        searchQuestions
    };
}