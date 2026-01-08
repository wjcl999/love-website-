// 奕铭 ❤️ 佳怡 - 纯静态爱情网站脚本

// ==================== 配置区域 ====================
// 恋爱开始时间 - 你可以修改这个日期
const LOVE_START_DATE = new Date('2024-01-26T00:00:00');

// 情侣信息
const COUPLE_INFO = {
    boy: {
        name: '奕铭',
        avatar: '👨‍💻',
        avatarImg: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/cb709546b7fe02122d3a20803f8ca092.png',
        bio: '温柔体贴的程序员'
    },
    girl: {
        name: '佳怡', 
        avatar: '👩‍🎨',
        avatarImg: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/19a87a70ea9849a1d1ce9e51c8cd4ae9.png',
        bio: '美丽可爱的设计师'
    }
};

// 重要纪念日配置
const ANNIVERSARIES = [
    {
        id: 'love_anniversary',
        title: '恋爱纪念日',
        icon: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/7e0654148bef1c19bca38a7e248d2c38.jpg',
        type: 'yearly', // 每年重复
        month: 1, // 阳历1月
        day: 26,
        description: '我们在一起的纪念日'
    },
    {
        id: 'valentines_day',
        title: '情人节',
        icon: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/ccf3d5389febe9c31962c52106283ea9.jpg',
        type: 'yearly',
        month: 2, // 阳历2月
        day: 14,
        description: '西方情人节'
    },
    {
        id: 'qixi_festival',
        title: '七夕节',
        icon: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/ccf3d5389febe9c31962c52106283ea9.jpg',
        type: 'lunar', // 农历
        month: 7, // 农历七月
        day: 7,
        description: '中国传统情人节'
    },
    {
        id: 'yiming_birthday',
        title: '奕铭生日',
        icon: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/eb8c6edb09dc29822ad1365691fd9a7d.jpg',
        type: 'lunar', // 农历
        month: 12, // 农历腊月
        day: 1, // 农历初一
        description: '奕铭的生日（农历腊月初一）'
    },
    {
        id: 'jiayi_birthday',
        title: '佳怡生日',
        icon: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/36815467333f2bffd5b15c6acaacb755.jpg',
        type: 'lunar', // 农历
        month: 7, // 农历七月
        day: 24, // 农历二十四
        description: '佳怡的生日（农历七月二十四）'
    }
];

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
        description: '慢慢的，我们逐渐在一起了，从朋友逐渐变成恋人，心中慢慢多了彼此的位置...',
        icon: '💕',
        image: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/fe29a43cd82c7b5f3d74f944c74ebe06.jpg'
    },
    {
        date: '2024-07-21',
        title: '第一次见面 💖',
        description: '等了这么久，终于见到真正的你！第一次拥抱，第一次亲吻，第一次合照，一切都那么美好而紧张...',
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
        description: '第一次一起去游乐园！在方特度过了最快乐的一天，一起坐过山车，一起玩旋转木马，一起尖叫，一起欢笑...',
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
        // 第一次见面的照片
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/efd13c5a14629614fa5ab8deebf2e62f.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/4f10cea1a3315a32ff6d480f33a1b4a7.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/29559089fb0ee6851cf3951c1a8b454f.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/34b9d6a7fceda2fa8642ab046f3788b1.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/1331eafa1a8c133760b9896bfd1c9cf6.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/5a8be3e1c05c88374890756f8f30a571.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/eaf074aa157709b39725e08ff274c702.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a44ac1f04b6fe95b0a6c467662725814.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/23e21b5a22fdec0fb17c24c74c570b62.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/029c749c5547f00777408834f2aa0fd8.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/12e26a0b773f6f05335ab6c438ec9975.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/c4b04840f9b2ed80a663edd711d6fbc8.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/44351a1a6e33492cec910a12dd245692.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/49ad6362e4bf44ec1a287bfa6bef64c4.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/cd942d51b8f4abe9e1ec34556c33e7c2.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/08109be556df9d2be3d995f3c6a4089f.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/59744b32b03fe51d34af9b449642218a.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/8170b22b8ae3656710be104ec0e3fd1e.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/81c44b36ab93a46b0d94b5b6401826ad.mp4',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/409d8093e51b0cb111928c1a4345139b.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/94df2b1513a9bae7b2f0d78143e2a5e7.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a3de1e0caaf620c3270c3b3ef11c6482.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/4c1b57ae027c900e2a91308afbc01ae7.jpg',
            description: '第一次见面',
            category: 'first_meet',
            date: '2024-01-26'
        },
        // 第二次见面的照片
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/da2e663ffa61fc182a48a93d20ba5dd3.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/388e2ca8b76dff4b5c23afa80d433137.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/378d2fc6ea8242030abe11f18f777d1d.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/94e1c2deeb80a64d850ea09fb2317c14.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/6cc4975e33b9ddc206ce795cbaa7e33b.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/adb329767738f61728f6d4b9f57d5a7c.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/9daea9f40bd633a30a835c3a3a0db3ef.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/7927362e9a4966a16f9eaa0d49b7c1a5.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/135d399609e454015ee3308f6468cb4e.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/c75de28565a5b9d50ef5d79cd8eddbd3.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/c7dbba4f525935723dfc89e86bbf0d3c.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/84dbdb93c017b9f33d5f878d9505832d.jpg',
            description: '第二次见面',
            category: 'second_meet',
            date: '2024-01-27'
        },
        // 第三次见面的视频
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/9aef07039e622c681041dddda6b074c8.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a8a8415d9836995e2a5ed509467927e4.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/39ea261cd36c74338a5de8a7cc6ae4a2.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f0561969f94588aecf8aef462f305f8c.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/e28f81b4af4ae89dc0d06fa11e4f786e.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/5cce5388b32668b260a51846384d9781.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/0be1b1cb916584dd84bc84452088933d.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/e3d549b41b8e8dc3a52d4457a3762c82.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/d6926c8aa94f67b957d9b213e41a506f.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f704969a357dbfca78d6f81b86037f91.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        // 第三次见面新增的图片
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/629cff364ce1c340e03402d1bd0fca32.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/d161c7aa763c4e3cd8bb3b3045aa172b.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/cc3366917919167439011a860801be25.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/0b1d363693ba00bcf9b6f1aad88b9097.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/382fe8f1717f64c96f476d0ee4691351.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/0e684cd6230ea3827ca3ca8aaaa7840e.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/5fa1c0b2d2bed7068b79efe71d9b20cd.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a0aaf3896006c2e3f4abc7712d60c907.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a30c0be3fa5a18b4e4a2216738a50626.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/8744107ed4f93c312142b5eebd131729.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/d5017980d1754af9d9409545ca6d30e6.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/b0106cc207afb03d5d9799ea66849d56.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/3af34b23abc21bebeeb4a216d6102d43.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/6516b41f4b0ae4f6cc0312b05299b2f8.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        // 第三次见面新增的视频
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/2723eba06ada2f502736ffc54626c32f.mp4',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29',
            type: 'video'
        },
        // 第三次见面更多图片
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a3083d7f58f00f56a1afe4879b4b77ff.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/67f298279037dba6740bd1726afefa63.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/c790710795bb1734239baddce753cb56.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/9a115a9c535d32aed93f1a6ad7eabb61.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/474022a0b7c80a7d4c142586a3e6cf28.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/b17257d56b34da84b6aabca36d19289a.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/2b320477915a96afb7a65a8965879e80.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/3539f8fef956af7bc5620d5524817717.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/45fd0441d333880f8c506d39dcf35c90.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/414b80dc3311f82501daa3dd73824b98.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/c8a325b2c25e9a5250feecc116849bed.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/350443f03b88e928fe7489a7e37e40cc.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/20a9659d26a42696da99329a4c83b096.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/de0e650bb1ea65a6e3fe39d8cbe78a7d.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/87f3bf4006188d4212078c4ff3d9b56f.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/4f76259066a281f141f42f377b25014c.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/2600977999f4378827cf14adcf590ccb.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/06d3b13747d911735bea6941ec2d8ff0.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/fcccd0772f48049c7921fa67df4e57a9.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/bad45c255213e746222890f7eaf8d6e0.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/fe047ad8fe0a1ad264cea2e24b8b8968.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/299b7b0adcd0f3b86ae52a7b5f308e8d.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/0ccd228ce46dc55d8dd2c6bd10d2cc1e.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/bcf416bd0c27c884d742dfa589379522.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/26d03eff6b65c12d66d704c8e78c4fcb.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/57b77a0a90140bfa23081efe9b940fad.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/bca6ec2416cb2b28cb748357252969bd.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/60fc145d5d66bec3f0c546d6f4eedd7c.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a61c35e4f878995efe75c31d7d292b7d.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/49305b5cae46296203bef5a6f3661c4a.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f29a321ab24688bd97346f8b1e4dc48a.jpg',
            description: '第三次见面',
            category: 'third_meet',
            date: '2024-01-29'
        },
        // 第一次送你礼物的照片和视频
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/5ed7f3ba9fd54552d9475fd9a131b1c3.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/1ec28fc535e02bc4fc13a2d1bad23a64.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/d83b67591b06cee13c267f702c390685.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a9bfd41e739ecaf9b70277552d0ae989.mp4',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28',
            type: 'video'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/27328172aba7b4bb7e98904a5e08132a.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/abc26cd5022a7befac3853866ae87297.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a43c37c86ce84eb19d5830e4b2c27837.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/0fc922e2e29d3e37ea1b64719e29f901.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/240a06e2d27972fd050f7a2dc6ea15b9.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f13060a28d919216d61ac09d277067c9.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/18b5e4d032c586806d988b7b1557881e.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/e31533899012cc90aefe68f9126fad51.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/50b66f345b330686353b74ad5ce1f496.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/d647257692ffbbea2b15434f8996817b.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a7a3f5d9427938cdb7accc2024dac61e.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/50f87ec14da376205f3f21ec5d043c4a.jpg',
            description: '第一次送你礼物',
            category: 'first_gift',
            date: '2024-01-28'
        },
        // 多姿多彩的你
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/3a98eb9811d4790702722445d58c0a53.jpeg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/0fad9f282ff3781d35f1c0b956bb82cc.jpeg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/b3a399a3354ce1faa0a9ab2fd2cc66e3.jpeg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/894ed966432ec282f3dba0b38e382d4b.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/159475aa24d531453a11c9504478ebde.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/c12fc19744426ba9f690e5f05f0959af.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/2fc8effc0dabbbeb521f6cd16452418c.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/cf84e7e750dbebeeaef4d986b0765a3a.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f1ee9e918f7512458e6eaeb7f8d991df.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/0cd044fc07851b729a51061dd15c3b9c.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/a2596e3857622c47292cd65137e70351.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/de62db4bfffde0904b2faa2549be34e4.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/f7bca2023d424a1f71602818074f6e1c.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/1852baa4352194f775d19bdc9dee196c.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/827d1f9f4218b753f53f2d1f24317515.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/737bca68a18ed17a3d3f3b65c3a743ec.jpg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/29fb6be7538e67fd2244833d1212f128.jpeg',
            description: '多姿多彩的你',
            category: 'colorful_you',
            date: '2024-02-01'
        },
        // 偷偷保存的你，嘻嘻
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/666b3dce3a6f297518a63d2a0348a865.jpg',
            description: '偷偷保存的你',
            category: 'secret_photos',
            date: '2024-02-10'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/adcaed95603d00ee045325594087ddb6.jpg',
            description: '偷偷保存的你',
            category: 'secret_photos',
            date: '2024-02-10'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/e84527d79afef98fae00bc015aa4a33b.jpg',
            description: '偷偷保存的你',
            category: 'secret_photos',
            date: '2024-02-10'
        },
        {
            url: 'https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/146b82be59eedbdb8eb6c9b23e6ae56b.jpg',
            description: '偷偷保存的你',
            category: 'secret_photos',
            date: '2024-02-10'
        }
    ]
};

// 星座运势API配置 - 使用天行数据API
const HOROSCOPE_CONFIG = {
    apiKey: '733b879bee9f901b22341fae5b402259',
    apiUrl: 'https://apis.tianapi.com/star/index',
    couples: {
        boy: {
            name: '奕铭',
            constellation: 'capricorn', // 2005.01.10 = 摩羯座
            chineseName: '摩羯座',
            birthday: '2005-01-10'
        },
        girl: {
            name: '佳怡',
            constellation: 'virgo', // 2006.09.16 = 处女座
            chineseName: '处女座',
            birthday: '2006-09-16'
        }
    },
    enabled: true
};

// 周公解梦API配置
const DREAM_CONFIG = {
    apiKey: '733b879bee9f901b22341fae5b402259',
    apiUrl: 'https://apis.tianapi.com/dream/index',
    enabled: true
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
            lon: 118.05,
            person: COUPLE_INFO.girl
        },
        { 
            code: '101250101', 
            name: '长沙',
            lat: 28.23,
            lon: 112.94,
            person: COUPLE_INFO.boy
        }
    ],
    enabled: true
};

// ==================== 主要功能 ====================

// 检查今天是否是佳怡生日
function isBirthdayToday() {
    // ========== 临时测试：强制返回true来测试生日页面效果 ==========
    if (window.FORCE_BIRTHDAY_MODE) {
        return true;
    }
    // ========== 取消注释下面这行来永久测试生日页面 ==========
    // return true;

    // 以北京时间为准，直接判断“今天”的农历是否为配置的生日（避免手写表/时区导致的偏差）
    const today = getBeijingDateParts();
    const lunarToday = solarToLunarYMD(today.year, today.month, today.day);
    if (!lunarToday) return false;

    const jiayiBirthday = ANNIVERSARIES.find(item => item.id === 'jiayi_birthday');
    if (!jiayiBirthday || jiayiBirthday.type !== 'lunar') return false;

    const isLeapBirthdayMonth = Boolean(jiayiBirthday.isLeapMonth);
    return lunarToday.lunarMonth === jiayiBirthday.month &&
           lunarToday.lunarDay === jiayiBirthday.day &&
           lunarToday.isLeapMonth === isLeapBirthdayMonth;
}

// 计算佳怡的年龄
function calculateJiayiAge() {
    const birth = parseISODate(HOROSCOPE_CONFIG?.couples?.girl?.birthday);
    if (!birth) return 0;

    const today = getBeijingDateParts();
    let age = today.year - birth.year;

    // 使用农历生日换算到当年的阳历日期来判断是否已过生日（与生日模式逻辑一致）
    const jiayiBirthday = ANNIVERSARIES.find(item => item.id === 'jiayi_birthday');
    if (jiayiBirthday && jiayiBirthday.type === 'lunar') {
        const birthdayThisYear = lunarToSolarYMD(today.year, jiayiBirthday.month, jiayiBirthday.day, Boolean(jiayiBirthday.isLeapMonth));
        if (birthdayThisYear && compareYMD(today, birthdayThisYear) < 0) {
            age -= 1;
        }
        return Math.max(0, age);
    }

    // 兜底：按配置的阳历生日判断
    if (today.month < birth.month || (today.month === birth.month && today.day < birth.day)) {
        age -= 1;
    }
    return Math.max(0, age);
}

// 生日模式初始化
function initBirthdayMode() {
    // 修改页面标题
    document.title = '🎂 佳怡生日快乐！ - 我们的爱情时光';
    
    // 设置生日专属内容
    setBirthdayContent();
    
    // 添加生日动画效果
    addBirthdayAnimations();
    
    // 启动生日版计时器
    startBirthdayTimer();
    
    // 创建生日特殊心形效果
    createBirthdayHearts();
    
    // 播放生日音乐
    playBirthdayMusic();
}

// 正常模式初始化
function initNormalMode() {
    startLoveTimer();
    initAnniversaries();
}

// 设置生日专属内容
function setBirthdayContent() {
    const heroSection = document.querySelector('#home-section .hero');
    if (!heroSection) return;
    
    const age = calculateJiayiAge();
    
    heroSection.innerHTML = `
        <div class="birthday-celebration">
            <h1 class="birthday-title fade-in-up">🎂 佳怡生日快乐！</h1>
            <div class="birthday-age fade-in-up delay-200">
                <span class="age-number">${age}</span>
                <span class="age-text">岁生日快乐</span>
            </div>
            
            <div class="couple-info fade-in-up delay-400">
                <div class="person">
                    <div class="avatar glow-on-hover birthday-glow">
                        <img src="https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/cb709546b7fe02122d3a20803f8ca092.png" alt="奕铭">
                    </div>
                    <h3>奕铭</h3>
                    <p class="birthday-wish">送给最爱的你</p>
                </div>
                <div class="birthday-cake-center">
                    <div class="cake-animation">🎂</div>
                    <div class="fireworks">🎆</div>
                </div>
                <div class="person birthday-star">
                    <div class="avatar glow-on-hover birthday-glow">
                        <img src="https://pub-ee1eeac9d405439ea590ac7759f3f7d5.r2.dev/2025/09/19a87a70ea9849a1d1ce9e51c8cd4ae9.png" alt="佳怡">
                    </div>
                    <h3>佳怡 👑</h3>
                    <p class="birthday-wish">今天的生日女王</p>
                </div>
            </div>
            
            <div class="love-counter glow-on-hover fade-in-up delay-600">
                <h2>🎉 在这特殊的日子里</h2>
                <div id="love-duration" class="duration"></div>
            </div>
            
            <div class="birthday-message fade-in-up delay-800">
                <div class="message-card">
                    <h3>💖 生日祝福</h3>
                    <p>愿你的每一天都像今天一样充满快乐，</p>
                    <p>愿我们的爱情像生日蛋糕一样甜蜜，</p>
                    <p>愿你永远美丽、健康、幸福！</p>
                    <div class="birthday-signature">❤️ 来自最爱你的奕铭</div>
                </div>
            </div>
            
            <div class="birthday-balloons">
                <div class="balloon balloon-1">🎈</div>
                <div class="balloon balloon-2">🎈</div>
                <div class="balloon balloon-3">🎈</div>
                <div class="balloon balloon-4">🎈</div>
                <div class="balloon balloon-5">🎈</div>
            </div>
        </div>
    `;
}

// 添加生日动画效果
function addBirthdayAnimations() {
    // 创建生日专属样式
    const birthdayStyles = document.createElement('style');
    birthdayStyles.innerHTML = `
        /* 生日主页样式 */
        .birthday-celebration {
            text-align: center;
            position: relative;
            padding: 2rem;
        }
        
        .birthday-title {
            font-size: 3.5rem;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 3s ease-in-out infinite;
            margin-bottom: 1rem;
            text-shadow: 0 4px 8px rgba(255, 107, 107, 0.3);
        }
        
        .birthday-age {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .age-number {
            font-size: 4rem;
            font-weight: bold;
            color: #ff6b6b;
            text-shadow: 2px 2px 4px rgba(255, 107, 107, 0.3);
            animation: bounceNumber 2s ease-in-out infinite;
        }
        
        .age-text {
            font-size: 1.5rem;
            color: #666;
            font-weight: 500;
        }
        
        .birthday-star {
            position: relative;
        }
        
        .birthday-star::before {
            content: '⭐';
            position: absolute;
            top: -10px;
            right: -10px;
            font-size: 1.5rem;
            animation: starTwinkle 1.5s ease-in-out infinite;
        }
        
        .birthday-glow {
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.6), 
                        0 0 40px rgba(255, 107, 107, 0.4);
            animation: birthdayGlow 2s ease-in-out infinite;
        }
        
        .birthday-cake-center {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
        
        .cake-animation {
            font-size: 3rem;
            animation: cakeBounce 2s ease-in-out infinite;
        }
        
        .fireworks {
            font-size: 2rem;
            animation: fireworksSpin 3s linear infinite;
        }
        
        .birthday-wish {
            font-size: 0.9rem;
            color: #ff6b6b;
            font-style: italic;
            margin-top: 0.5rem;
        }
        
                 .birthday-love-message {
             margin-top: 1rem;
             font-style: italic;
             color: #666;
         }
         
         .birthday-love-message p {
             margin: 0.5rem 0;
             font-size: 0.95rem;
         }
         
         .birthday-message {
             max-width: 600px;
             margin: 3rem auto;
         }
        
        .message-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 182, 193, 0.1));
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(255, 107, 107, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .message-card h3 {
            color: #ff6b6b;
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        
        .message-card p {
            line-height: 1.8;
            color: #555;
            margin: 0.5rem 0;
        }
        
        .birthday-signature {
            text-align: right;
            margin-top: 1.5rem;
            color: #ff6b6b;
            font-weight: 500;
            font-style: italic;
        }
        
        .birthday-balloons {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            pointer-events: none;
        }
        
        .balloon {
            position: absolute;
            font-size: 2rem;
            animation: balloonFloat 4s ease-in-out infinite;
        }
        
        .balloon-1 { left: 10%; animation-delay: 0s; color: #ff6b6b; }
        .balloon-2 { left: 20%; animation-delay: 0.8s; color: #4ecdc4; }
        .balloon-3 { right: 20%; animation-delay: 1.6s; color: #45b7d1; }
        .balloon-4 { right: 10%; animation-delay: 2.4s; color: #96ceb4; }
        .balloon-5 { left: 50%; animation-delay: 3.2s; color: #fca311; }
        
        /* 生日动画效果 */
        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        @keyframes bounceNumber {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes starTwinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes birthdayGlow {
            0%, 100% { 
                box-shadow: 0 0 20px rgba(255, 107, 107, 0.6), 
                           0 0 40px rgba(255, 107, 107, 0.4);
            }
            50% { 
                box-shadow: 0 0 30px rgba(255, 107, 107, 0.8), 
                           0 0 60px rgba(255, 107, 107, 0.6);
            }
        }
        
        @keyframes cakeBounce {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(5deg); }
            75% { transform: translateY(-5px) rotate(-5deg); }
        }
        
        @keyframes fireworksSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes balloonFloat {
            0%, 100% { transform: translateY(0px); }
            33% { transform: translateY(-20px); }
            66% { transform: translateY(-10px); }
        }
        
        /* 生日背景特效 */
        .birthday-celebration::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
        }
        
        /* 手机端深度优化 */
        @media (max-width: 768px) {
            .birthday-celebration {
                padding: 5rem 0.8rem 1rem 0.8rem !important;
                margin-top: 60px !important;
            }
            
            .birthday-title {
                font-size: 2rem !important;
                margin-bottom: 1.2rem !important;
                margin-top: 3rem !important;
                line-height: 1.3 !important;
                padding: 0 10px !important;
            }
            
            .birthday-age {
                flex-direction: column !important;
                gap: 0.3rem !important;
                margin: 1.2rem 0 !important;
            }
            
            .age-number {
                font-size: 2.8rem !important;
                line-height: 1 !important;
            }
            
            .age-text {
                font-size: 1.1rem !important;
            }
            
            .birthday-celebration .couple-info {
                flex-direction: column !important;
                gap: 18px !important;
                margin: 1.8rem 0 !important;
            }
            
            .birthday-celebration .person {
                transform: none !important;
            }
            
            .birthday-celebration .avatar {
                width: 65px !important;
                height: 65px !important;
                font-size: 45px !important;
                margin-bottom: 8px !important;
            }
            
            .birthday-celebration .person h3 {
                font-size: 15px !important;
                margin-bottom: 4px !important;
            }
            
            .birthday-cake-center {
                order: -1 !important;
                margin-bottom: 8px !important;
            }
            
            .cake-animation {
                font-size: 2.2rem !important;
            }
            
            .fireworks {
                font-size: 1.3rem !important;
            }
            
            .birthday-wish {
                font-size: 11px !important;
                margin-top: 4px !important;
            }
            
            .birthday-message {
                margin: 1.8rem 0.5rem !important;
            }
            
            .message-card {
                padding: 1.3rem !important;
                border-radius: 12px !important;
                margin: 0 !important;
            }
            
            .message-card h3 {
                font-size: 1rem !important;
                margin-bottom: 0.8rem !important;
            }
            
            .message-card p {
                font-size: 12px !important;
                line-height: 1.5 !important;
                margin: 0.3rem 0 !important;
            }
            
            .birthday-signature {
                font-size: 11px !important;
                margin-top: 0.8rem !important;
            }
            
            .balloon {
                font-size: 1.1rem !important;
            }
            
            .birthday-star::before {
                top: -4px !important;
                right: -4px !important;
                font-size: 0.9rem !important;
            }
        }
        
        /* 超小屏幕生日优化 */
        @media (max-width: 375px) {
            .birthday-celebration {
                padding: 4rem 0.5rem 0.8rem 0.5rem !important;
                margin-top: 50px !important;
            }
            
            .birthday-title {
                font-size: 1.7rem !important;
                padding: 0 5px !important;
                margin-top: 2.5rem !important;
            }
            
            .age-number {
                font-size: 2.3rem !important;
            }
            
            .age-text {
                font-size: 1rem !important;
            }
            
            .birthday-celebration .avatar {
                width: 55px !important;
                height: 55px !important;
                font-size: 40px !important;
            }
            
            .birthday-celebration .person h3 {
                font-size: 14px !important;
            }
            
            .cake-animation {
                font-size: 2rem !important;
            }
            
            .message-card {
                padding: 1rem !important;
            }
            
            .message-card h3 {
                font-size: 0.95rem !important;
            }
            
            .message-card p {
                font-size: 11px !important;
            }
            
            .birthday-signature {
                font-size: 10px !important;
            }
        }
        
        /* 横屏模式生日优化 */
        @media (max-width: 768px) and (orientation: landscape) {
            .birthday-celebration {
                padding: 0.5rem !important;
            }
            
            .birthday-title {
                font-size: 1.5rem !important;
                margin-bottom: 0.8rem !important;
            }
            
            .birthday-age {
                margin: 1rem 0 !important;
            }
            
            .age-number {
                font-size: 2.2rem !important;
            }
            
            .birthday-celebration .couple-info {
                flex-direction: row !important;
                gap: 12px !important;
                margin: 1.2rem 0 !important;
            }
            
            .birthday-celebration .avatar {
                width: 50px !important;
                height: 50px !important;
                font-size: 35px !important;
            }
            
            .message-card {
                padding: 1rem !important;
            }
        }
    `;
    
    document.head.appendChild(birthdayStyles);
}

// 生日版计时器
function startBirthdayTimer() {
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
    
         // 每30秒更新一次（生日当天不需要实时更新）
     setInterval(updateTimer, 30000);
}

// 创建生日专属心形动画
function createBirthdayHearts() {
    const heartsContainer = document.querySelector('.hearts');
    if (!heartsContainer) return;
    
    // 生日专属心形图案
    const birthdayHearts = ['💖', '💝', '🎂', '🎉', '🎈', '⭐', '✨', '🌟', '💫', '🎁'];
    
    function createBirthdayHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart birthday-heart';
        heart.textContent = birthdayHearts[Math.floor(Math.random() * birthdayHearts.length)];
        
        // 更绚丽的动画参数
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 1.5) + 's'; // 更快的动画
        heart.style.animationDelay = Math.random() * 1 + 's';
        heart.style.fontSize = (Math.random() * 15 + 20) + 'px'; // 更大的尺寸
        heart.style.opacity = Math.random() * 0.5 + 0.5; // 更明显
        
        // 添加生日特殊样式
        heart.style.filter = 'drop-shadow(0 0 5px rgba(255, 107, 107, 0.8))';
        heart.style.animation += ', birthdayHeartSpin 3s linear infinite';
        
        heartsContainer.appendChild(heart);
        
        // 动画结束后移除元素
        setTimeout(() => {
            if (heart.parentNode) {
                heartsContainer.removeChild(heart);
            }
        }, 3000);
    }
    
    // 更频繁的心形（每0.5-1.5秒创建一个）
    const birthdayHeartInterval = setInterval(createBirthdayHeart, Math.random() * 1000 + 500);
    
    // 初始创建更多心形
    for (let i = 0; i < 10; i++) {
        setTimeout(createBirthdayHeart, i * 200);
    }
    
    // 添加生日心形的CSS动画
    const birthdayHeartStyles = document.createElement('style');
    birthdayHeartStyles.innerHTML = `
        .birthday-heart {
            z-index: 5;
        }
        
        @keyframes birthdayHeartSpin {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
        }
    `;
    
    document.head.appendChild(birthdayHeartStyles);
    
         // 返回清理函数（虽然在这个场景下可能用不到）
     return () => {
         clearInterval(birthdayHeartInterval);
     };
}

// 播放生日音乐
function playBirthdayMusic() {
    // 创建音乐控制按钮
    createMusicControls();
    
    // 方案一：Web Audio API 播放简单生日歌旋律
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        playBirthdaySongWithWebAudio();
    } else {
        console.log('浏览器不支持Web Audio API');
    }
}

// 创建音乐控制按钮
function createMusicControls() {
    const musicControls = document.createElement('div');
    musicControls.className = 'birthday-music-controls';
    musicControls.innerHTML = `
        <div class="music-control-panel">
            <button id="playBirthdayMusic" class="music-btn play-btn" onclick="toggleBirthdayMusic()">
                🎵 播放生日歌
            </button>
            <button id="stopBirthdayMusic" class="music-btn stop-btn" onclick="stopBirthdayMusic()" style="display: none;">
                ⏹️ 停止音乐
            </button>
        </div>
    `;
    
    // 添加到生日页面
    const birthdayCelebration = document.querySelector('.birthday-celebration');
    if (birthdayCelebration) {
        birthdayCelebration.appendChild(musicControls);
    }
    
    // 添加音乐控制样式
    const musicStyles = document.createElement('style');
    musicStyles.innerHTML = `
                 .birthday-music-controls {
             position: fixed;
             bottom: 20px;
             right: 20px;
             z-index: 1000;
         }
        
        .music-control-panel {
            background: rgba(255, 255, 255, 0.95);
            padding: 15px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 107, 107, 0.2);
        }
        
        .music-btn {
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            margin: 5px;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }
        
        .music-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        }
        
        .music-btn:active {
            transform: translateY(0);
        }
        
        .stop-btn {
            background: linear-gradient(135deg, #666, #888);
        }
        
                 /* 移动端适配 */
         @media (max-width: 768px) {
             .birthday-music-controls {
                 bottom: 10px;
                 right: 10px;
             }
            
            .music-control-panel {
                padding: 10px;
            }
            
            .music-btn {
                font-size: 12px;
                padding: 8px 12px;
            }
        }
    `;
    
    document.head.appendChild(musicStyles);
}

// 用Web Audio API播放生日歌旋律
let audioContext = null;
let birthdayMusicInterval = null;

function playBirthdaySongWithWebAudio() {
    // 生日歌的简单旋律音符（频率）
    const happyBirthdayMelody = [
        { note: 264, duration: 500 }, // C4 - Ha
        { note: 264, duration: 500 }, // C4 - ppy
        { note: 297, duration: 1000 }, // D4 - Birth-
        { note: 264, duration: 1000 }, // C4 - day
        { note: 352, duration: 1000 }, // F4 - to
        { note: 330, duration: 2000 }, // E4 - you
        
        { note: 264, duration: 500 }, // C4 - Ha
        { note: 264, duration: 500 }, // C4 - ppy
        { note: 297, duration: 1000 }, // D4 - Birth-
        { note: 264, duration: 1000 }, // C4 - day
        { note: 396, duration: 1000 }, // G4 - to
        { note: 352, duration: 2000 }, // F4 - you
        
        { note: 264, duration: 500 }, // C4 - Ha
        { note: 264, duration: 500 }, // C4 - ppy
        { note: 528, duration: 1000 }, // C5 - Birth-
        { note: 440, duration: 1000 }, // A4 - day
        { note: 352, duration: 1000 }, // F4 - dear
        { note: 330, duration: 1000 }, // E4 - Jia-
        { note: 297, duration: 2000 }, // D4 - yi
        
        { note: 466, duration: 500 }, // Bb4 - Ha
        { note: 466, duration: 500 }, // Bb4 - ppy
        { note: 440, duration: 1000 }, // A4 - Birth-
        { note: 352, duration: 1000 }, // F4 - day
        { note: 396, duration: 1000 }, // G4 - to
        { note: 352, duration: 2000 }, // F4 - you!
    ];
    
    window.birthdayMelody = happyBirthdayMelody;
}

// 切换生日音乐播放
function toggleBirthdayMusic() {
    const playBtn = document.getElementById('playBirthdayMusic');
    const stopBtn = document.getElementById('stopBirthdayMusic');
    
    if (!audioContext) {
        // 初始化音频上下文
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
        
        playBirthdaySong();
        
        playBtn.style.display = 'none';
        stopBtn.style.display = 'inline-block';
        
        // 显示播放提示
        showMusicNotification('🎵 生日歌开始播放！');
    }
}

// 播放完整的生日歌
function playBirthdaySong() {
    if (!window.birthdayMelody || !audioContext) return;
    
    let noteIndex = 0;
    
    function playNextNote() {
        if (noteIndex >= window.birthdayMelody.length) {
            // 歌曲播放完毕，显示提示并重置按钮
            showMusicNotification('🎉 生日歌播放完毕！');
            resetMusicControls();
            return;
        }
        
        const note = window.birthdayMelody[noteIndex];
        playTone(note.note, note.duration);
        
        birthdayMusicInterval = setTimeout(() => {
            noteIndex++;
            playNextNote();
        }, note.duration);
    }
    
    playNextNote();
}

// 播放单个音调
function playTone(frequency, duration) {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    // 设置音量包络（避免爆音）
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000 - 0.01);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

// 停止生日音乐
function stopBirthdayMusic() {
    if (birthdayMusicInterval) {
        clearTimeout(birthdayMusicInterval);
        birthdayMusicInterval = null;
    }
    
    if (audioContext) {
        audioContext.close();
        audioContext = null;
    }
    
    resetMusicControls();
    showMusicNotification('⏹️ 音乐已停止');
}

// 重置音乐控制按钮
function resetMusicControls() {
    const playBtn = document.getElementById('playBirthdayMusic');
    const stopBtn = document.getElementById('stopBirthdayMusic');
    
    if (playBtn && stopBtn) {
        playBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
    }
}

// 显示音乐通知
function showMusicNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'music-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 107, 107, 0.95);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 500;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        z-index: 10000;
        animation: fadeInOut 3s ease-in-out forwards;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
    
    // 添加通知动画
    if (!document.getElementById('musicNotificationStyles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'musicNotificationStyles';
        notificationStyles.innerHTML = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                20%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(notificationStyles);
    }
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 奕铭 & 佳怡的爱情网站加载中...');
    
    // 页面加载动画
    document.body.style.animation = 'pageLoad 0.8s ease-out';
    
    // 检查是否是佳怡生日当天
    if (isBirthdayToday()) {
        initBirthdayMode();
        console.log('🎂 今天是佳怡生日！启动生日模式');
    } else {
        // 正常模式初始化
        initNormalMode();
    }
    
    // 通用功能初始化
    initNavigation();
    createFloatingHearts();
    initInteractiveEffects();
    initPageAnimations();
    loadStaticTimeline();
    loadStaticGallery();
    initHoroscope();
    initWeather();
    
    // 跨北京时间 0 点自动刷新，确保生日模式/纪念日日期及时切换
    scheduleBeijingMidnightReload();
    
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
        
        // 使用 requestAnimationFrame 确保在浏览器下次重绘前滚动
        // 这是解决时序问题的最可靠方法
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
        });
        
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

// 当前显示的媒体数据
let currentGalleryData = [];
let currentMediaIndex = 0;

// 显示相册
function displayGallery(images, category = 'all') {
    const gallery = document.getElementById('photoGallery');
    if (!gallery) return;

    // 过滤图片
    let filteredImages = images;
    if (category !== 'all') {
        filteredImages = images.filter(img => img.category === category);
    }

    // 保存当前显示的数据，用于模态框导航
    currentGalleryData = filteredImages;

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

    filteredImages.forEach((media, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.style.animationDelay = (index * 0.1) + 's';

        // 检查是否是视频
        const isVideo = media.type === 'video' || media.url.toLowerCase().includes('.mp4');

        photoItem.innerHTML = `
            <div class="photo-wrapper" onclick="openModal(${index})">
                ${isVideo ?
                    `<div class="video-thumbnail">
                        <video src="${media.url}" muted preload="metadata"></video>
                        <div class="video-play-overlay">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>` :
                    `<img src="${media.url}" alt="${media.description}" loading="lazy">`
                }
                <div class="photo-overlay">
                    <div class="photo-title">${media.description}</div>
                    <div class="photo-date">${media.date}</div>
                    ${isVideo ? '<div class="media-type"><i class="fas fa-video"></i></div>' : ''}
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

// 照片/视频模态框
function openModal(index) {
    if (!currentGalleryData || currentGalleryData.length === 0) return;

    currentMediaIndex = index;
    const media = currentGalleryData[currentMediaIndex];

    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalCaption = document.getElementById('modalCaption');
    const modalDate = document.getElementById('modalDate');
    const mediaCounter = document.getElementById('mediaCounter');

    if (!modal || !modalPhoto) return;

    // 检查是否是视频
    const isVideo = media.type === 'video' || media.url.toLowerCase().includes('.mp4');

    if (isVideo) {
        modalPhoto.innerHTML = `
            <video src="${media.url}" controls autoplay class="modal-video">
                您的浏览器不支持视频播放。
            </video>
        `;
    } else {
        modalPhoto.innerHTML = `<img src="${media.url}" alt="${media.description}" class="modal-image">`;
    }

    // 更新信息
    if (modalCaption) modalCaption.textContent = media.description;
    if (modalDate) modalDate.textContent = media.date;
    if (mediaCounter) mediaCounter.textContent = `${currentMediaIndex + 1} / ${currentGalleryData.length}`;

    // 更新导航按钮状态
    updateNavButtons();

    // 显示模态框
    modal.style.display = 'flex';
    modal.style.animation = 'fadeIn 0.3s ease-out';
    document.body.style.overflow = 'hidden';
}

// 显示上一个媒体
function showPrevMedia() {
    if (currentMediaIndex > 0) {
        openModal(currentMediaIndex - 1);
    }
}

// 显示下一个媒体
function showNextMedia() {
    if (currentMediaIndex < currentGalleryData.length - 1) {
        openModal(currentMediaIndex + 1);
    }
}

// 更新导航按钮状态
function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.style.display = currentMediaIndex > 0 ? 'flex' : 'none';
    }

    if (nextBtn) {
        nextBtn.style.display = currentMediaIndex < currentGalleryData.length - 1 ? 'flex' : 'none';
    }
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');

    if (modal) {
        // 停止视频播放
        const video = modalPhoto.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }

        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.style.display = 'none';
            modalPhoto.innerHTML = '📷';
        }, 300);

        document.body.style.overflow = 'auto';
    }
}

// 点击模态框背景关闭和键盘支持
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // 键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (modal && modal.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPrevMedia();
                    break;
                case 'ArrowRight':
                    showNextMedia();
                    break;
            }
        }
    });
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

// ==================== 星座运势功能 ====================

// 获取星座运势数据
async function fetchHoroscope(constellation, date = '') {
    const url = new URL(HOROSCOPE_CONFIG.apiUrl);
    url.searchParams.append('key', HOROSCOPE_CONFIG.apiKey);
    url.searchParams.append('astro', constellation);
    if (date) {
        url.searchParams.append('date', date);
    }

    try {
        console.log('正在请求星座运势API:', url.toString());
        
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API响应数据:', data);

        if (data.code === 200 && data.result && data.result.list) {
            return parseHoroscopeData(data.result.list);
        } else {
            console.error('星座运势API调用失败:', data.msg || data);
            return null;
        }
    } catch (error) {
        console.error('星座运势API请求失败:', error);
        return null;
    }
}

// 获取默认星座运势数据
function getDefaultHoroscopeData(constellation) {
    const defaultMessages = {
        'capricorn': '摩羯座今天运势不错，工作上会有新的机会，感情方面需要多沟通。',
        'virgo': '处女座今天适合整理思路，财运方面有小惊喜，保持积极心态。'
    };
    
    return {
        comprehensive: '85%',
        love: Math.floor(Math.random() * 30 + 60) + '%',
        work: Math.floor(Math.random() * 30 + 65) + '%', 
        money: Math.floor(Math.random() * 25 + 55) + '%',
        health: Math.floor(Math.random() * 25 + 70) + '%',
        luckyColor: ['红色', '蓝色', '绿色', '紫色', '金色'][Math.floor(Math.random() * 5)],
        luckyNumber: String(Math.floor(Math.random() * 9 + 1)),
        benefactor: ['金牛座', '双子座', '巨蟹座', '狮子座', '天秤座'][Math.floor(Math.random() * 5)],
        summary: defaultMessages[constellation] || '今天是充满机遇的一天，保持乐观心态，好运会降临。'
    };
}

// 解析星座运势数据
function parseHoroscopeData(list) {
    const horoscope = {};
    list.forEach(item => {
        switch(item.type) {
            case '综合指数':
                horoscope.comprehensive = item.content;
                break;
            case '爱情指数':
                horoscope.love = item.content;
                break;
            case '工作指数':
                horoscope.work = item.content;
                break;
            case '财运指数':
                horoscope.money = item.content;
                break;
            case '健康指数':
                horoscope.health = item.content;
                break;
            case '幸运颜色':
                horoscope.luckyColor = item.content;
                break;
            case '幸运数字':
                horoscope.luckyNumber = item.content;
                break;
            case '贵人星座':
                horoscope.benefactor = item.content;
                break;
            case '今日概述':
                horoscope.summary = item.content;
                break;
        }
    });
    return horoscope;
}

// 获取所有人的星座运势
async function fetchAllHoroscopes() {
    const horoscopes = {};

    for (const [key, person] of Object.entries(HOROSCOPE_CONFIG.couples)) {
        console.log(`正在获取${person.name}的星座运势...`);
        let horoscope = await fetchHoroscope(person.constellation);
        
        // 如果API失败，使用默认数据作为后备
        if (!horoscope) {
            console.log(`${person.name}的星座运势API失败，使用默认数据`);
            horoscope = getDefaultHoroscopeData(person.constellation);
        }
        
        horoscopes[key] = {
            ...person,
            horoscope: horoscope
        };
    }

    return horoscopes;
}

// 渲染星座运势界面
function renderHoroscopes(horoscopes) {
    const container = document.getElementById('horoscope-container');
    if (!container) return;

    let html = '<div class="fortune-cards">';

    for (const [key, data] of Object.entries(horoscopes)) {
        const { name, chineseName, horoscope } = data;
        const cardClass = key === 'boy' ? 'boy-card' : 'girl-card';

        html += `
            <div class="fortune-card ${cardClass}">
                <div class="horoscope-title">${name} - ${chineseName}</div>
                <div class="horoscope-content">${horoscope.summary}</div>
                <div class="horoscope-stats">
                    <span class="horoscope-stat">💕 爱情 ${horoscope.love}</span>
                    <span class="horoscope-stat">💼 工作 ${horoscope.work}</span>
                    <span class="horoscope-stat">💰 财运 ${horoscope.money}</span>
                    <span class="horoscope-stat">🌈 幸运色 ${horoscope.luckyColor}</span>
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// 初始化星座运势
async function initHoroscope() {
    if (!HOROSCOPE_CONFIG.enabled || !HOROSCOPE_CONFIG.apiKey) {
        console.log('星座运势功能未启用');
        return;
    }

    console.log('🔮 正在加载星座运势...');

    // 检查容器是否存在
    const container = document.getElementById('horoscope-container');
    if (!container) {
        console.error('未找到星座运势容器');
        return;
    }

    // 显示加载状态
    container.innerHTML = '<div class="horoscope-placeholder"><div class="horoscope-placeholder-icon">✨</div><p>正在加载星座运势...</p></div>';

    const horoscopes = await fetchAllHoroscopes();

    if (Object.keys(horoscopes).length > 0) {
        renderHoroscopes(horoscopes);
        console.log('✨ 星座运势加载完成');
    } else {
        console.log('❌ 星座运势加载失败');
        container.innerHTML = '<div class="horoscope-placeholder"><div class="horoscope-placeholder-icon">❌</div><p>星座运势加载失败，请稍后重试</p><button onclick="initHoroscope()" style="margin-top: 10px; padding: 8px 16px; border: none; border-radius: 8px; background: #667eea; color: white; cursor: pointer;">🔄 重新加载</button></div>';
    }
}

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
                
                // 生活指数（运动、穿衣、感冒、紫外线等，去掉洗车）
                makeWeatherRequest('/v7/indices/1d', { 
                    location: city.code,
                    type: '1,3,9,5' // 运动、穿衣、感冒、紫外线
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
    // 获取两个城市的数据
    const city1 = WEATHER_CONFIG.cities[0]; // 淄博-奕铭
    const city2 = WEATHER_CONFIG.cities[1]; // 长沙-佳怡
    const data1 = weatherData[city1.name];
    const data2 = weatherData[city2.name];
    
    let html = '<div class="romantic-weather-container">';
    
    // 左侧 - 奕铭（淄博）
    if (data1 && data1.now) {
        const temp = Math.round(data1.now.temp);
        const feelsLike = data1.now.feelsLike ? Math.round(data1.now.feelsLike) : temp;
        const description = data1.now.text;
        const icon = weatherIcons[description] || '🌤️';
        const humidity = data1.now.humidity;
        const windDir = data1.now.windDir;
        const windScale = data1.now.windScale;
        
        html += `
            <div class="romantic-weather-card romantic-weather-left">
                <div class="romantic-avatar-section">
                    <div class="romantic-avatar">
                        <img src="${city1.person.avatarImg}" alt="${city1.person.name}">
                    </div>
                    <div class="romantic-person-info">
                        <h3 class="romantic-name">${city1.person.name}</h3>
                        <p class="romantic-location">${city1.name}</p>
                    </div>
                </div>
                <div class="romantic-weather-info">
                    <div class="romantic-main-weather">
                        <div class="romantic-temp">${temp}°</div>
                        <div class="romantic-icon">${icon}</div>
                    </div>
                    <div class="romantic-desc">${description}</div>
                    <div class="romantic-details">
                        <span>💧 ${humidity}%</span>
                        <span>💨 ${windDir} ${windScale}级</span>
                    </div>
                </div>
                <div class="romantic-gradient-bg romantic-gradient-left"></div>
            </div>
        `;
    }
    
    // 中间爱心连接
    html += `
        <div class="romantic-heart-center">
            <div class="romantic-heart-icon">💕</div>
            <div class="romantic-heart-text">T<br>A<br>的<br>天<br>气</div>
        </div>
    `;
    
    // 右侧 - 佳怡（长沙）
    if (data2 && data2.now) {
        const temp = Math.round(data2.now.temp);
        const feelsLike = data2.now.feelsLike ? Math.round(data2.now.feelsLike) : temp;
        const description = data2.now.text;
        const icon = weatherIcons[description] || '🌤️';
        const humidity = data2.now.humidity;
        const windDir = data2.now.windDir;
        const windScale = data2.now.windScale;
        
        html += `
            <div class="romantic-weather-card romantic-weather-right">
                <div class="romantic-avatar-section">
                    <div class="romantic-avatar">
                        <img src="${city2.person.avatarImg}" alt="${city2.person.name}">
                    </div>
                    <div class="romantic-person-info">
                        <h3 class="romantic-name">${city2.person.name}</h3>
                        <p class="romantic-location">${city2.name}</p>
                    </div>
                </div>
                <div class="romantic-weather-info">
                    <div class="romantic-main-weather">
                        <div class="romantic-temp">${temp}°</div>
                        <div class="romantic-icon">${icon}</div>
                    </div>
                    <div class="romantic-desc">${description}</div>
                    <div class="romantic-details">
                        <span>💧 ${humidity}%</span>
                        <span>💨 ${windDir} ${windScale}级</span>
                    </div>
                </div>
                <div class="romantic-gradient-bg romantic-gradient-right"></div>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

// 渲染预报天气 - 采用浪漫风格
function renderForecastWeather(weatherIcons) {
    let html = '<div class="romantic-forecast-container">';
    
    WEATHER_CONFIG.cities.forEach((city, cityIndex) => {
        const data = weatherData[city.name];
        if (data && (data.forecast7d || data.forecast3d)) {
            const forecast = data.forecast7d || data.forecast3d;
            const isLeft = cityIndex === 0; // 奕铭在左，佳怡在右
            
            html += `<div class="romantic-forecast-card ${isLeft ? 'romantic-forecast-left' : 'romantic-forecast-right'}">
                <div class="romantic-forecast-header">
                    <div class="romantic-avatar">
                        <img src="${city.person.avatarImg}" alt="${city.person.name}">
                    </div>
                    <div class="romantic-person-info">
                        <h3 class="romantic-name">${city.person.name}</h3>
                        <p class="romantic-location">${city.name} - ${forecast.length}天预报</p>
                    </div>
                </div>
                <div class="forecast-days">`;
            
            forecast.slice(0, 5).forEach((day, index) => { // 只显示前5天，节省空间
                const date = new Date(day.fxDate);
                const dayName = index === 0 ? '今天' : (index === 1 ? '明天' : (index === 2 ? '后天' : `${date.getMonth() + 1}/${date.getDate()}`));
                const icon = weatherIcons[day.textDay] || '🌤️';
                
                html += `
                    <div class="forecast-day">
                        <div class="day-info">
                            <span class="day-name">${dayName}</span>
                            <span class="day-date">${day.fxDate.slice(-5)}</span>
                        </div>
                        <div class="day-icon">${icon}</div>
                        <div class="day-temp">${day.tempMin}° / ${day.tempMax}°</div>
                        <div class="day-desc">${day.textDay}</div>
                    </div>
                `;
            });
            
            html += '</div><div class="romantic-gradient-bg ' + (isLeft ? 'romantic-gradient-left' : 'romantic-gradient-right') + '"></div></div>';
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

// 渲染生活指数 - 采用浪漫左右布局
function renderIndicesWeather() {
    const city1 = WEATHER_CONFIG.cities[0]; // 淄博-奕铭
    const city2 = WEATHER_CONFIG.cities[1]; // 长沙-佳怡
    const data1 = weatherData[city1.name];
    const data2 = weatherData[city2.name];
    
    let html = '<div class="romantic-indices-container">';
    
    // 左侧 - 奕铭（淄博）生活指数
    if (data1 && data1.indices && data1.indices.length > 0) {
        html += `
            <div class="romantic-indices-card romantic-indices-left">
                <div class="romantic-avatar-section">
                    <div class="romantic-avatar">
                        <img src="${city1.person.avatarImg}" alt="${city1.person.name}">
                    </div>
                    <div class="romantic-person-info">
                        <h3 class="romantic-name">${city1.person.name}</h3>
                        <p class="romantic-location">${city1.name} 生活指数</p>
                    </div>
                </div>
                <div class="romantic-indices-grid">`;
        
        data1.indices.forEach(index => {
            const levelColors = {
                '1': '#4CAF50', '2': '#8BC34A', '3': '#FF9800',
                '4': '#FF5722', '5': '#9C27B0'
            };
            const color = levelColors[index.level] || '#607D8B';
            
            html += `
                <div class="romantic-index-item">
                    <div class="romantic-index-header">
                        <span class="romantic-index-name">${index.name}</span>
                        <span class="romantic-index-level" style="background: ${color}">${index.category}</span>
                    </div>
                    <div class="romantic-index-text">${index.text}</div>
                </div>
            `;
        });
        
        html += '</div><div class="romantic-gradient-bg romantic-gradient-left"></div></div>';
    }
    
    // 中间爱心连接
    html += `
        <div class="romantic-heart-center">
            <div class="romantic-heart-icon">📊</div>
            <div class="romantic-heart-text">共同关注</div>
        </div>
    `;
    
    // 右侧 - 佳怡（长沙）生活指数
    if (data2 && data2.indices && data2.indices.length > 0) {
        html += `
            <div class="romantic-indices-card romantic-indices-right">
                <div class="romantic-avatar-section">
                    <div class="romantic-avatar">
                        <img src="${city2.person.avatarImg}" alt="${city2.person.name}">
                    </div>
                    <div class="romantic-person-info">
                        <h3 class="romantic-name">${city2.person.name}</h3>
                        <p class="romantic-location">${city2.name} 生活指数</p>
                    </div>
                </div>
                <div class="romantic-indices-grid">`;
        
        data2.indices.forEach(index => {
            const levelColors = {
                '1': '#4CAF50', '2': '#8BC34A', '3': '#FF9800',
                '4': '#FF5722', '5': '#9C27B0'
            };
            const color = levelColors[index.level] || '#607D8B';
            
            html += `
                <div class="romantic-index-item">
                    <div class="romantic-index-header">
                        <span class="romantic-index-name">${index.name}</span>
                        <span class="romantic-index-level" style="background: ${color}">${index.category}</span>
                    </div>
                    <div class="romantic-index-text">${index.text}</div>
                </div>
            `;
        });
        
        html += '</div><div class="romantic-gradient-bg romantic-gradient-right"></div></div>';
    }
    
    html += '</div>';
    return html;
}

// 渲染空气质量 - 采用浪漫左右布局
function renderAirQuality() {
    const city1 = WEATHER_CONFIG.cities[0]; // 淄博-奕铭
    const city2 = WEATHER_CONFIG.cities[1]; // 长沙-佳怡
    const data1 = weatherData[city1.name];
    const data2 = weatherData[city2.name];
    
    let html = '<div class="romantic-air-container">';
    
    // 左侧 - 奕铭（淄博）空气质量
    if (data1 && data1.air) {
        const aqi = data1.air.aqi;
        const category = data1.air.category;
        const primary = data1.air.primary;
        const aqiColors = {
            '优': '#4CAF50', '良': '#8BC34A', '轻度污染': '#FF9800',
            '中度污染': '#FF5722', '重度污染': '#9C27B0', '严重污染': '#795548'
        };
        const color = aqiColors[category] || '#607D8B';
        
        html += `
            <div class="romantic-air-card romantic-air-left">
                <div class="romantic-avatar-section">
                    <div class="romantic-avatar">
                        <img src="${city1.person.avatarImg}" alt="${city1.person.name}">
                    </div>
                    <div class="romantic-person-info">
                        <h3 class="romantic-name">${city1.person.name}</h3>
                        <p class="romantic-location">${city1.name} 空气质量</p>
                    </div>
                </div>
                <div class="romantic-air-info">
                    <div class="romantic-aqi-main">
                        <div class="romantic-aqi-value" style="color: ${color}">${aqi}</div>
                        <div class="romantic-aqi-category" style="background: ${color}">${category}</div>
                    </div>
                    <div class="romantic-air-details">
                        <p>主要污染物: ${primary}</p>
                        <p>💡 ${getAirSuggestion(category)}</p>
                    </div>
                </div>
                <div class="romantic-gradient-bg romantic-gradient-left"></div>
            </div>
        `;
    }
    
    // 中间爱心连接
    html += `
        <div class="romantic-heart-center">
            <div class="romantic-heart-icon">🌬️</div>
            <div class="romantic-heart-text">呼吸同片天空</div>
        </div>
    `;
    
    // 右侧 - 佳怡（长沙）空气质量
    if (data2 && data2.air) {
        const aqi = data2.air.aqi;
        const category = data2.air.category;
        const primary = data2.air.primary;
        const aqiColors = {
            '优': '#4CAF50', '良': '#8BC34A', '轻度污染': '#FF9800',
            '中度污染': '#FF5722', '重度污染': '#9C27B0', '严重污染': '#795548'
        };
        const color = aqiColors[category] || '#607D8B';
        
        html += `
            <div class="romantic-air-card romantic-air-right">
                <div class="romantic-avatar-section">
                    <div class="romantic-avatar">
                        <img src="${city2.person.avatarImg}" alt="${city2.person.name}">
                    </div>
                    <div class="romantic-person-info">
                        <h3 class="romantic-name">${city2.person.name}</h3>
                        <p class="romantic-location">${city2.name} 空气质量</p>
                    </div>
                </div>
                <div class="romantic-air-info">
                    <div class="romantic-aqi-main">
                        <div class="romantic-aqi-value" style="color: ${color}">${aqi}</div>
                        <div class="romantic-aqi-category" style="background: ${color}">${category}</div>
                    </div>
                    <div class="romantic-air-details">
                        <p>主要污染物: ${primary}</p>
                        <p>💡 ${getAirSuggestion(category)}</p>
                    </div>
                </div>
                <div class="romantic-gradient-bg romantic-gradient-right"></div>
            </div>
        `;
    }
    
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

// ==================== 农历转换功能 ====================
// 使用通用农历算法（1900-2100），避免手写表导致的生日/纪念日日期错误与年份缺失问题。
const BEIJING_TIME_ZONE = 'Asia/Shanghai';
const BEIJING_UTC_OFFSET_HOURS = 8;
const DAY_MS = 24 * 60 * 60 * 1000;

// 农历数据：1900-2100（常用公开历法表）
const LUNAR_MIN_YEAR = 1900;
const LUNAR_MAX_YEAR = 2100;
const LUNAR_BASE_UTC = Date.UTC(1900, 0, 31); // 1900-01-31 = 农历1900年正月初一
const LUNAR_INFO = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
    0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a4d0, 0x0d150, 0x0f252, // 2090-2099
    0x0d520 // 2100
];

const BEIJING_DATE_TIME_FORMATTER = new Intl.DateTimeFormat('zh-CN', {
    timeZone: BEIJING_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
});

function parseISODate(dateString) {
    if (typeof dateString !== 'string') return null;
    const match = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(dateString.trim());
    if (!match) return null;
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null;
    if (month < 1 || month > 12) return null;
    if (day < 1 || day > 31) return null;
    return { year, month, day };
}

function compareYMD(a, b) {
    if (a.year !== b.year) return a.year - b.year;
    if (a.month !== b.month) return a.month - b.month;
    return a.day - b.day;
}

function getBeijingDateTimeParts(date = new Date()) {
    const parts = BEIJING_DATE_TIME_FORMATTER.formatToParts(date);
    const map = {};
    for (const part of parts) {
        if (part.type !== 'literal') map[part.type] = part.value;
    }
    return {
        year: Number(map.year),
        month: Number(map.month),
        day: Number(map.day),
        hour: Number(map.hour),
        minute: Number(map.minute),
        second: Number(map.second)
    };
}

function getBeijingDateParts(date = new Date()) {
    const dt = getBeijingDateTimeParts(date);
    return { year: dt.year, month: dt.month, day: dt.day };
}

function beijingMidnightTimestamp(year, month, day) {
    return Date.UTC(year, month - 1, day, 0, 0, 0) - (BEIJING_UTC_OFFSET_HOURS * 60 * 60 * 1000);
}

function makeBeijingDate(year, month, day) {
    return new Date(beijingMidnightTimestamp(year, month, day));
}

function getNextBeijingMidnightTimestamp(fromDate = new Date()) {
    const today = getBeijingDateParts(fromDate);
    return beijingMidnightTimestamp(today.year, today.month, today.day) + DAY_MS;
}

function scheduleBeijingMidnightReload() {
    // 测试页会强制生日模式，不影响；正常页用于跨 0 点自动切换生日/普通模式
    const now = new Date();
    const nextMidnight = getNextBeijingMidnightTimestamp(now);
    const delay = Math.max(1000, nextMidnight - now.getTime() + 1500);
    setTimeout(() => {
        try {
            window.location.reload();
        } catch (e) {
            // ignore
        }
    }, delay);
}

function getLeapMonth(lunarYear) {
    return LUNAR_INFO[lunarYear - LUNAR_MIN_YEAR] & 0xf;
}

function getLeapDays(lunarYear) {
    if (getLeapMonth(lunarYear)) {
        return (LUNAR_INFO[lunarYear - LUNAR_MIN_YEAR] & 0x10000) ? 30 : 29;
    }
    return 0;
}

function getLunarMonthDays(lunarYear, lunarMonth) {
    if (lunarMonth < 1 || lunarMonth > 12) return 0;
    return (LUNAR_INFO[lunarYear - LUNAR_MIN_YEAR] & (0x10000 >> lunarMonth)) ? 30 : 29;
}

function getLunarYearDays(lunarYear) {
    let sum = 348;
    const info = LUNAR_INFO[lunarYear - LUNAR_MIN_YEAR];
    for (let mask = 0x8000; mask > 0x8; mask >>= 1) {
        sum += (info & mask) ? 1 : 0;
    }
    return sum + getLeapDays(lunarYear);
}

function solarToLunarYMD(year, month, day) {
    if (year < LUNAR_MIN_YEAR || year > LUNAR_MAX_YEAR) return null;
    if (year === 1900 && month === 1 && day < 31) return null;

    const utc = Date.UTC(year, month - 1, day);
    let offset = Math.floor((utc - LUNAR_BASE_UTC) / DAY_MS);
    if (offset < 0) return null;

    let lunarYear;
    let temp = 0;
    for (lunarYear = LUNAR_MIN_YEAR; lunarYear <= LUNAR_MAX_YEAR && offset > 0; lunarYear++) {
        temp = getLunarYearDays(lunarYear);
        offset -= temp;
    }
    if (offset < 0) {
        offset += temp;
        lunarYear--;
    }

    const leap = getLeapMonth(lunarYear);
    let isLeap = false;
    let lunarMonth;
    for (lunarMonth = 1; lunarMonth <= 12 && offset > 0; lunarMonth++) {
        if (leap > 0 && lunarMonth === leap + 1 && !isLeap) {
            lunarMonth--;
            isLeap = true;
            temp = getLeapDays(lunarYear);
        } else {
            temp = getLunarMonthDays(lunarYear, lunarMonth);
        }

        if (isLeap && lunarMonth === leap + 1) {
            isLeap = false;
        }

        offset -= temp;
    }

    if (offset === 0 && leap > 0 && lunarMonth === leap + 1) {
        if (isLeap) {
            isLeap = false;
        } else {
            isLeap = true;
            lunarMonth--;
        }
    }

    if (offset < 0) {
        offset += temp;
        lunarMonth--;
    }

    const lunarDay = offset + 1;
    return {
        lunarYear,
        lunarMonth,
        lunarDay,
        isLeapMonth: isLeap
    };
}

function lunarToSolarYMD(lunarYear, lunarMonth, lunarDay, isLeapMonth = false) {
    if (lunarYear < LUNAR_MIN_YEAR || lunarYear > LUNAR_MAX_YEAR) return null;
    if (lunarYear === 2100 && lunarMonth === 12 && lunarDay > 1) return null;
    if (lunarYear === 1900 && lunarMonth === 1 && lunarDay < 31) return null;

    const leapMonth = getLeapMonth(lunarYear);
    if (isLeapMonth && leapMonth !== lunarMonth) return null;

    const normalMonthDays = getLunarMonthDays(lunarYear, lunarMonth);
    const leapMonthDays = getLeapDays(lunarYear);
    const maxDay = isLeapMonth ? leapMonthDays : normalMonthDays;
    if (lunarMonth < 1 || lunarMonth > 12) return null;
    if (lunarDay < 1 || lunarDay > maxDay) return null;

    let offset = 0;
    for (let y = LUNAR_MIN_YEAR; y < lunarYear; y++) {
        offset += getLunarYearDays(y);
    }

    for (let m = 1; m < lunarMonth; m++) {
        offset += getLunarMonthDays(lunarYear, m);
        if (leapMonth === m) {
            offset += leapMonthDays;
        }
    }

    // 若是闰月，需要补上该月的“正常月”天数
    if (isLeapMonth && leapMonth === lunarMonth) {
        offset += normalMonthDays;
    }

    offset += lunarDay - 1;

    const utc = LUNAR_BASE_UTC + offset * DAY_MS;
    const date = new Date(utc);
    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate()
    };
}

// 将农历日期转换为阳历 Date（以北京时间当天 00:00 为基准的时间戳）
function lunarToSolar(lunarYear, lunarMonth, lunarDay, isLeapMonth = false) {
    const ymd = lunarToSolarYMD(lunarYear, lunarMonth, lunarDay, isLeapMonth);
    if (!ymd) return null;
    return makeBeijingDate(ymd.year, ymd.month, ymd.day);
}

// ==================== 纪念日计算功能 ====================
// 计算下一个纪念日日期
function getNextAnniversaryDate(anniversary) {
    const now = new Date();
    const today = getBeijingDateParts(now);

    if (anniversary.type === 'yearly') {
        const thisYearYMD = { year: today.year, month: anniversary.month, day: anniversary.day };
        let targetDate = makeBeijingDate(thisYearYMD.year, thisYearYMD.month, thisYearYMD.day);

        // 纪念日按“整天”计算：如果日期早于今天，才算“已过”
        if (compareYMD(thisYearYMD, today) < 0) {
            targetDate = makeBeijingDate(today.year + 1, anniversary.month, anniversary.day);
        }
        return targetDate;
    }

    if (anniversary.type === 'lunar') {
        // 用今天的农历年份作为基准，避免“1月跨年”时农历 12 月等日期算到下一年
        const lunarToday = solarToLunarYMD(today.year, today.month, today.day);
        const baseLunarYear = lunarToday?.lunarYear ?? today.year;
        const isLeapMonth = Boolean(anniversary.isLeapMonth);

        let targetYMD = lunarToSolarYMD(baseLunarYear, anniversary.month, anniversary.day, isLeapMonth);

        if (!targetYMD || compareYMD(targetYMD, today) < 0) {
            targetYMD = lunarToSolarYMD(baseLunarYear + 1, anniversary.month, anniversary.day, isLeapMonth) || targetYMD;
        }

        if (!targetYMD) return null;
        return makeBeijingDate(targetYMD.year, targetYMD.month, targetYMD.day);
    }

    return null;
}

// 计算距离纪念日的剩余时间
function calculateTimeUntilAnniversary(anniversaryDate) {
    const now = new Date();
    const timeDiff = anniversaryDate.getTime() - now.getTime();

    // 以北京时间的“日期”判断是否为今天（避免时区差导致误判）
    const today = getBeijingDateParts(now);
    const anniversaryDay = getBeijingDateParts(anniversaryDate);
    const isToday = compareYMD(anniversaryDay, today) === 0;

    // 如果已经过了纪念日时间点（当天 00:00），但仍在同一天，仍然视为“今天”
    if (timeDiff <= 0) return { days: 0, hours: 0, minutes: 0, isToday };

    const days = Math.floor(timeDiff / DAY_MS);
    const hours = Math.floor((timeDiff % DAY_MS) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes, isToday };
}

// 生成纪念日卡片HTML
function createAnniversaryCard(anniversary, timeLeft, anniversaryDate) {
    const isUrgent = timeLeft.days <= 3;
    const urgentClass = isUrgent ? 'countdown-urgent' : '';
    
    let countdownText;
    if (timeLeft.isToday) {
        countdownText = '🎉 今天就是！';
    } else if (timeLeft.days === 0) {
        countdownText = `还有 ${timeLeft.hours} 小时 ${timeLeft.minutes} 分钟`;
    } else {
        countdownText = `还有 ${timeLeft.days} 天`;
        if (timeLeft.days <= 7) {
            countdownText += ` ${timeLeft.hours} 小时`;
        }
    }
    
    const dateStr = anniversaryDate.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: BEIJING_TIME_ZONE
    });
    
    // 判断图标是图片URL还是emoji
    const isImageIcon = anniversary.icon.startsWith('http');
    const iconHtml = isImageIcon 
        ? `<img src="${anniversary.icon}" alt="${anniversary.title}" class="anniversary-icon-img">`
        : `<div class="anniversary-icon">${anniversary.icon}</div>`;
    
    return `
        <div class="anniversary-card ${urgentClass}" style="margin-bottom: 15px !important; margin-top: 0 !important;">
            ${iconHtml}
            <div class="anniversary-title">${anniversary.title}</div>
            <div class="anniversary-countdown">${countdownText}</div>
            <div class="anniversary-date">${dateStr}</div>
        </div>
    `;
}

// 更新纪念日显示
function updateAnniversaries() {
    const container = document.getElementById('anniversaryCards');
    if (!container) return;

    const upcomingAnniversaries = [];
    
    // 计算所有纪念日并排序
    ANNIVERSARIES.forEach(anniversary => {
        const nextDate = getNextAnniversaryDate(anniversary);
        if (nextDate) {
            const timeLeft = calculateTimeUntilAnniversary(nextDate);
            upcomingAnniversaries.push({
                ...anniversary,
                nextDate,
                timeLeft,
                sortKey: nextDate.getTime()
            });
        }
    });
    
    // 按时间排序，只显示最近的3个
    upcomingAnniversaries.sort((a, b) => a.sortKey - b.sortKey);
    const nearestThree = upcomingAnniversaries.slice(0, 3);
    
    // 生成HTML
    const cardsHTML = nearestThree.map(item => 
        createAnniversaryCard(item, item.timeLeft, item.nextDate)
    ).join('');
    
    container.innerHTML = cardsHTML || `
        <div class="anniversary-card" style="margin-bottom: 15px !important; margin-top: 0 !important;">
            <div class="anniversary-icon">📅</div>
            <div class="anniversary-title">暂无纪念日</div>
            <div class="anniversary-countdown">期待下一个特殊的日子</div>
        </div>
    `;
}

// 初始化纪念日功能
function initAnniversaries() {
    updateAnniversaries();
    // 每分钟更新一次倒计时
    setInterval(updateAnniversaries, 60000);
}

// ==================== 周公解梦功能 ====================

// 搜索解梦
async function searchDream() {
    const keyword = document.getElementById('dreamKeyword').value.trim();
    
    if (!keyword) {
        showDreamError('请输入梦境关键词');
        return;
    }
    
    if (!DREAM_CONFIG.enabled || !DREAM_CONFIG.apiKey) {
        showDreamError('解梦功能暂时不可用');
        return;
    }
    
    showDreamLoading();
    
    try {
        const url = new URL(DREAM_CONFIG.apiUrl);
        url.searchParams.append('key', DREAM_CONFIG.apiKey);
        url.searchParams.append('word', keyword);
        url.searchParams.append('num', '5');
        
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`网络错误: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.code === 200 && data.result && data.result.list) {
            renderDreamResults(data.result.list, keyword);
        } else {
            showDreamError(`解梦失败: ${data.msg || '未知错误'}`);
        }
    } catch (error) {
        console.error('解梦请求失败:', error);
        showDreamError(`解梦失败: ${error.message}`);
    }
}

// 快速搜索
function quickSearch(keyword) {
    document.getElementById('dreamKeyword').value = keyword;
    searchDream();
}

// 显示加载状态
function showDreamLoading() {
    const resultsContainer = document.getElementById('dreamResults');
    resultsContainer.innerHTML = `
        <div class="dream-loading">
            <div class="dream-loading-icon">🌙</div>
            <h3>正在解析你的梦境...</h3>
            <p>请稍候，AI正在为你寻找梦境的秘密</p>
        </div>
    `;
}

// 显示错误
function showDreamError(message) {
    const resultsContainer = document.getElementById('dreamResults');
    resultsContainer.innerHTML = `
        <div class="dream-error">
            <h3>😔 解梦失败</h3>
            <p>${message}</p>
            <p>请稍后再试或换个关键词</p>
        </div>
    `;
}

// 渲染解梦结果
function renderDreamResults(results, keyword) {
    const resultsContainer = document.getElementById('dreamResults');
    
    if (!results || results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="dream-error">
                <h3>🔍 未找到相关解梦</h3>
                <p>没有找到关于"${keyword}"的解梦内容</p>
                <p>试试其他关键词吧~</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    results.forEach((dream, index) => {
        // 清理换行符，保持原始格式
        const cleanResult = dream.result.replace(/\s+/g, ' ').trim();
        
        html += `
            <div class="dream-card" style="animation-delay: ${index * 0.1}s">
                <div class="dream-card-title">
                    <span>🌟 ${dream.title}</span>
                    <span class="dream-card-type">${dream.type}</span>
                </div>
                <div class="dream-card-content">${cleanResult}</div>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
    
    // 添加搜索结果的动画
    const cards = resultsContainer.querySelectorAll('.dream-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 回车键搜索
document.addEventListener('DOMContentLoaded', function() {
    const dreamInput = document.getElementById('dreamKeyword');
    if (dreamInput) {
        dreamInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchDream();
            }
        });
    }
});

// 足迹地图初始化
document.addEventListener('DOMContentLoaded', function() {
    // 监听页面切换到足迹页面时初始化地图
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const footprintSection = document.getElementById('footprint-section');
                if (footprintSection && footprintSection.classList.contains('active') && !footprintMap) {
                    // 延迟初始化，确保DOM元素已准备好
                    setTimeout(initFootprintMap, 100);
                }
            }
        });
    });

    // 观察足迹页面的类变化
    const footprintSection = document.getElementById('footprint-section');
    if (footprintSection) {
        observer.observe(footprintSection, { attributes: true, attributeFilter: ['class'] });
    }

    // 如果直接加载到足迹页面，立即初始化
    if (footprintSection && footprintSection.classList.contains('active')) {
        setTimeout(initFootprintMap, 100);
    }
});

// ==================== 足迹地图配置 ====================
const FOOTPRINT_CONFIG = {
    key: '42fcf5863a70517d01053d3407404f6b', // 高德地图API Key
    places: [
        {
            name: '第一次青岛见面',
            date: '2024-07-21',
            coordinates: [120.13861,36.516013], // 你们实际见面的地点
            description: '我们第一次在美丽的青岛见面，心情激动不已 🌊💕',
            emoji: '💕',
            type: 'meeting'
        },
        {
            name: '青岛方特梦幻王国',
            date: '2024-07-21',
            coordinates: [120.283343, 36.208054], // 青岛方特
            description: '一起在方特度过了欢乐的时光，各种刺激的游乐项目让我们笑声不断 🎢✨',
            emoji: '🎢',
            type: 'entertainment'
        }
    ]
};

// 足迹地图变量
let footprintMap = null;
let footprintMarkers = [];
let footprintPolyline = null;

// 初始化足迹地图
function initFootprintMap() {
    console.log('🗺️ 初始化足迹地图...');
    
    // 等待高德地图API加载完成
    if (typeof AMap === 'undefined') {
        console.log('⏳ 等待高德地图API加载...');
        setTimeout(initFootprintMap, 500);
        return;
    }

    try {
        // 创建地图实例 - 完全自适应配置
        footprintMap = new AMap.Map('footprint-map', {
            zoom: 11,
            center: [120.21, 36.36],
            mapStyle: 'amap://styles/normal', // 改为普通样式，更稳定
            viewMode: '2D', // 改为2D，避免3D带来的复杂性
            resizeEnable: true, // 启用地图自适应调整
            scrollWheel: true,
            doubleClickZoom: true,
            keyboardEnable: true,
            dragEnable: true,
            zoomEnable: true,
            rotateEnable: false, // 禁用旋转，简化交互
            pitchEnable: false, // 禁用倾斜，简化交互
            animateEnable: true,
            jogEnable: true,
            isHotspot: false,
            defaultCursor: 'pointer',
            touchZoom: true, // 确保触摸缩放启用
            touchZoomCenter: 1
        });

        console.log('✅ 高德地图实例创建成功');

        // 地图加载完成后的处理
        footprintMap.on('complete', function() {
            console.log('🗺️ 地图加载完成，开始强制调整');
            setTimeout(() => {
                footprintMap.getViewport().resize();
                console.log('🔄 强制地图重新调整尺寸');
            }, 200);
        });

        // 添加足迹标记点
        addFootprintMarkers();
        
        // 连接足迹路径
        drawFootprintPath();
        
        // 渲染足迹列表
        renderFootprintList();
        
        // 设置地图视野以包含所有标记点
        setFootprintMapBounds();
        
        // 确保滚轮缩放启用
        enableMapInteractions();
        
        // 添加窗口大小变化监听器，确保地图自适应
        addMapResizeListener();
        
        // HTML按钮已经在HTML中创建，不需要JS动态创建
        console.log('✅ 使用HTML中的缩放按钮');
        
        console.log('🎉 足迹地图初始化完成');
        
    } catch (error) {
        console.error('❌ 足迹地图初始化失败:', error);
        showFootprintError('地图加载失败，请刷新页面重试');
    }
}



// 添加地图自适应调整
function addMapResizeListener() {
    try {
        // 窗口大小变化时重新调整地图
        window.addEventListener('resize', function() {
            if (footprintMap) {
                console.log('🖥️ 窗口大小变化，重新调整地图');
                setTimeout(() => {
                    footprintMap.getViewport().resize();
                }, 100);
            }
        });
        
        // 监听页面可见性变化
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && footprintMap) {
                setTimeout(() => {
                    footprintMap.getViewport().resize();
                }, 100);
            }
        });
        
        console.log('✅ 地图自适应监听器已添加');
    } catch (error) {
        console.log('❌ 地图自适应监听器添加失败:', error);
    }
}

// 确保地图交互功能启用
function enableMapInteractions() {
    try {
        // 确保所有交互功能启用
        footprintMap.setStatus({
            scrollWheel: true,
            doubleClickZoom: true,
            keyboardEnable: true,
            dragEnable: true,
            zoomEnable: true,
            rotateEnable: true,
            pitchEnable: true
        });
        
        console.log('✅ 地图交互功能已启用（包括滚轮缩放）');
        
        // 添加地图事件监听，确认交互正常
        footprintMap.on('zoomchange', function() {
            console.log('🔍 地图缩放级别改变为:', footprintMap.getZoom());
        });
        
        footprintMap.on('click', function() {
            console.log('👆 地图被点击，滚轮缩放已激活');
        });
        
    } catch (error) {
        console.log('❌ 启用地图交互功能失败:', error);
    }
}

// 添加简单的缩放控件
function addSimpleZoomControls() {
    try {
        console.log('🎯 开始添加缩放控件...');
        
        const mapContainer = document.getElementById('footprint-map');
        if (!mapContainer) {
            console.log('❌ 地图容器未找到');
            return;
        }

        // 确保地图容器有相对定位
        mapContainer.style.position = 'relative';

        const zoomContainer = document.createElement('div');
        zoomContainer.id = 'custom-zoom-controls';
        zoomContainer.style.cssText = `
            position: absolute !important;
            top: 10px !important;
            right: 10px !important;
            z-index: 99999 !important;
            background: white !important;
            border-radius: 6px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
            overflow: hidden !important;
            border: 1px solid #ddd !important;
            pointer-events: auto !important;
            display: block !important;
            visibility: visible !important;
        `;

        const zoomInBtn = document.createElement('button');
        zoomInBtn.innerHTML = '+';
        zoomInBtn.title = '放大';
        zoomInBtn.style.cssText = `
            display: block !important;
            width: 32px !important;
            height: 32px !important;
            border: none !important;
            background: white !important;
            cursor: pointer !important;
            font-size: 20px !important;
            font-weight: bold !important;
            border-bottom: 1px solid #ddd !important;
            transition: background-color 0.2s !important;
            pointer-events: auto !important;
            position: relative !important;
            z-index: 99999 !important;
        `;
        
        zoomInBtn.onmouseover = () => zoomInBtn.style.backgroundColor = '#f0f0f0';
        zoomInBtn.onmouseout = () => zoomInBtn.style.backgroundColor = 'white';
        zoomInBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔍 点击放大按钮');
            if (footprintMap) {
                const currentZoom = footprintMap.getZoom();
                footprintMap.setZoom(currentZoom + 1);
                console.log('✅ 地图放大成功，当前缩放级别:', footprintMap.getZoom());
            }
        };

        zoomInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔍 addEventListener: 点击放大按钮');
            if (footprintMap) {
                const currentZoom = footprintMap.getZoom();
                footprintMap.setZoom(currentZoom + 1);
            }
        });

        const zoomOutBtn = document.createElement('button');
        zoomOutBtn.innerHTML = '−';
        zoomOutBtn.title = '缩小';
        zoomOutBtn.style.cssText = `
            display: block !important;
            width: 32px !important;
            height: 32px !important;
            border: none !important;
            background: white !important;
            cursor: pointer !important;
            font-size: 20px !important;
            font-weight: bold !important;
            transition: background-color 0.2s !important;
            pointer-events: auto !important;
            position: relative !important;
            z-index: 99999 !important;
        `;
        
        zoomOutBtn.onmouseover = () => zoomOutBtn.style.backgroundColor = '#f0f0f0';
        zoomOutBtn.onmouseout = () => zoomOutBtn.style.backgroundColor = 'white';
        zoomOutBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔍 点击缩小按钮');
            if (footprintMap) {
                const currentZoom = footprintMap.getZoom();
                footprintMap.setZoom(currentZoom - 1);
                console.log('✅ 地图缩小成功，当前缩放级别:', footprintMap.getZoom());
            }
        };

        zoomOutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔍 addEventListener: 点击缩小按钮');
            if (footprintMap) {
                const currentZoom = footprintMap.getZoom();
                footprintMap.setZoom(currentZoom - 1);
            }
        });

        zoomContainer.appendChild(zoomInBtn);
        zoomContainer.appendChild(zoomOutBtn);
        mapContainer.appendChild(zoomContainer);
        
        // 添加测试按钮
        const testBtn = document.createElement('button');
        testBtn.innerHTML = 'TEST';
        testBtn.style.cssText = `
            position: absolute !important;
            top: 10px !important;
            left: 10px !important;
            z-index: 99999 !important;
            width: 50px !important;
            height: 30px !important;
            background: red !important;
            color: white !important;
            border: none !important;
            cursor: pointer !important;
            pointer-events: auto !important;
            display: block !important;
            visibility: visible !important;
        `;
        testBtn.onclick = () => {
            alert('测试按钮工作！现在缩放级别: ' + footprintMap.getZoom());
            console.log('🧪 测试按钮被点击');
        };
        mapContainer.appendChild(testBtn);
        
        console.log('✅ 缩放控件添加成功');
        console.log('🧪 添加了红色测试按钮，请点击验证事件是否工作');
    } catch (error) {
        console.log('❌ 缩放控件添加失败:', error);
    }
}

// 添加足迹标记点
function addFootprintMarkers() {
    FOOTPRINT_CONFIG.places.forEach((place, index) => {
        // 创建标记点
        const marker = new AMap.Marker({
            position: place.coordinates,
            title: place.name,
            offset: new AMap.Pixel(-15, -30),
            content: createMarkerContent(place, index + 1)
        });

        // 添加点击事件
        marker.on('click', function() {
            showPlaceInfo(place);
        });

        // 添加到地图
        footprintMap.add(marker);
        footprintMarkers.push(marker);
    });
}

// 创建标记点内容
function createMarkerContent(place, number) {
    return `
        <div class="footprint-marker" style="
            position: relative;
            width: 30px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 15px 15px 15px 5px;
            border: 2px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            transform: translateY(-2px);
            transition: all 0.3s ease;
        " onmouseover="this.style.transform='translateY(-5px) scale(1.1)'" 
           onmouseout="this.style.transform='translateY(-2px) scale(1)'">
            ${number}
            <div style="
                position: absolute;
                top: -10px;
                right: -10px;
                font-size: 16px;
                z-index: 10;
            ">${place.emoji}</div>
        </div>
    `;
}

// 绘制足迹路径
function drawFootprintPath() {
    // 按日期排序地点
    const sortedPlaces = [...FOOTPRINT_CONFIG.places].sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    );

    // 创建路径坐标数组
    const pathCoordinates = sortedPlaces.map(place => place.coordinates);

    // 创建线路
    footprintPolyline = new AMap.Polyline({
        path: pathCoordinates,
        strokeColor: '#667eea',
        strokeWeight: 4,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        lineJoin: 'round',
        lineCap: 'round',
        showDir: true, // 显示方向箭头
        isOutline: true,
        outlineColor: 'white',
        borderWeight: 2
    });

    footprintMap.add(footprintPolyline);
}

// 设置地图视野包含所有标记点
function setFootprintMapBounds() {
    if (footprintMarkers.length > 0) {
        footprintMap.setFitView(footprintMarkers, false, [50, 50, 50, 50]);
    }
}

// 显示地点详情
function showPlaceInfo(place) {
    const infoWindow = new AMap.InfoWindow({
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, -40),
        content: `
            <div style="padding: 15px; max-width: 250px;">
                <h3 style="margin: 0 0 8px 0; color: #667eea; font-size: 16px;">
                    ${place.emoji} ${place.name}
                </h3>
                <p style="margin: 0 0 8px 0; color: #764ba2; font-size: 12px;">
                    📅 ${place.date}
                </p>
                <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.4;">
                    ${place.description}
                </p>
            </div>
        `
    });

    infoWindow.open(footprintMap, place.coordinates);
}

// 渲染足迹列表
function renderFootprintList() {
    const container = document.getElementById('footprint-places');
    if (!container) return;

    // 按日期排序
    const sortedPlaces = [...FOOTPRINT_CONFIG.places].sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    );

    const placesHTML = sortedPlaces.map((place, index) => `
        <div class="footprint-place" onclick="focusOnPlace(${index})" data-place-index="${index}">
            <span class="footprint-place-emoji">${place.emoji}</span>
            <div class="footprint-place-name">${place.name}</div>
            <div class="footprint-place-date">📅 ${place.date}</div>
            <div class="footprint-place-description">${place.description}</div>
        </div>
    `).join('');

    container.innerHTML = placesHTML;
}

// 点击足迹列表项，聚焦到地图上的标记点
function focusOnPlace(index) {
    if (!footprintMap || !FOOTPRINT_CONFIG.places[index]) return;

    const place = FOOTPRINT_CONFIG.places[index];
    const position = new AMap.LngLat(place.coordinates[0], place.coordinates[1]);

    // 根据地点设置不同的缩放级别
    const zoomLevel = index === 0 ? 17 : 15; // "第一次见面"的缩放级别设为17，更近一些

    // 移动地图中心并放大
    footprintMap.setZoomAndCenter(zoomLevel, position, false, 1000);

    // 显示信息窗体
    showPlaceInfo(index);
}

// 显示足迹错误信息
function showFootprintError(message) {
    const container = document.getElementById('footprint-map');
    if (container) {
        container.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                border-radius: 15px;
                color: #666;
                text-align: center;
                padding: 40px;
            ">
                <div style="font-size: 3rem; margin-bottom: 20px;">🗺️</div>
                <h3 style="margin: 0 0 10px 0; color: #e74c3c;">地图加载失败</h3>
                <p style="margin: 0; color: #7f8c8d;">${message}</p>
                <button onclick="initFootprintMap()" style="
                    margin-top: 20px;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    background: #667eea;
                    color: white;
                    cursor: pointer;
                    font-size: 14px;
                ">🔄 重新加载</button>
            </div>
        `;
    }
}

// ==================== HTML按钮处理函数 ====================
// 这些函数直接在HTML中调用，避免事件绑定问题

function htmlTestBtn() {
    console.log('🧪 HTML测试按钮被点击');
    if (footprintMap) {
        alert('HTML按钮工作！当前缩放级别: ' + footprintMap.getZoom());
    } else {
        alert('地图未初始化');
    }
}

function htmlZoomIn() {
    console.log('🔍 HTML放大按钮被点击');
    if (footprintMap) {
        const currentZoom = footprintMap.getZoom();
        footprintMap.setZoom(currentZoom + 1);
        console.log('✅ 地图放大成功，当前缩放级别:', footprintMap.getZoom());
    } else {
        console.log('❌ 地图未初始化');
    }
}

function htmlZoomOut() {
    console.log('🔍 HTML缩小按钮被点击');
    if (footprintMap) {
        const currentZoom = footprintMap.getZoom();
        footprintMap.setZoom(currentZoom - 1);
        console.log('✅ 地图缩小成功，当前缩放级别:', footprintMap.getZoom());
    } else {
        console.log('❌ 地图未初始化');
    }
}

// 让这些函数全局可用
window.htmlTestBtn = htmlTestBtn;
window.htmlZoomIn = htmlZoomIn;
window.htmlZoomOut = htmlZoomOut;

console.log('💕 静态爱情网站脚本加载完成 - 奕铭 & 佳怡');
console.log('🌙 周公解梦功能已启用');
console.log('🗺️ 足迹地图功能已启用');
console.log('🎯 HTML按钮函数已注册');
