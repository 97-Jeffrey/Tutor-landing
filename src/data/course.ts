

// import AP_ECON from '@/assets/ap_econ.png'
// import AP_CALCULUS from '@/assets/ap_calculus.png'
// import AP_CHEMISTRY from '@/assets/ap_chemistry.png'
import AP_COURSE from '@/assets/ap_course.png'
import IB_COURSE from '@/assets/ib_course.png'
import HIGH_SCHOOL from '@/assets/high_school.png'

// import AVATAR from '@/assets/avatar.png'
import AVATAR2 from '@/assets/avatar2.png'
// import AVATAR3 from '@/assets/avatar3.png'
// import AVATAR4 from '@/assets/avatar4.png'

import { StaticImageData } from 'next/image';

interface course {
    slug?: string,
    name: string,
    name_ch?: string,
    type?: string,
    type_ch?: string,
    description?: string,
    description_ch?:string,
    content?: string[],
    contentList?: string[],
    content_ch?: string [],
    timing?: string,
    timing_ch?: string,
    format?: {[category: string]: string[]}
    format_ch?: {[category: string]: string[]},
    image: StaticImageData,
    instructor?: string,
    instructor_ch?: string,
    targetAudience?: string,
    targetAudience_ch?: string,
    instructor_image?: StaticImageData
}

const COURSES: course[]  = [
    {
        slug: 'ap-econ',
        name: 'AP Course',
        name_ch:'AP 课程',
        content: [
            `🧮 Mathematics & Computer Science`,
            `🔬 Sciences`,
            `🌎 Social Sciences & History`,
            `🎨 Arts`,
            `🌐 World Languages & Cultures`,
            `📖 English & Literature`
        ],
        content_ch: [
            `🧮 数学与计算机科学`,
            `🔬 科学`,
            `🌎 社会科学与历史`,
            `🎨 艺术`,
            `🌐 世界语言与文化`,
            `📖 英语与文学`
        ],
        format:{
            "🧮 Mathematics & Computer Science":[
                'AP Calculus AB',
                'AP Calculus BC',
                'AP Statistics',
                'AP Precalculus',
                'AP Computer Science A',
                'AP Computer Science Principles'
            ],
            "🔬 Sciences":[
                'AP Biology',
                'AP Chemistry',
                'AP Physics 1: Algebra-Based',
                'AP Physics 2: Algebra-Based',
                'AP Physics C: Mechanics',
                'AP Physics C: Electricity and Magnetism',
                'AP Environmental Science'
            ],
            "🌎 Social Sciences & History":[
                'AP Microeconomics',
                'AP Macroeconomics',
                'AP Psychology',
                'AP Human Geography',
                'AP U.S. History',
                'AP World History: Modern',
                'AP European History',
                'AP U.S. Government and Politics',
                'AP Comparative Government and Politics'
            ],
            "🎨 Arts":[
                'AP Music Theory',
                'AP Studio Art: 2-D Design',
                'AP Studio Art: 3-D Design',
                'AP Studio Art: Drawing',
                'AP Art History'
            ],
            "🌐 World Languages & Cultures":[
                'AP Chinese Language and Culture',
                'AP French Language and Culture',
                'AP Spanish Language and Culture',
                'AP Spanish Literature and Culture',
                'AP German Language and Culture',
                'AP Italian Language and Culture',
                'AP Japanese Language and Culture',
            ],
            "📖 English & Literature":[
                'AP English Language and Composition',
                'AP English Literature and Composition',
            ]
        },
        format_ch: {
            "🧮 数学与计算机科学": [
                'AP 微积分 AB',
                'AP 微积分 BC',
                'AP 统计学',
                'AP 预备微积分',
                'AP 计算机科学 A',
                'AP 计算机科学原理'
            ],
            "🔬 科学": [
                'AP 生物',
                'AP 化学',
                'AP 物理 1（代数基础）',
                'AP 物理 2（代数基础）',
                'AP 物理 C：力学',
                'AP 物理 C：电磁学',
                'AP 环境科学'
            ],
            "🌎 社会科学与历史": [
                'AP 微观经济学',
                'AP 宏观经济学',
                'AP 心理学',
                'AP 人文地理',
                'AP 美国历史',
                'AP 世界历史（现代）',
                'AP 欧洲历史',
                'AP 美国政府与政治',
                'AP 比较政府与政治'
            ],
            "🎨 艺术": [
                'AP 音乐理论',
                'AP 工作室艺术：二维设计',
                'AP 工作室艺术：三维设计',
                'AP 工作室艺术：绘画',
                'AP 艺术史'
            ],
            "🌐 世界语言与文化": [
                'AP 中文语言与文化',
                'AP 法语语言与文化',
                'AP 西班牙语语言与文化',
                'AP 西班牙文学与文化',
                'AP 德语语言与文化',
                'AP 意大利语语言与文化',
                'AP 日语语言与文化'
            ],
            "📖 英语与文学": [
                'AP 英语语言与写作',
                'AP 英语文学与写作'
            ]
        },
        image: AP_COURSE,
    },
    {
        slug: 'ib-course',
        name: 'IB Course',
        name_ch:'IB 课程',

        content: [
            `IB Diploma Programme (DP) Tutoring`,
            `Internal Assessment (IA) & Extended Essay (EE) Support`,
            `IB Exam Preparation`,
            `Progress Monitoring`,
        ],
        content_ch: [
            `IB 文凭课程（DP）辅导`,
            `内部评估（IA）与拓展论文（EE）支持`,
            `IB 考试准备`,
            `学习进度监测`,
        ],
        format:{
            "IB Diploma Programme (DP) Tutoring":[
                'Group 1: Studies in Language and Literature (e.g., English A)',
                'Group 2: Language Acquisition (e.g., Chinese B, French B)',
                'Group 3: Individuals and Societies (e.g., Economics, Business Management, History)',
                'Group 4: Sciences (e.g., Biology, Chemistry, Physics, Environmental Systems)',
                'Group 5: Mathematics (AA and AI – SL & HL)',
                'Group 6: The Arts (e.g., Visual Arts, Music)',
            ],
            "Internal Assessment (IA) & Extended Essay (EE) Support":[
                'Guidance on research topics, structure, and content',
                'Feedback and supervision from academically experienced mentors',
                'Support in citation, formatting, and analytical writing',
            ],
            "IB Exam Preparation":[
                'Practice with past papers and mark schemes',
                'Focused review sessions and concept mastery',
                'Time management and test-taking strategies',
            ],
            "Progress Monitoring":[
                'Regular feedback and performance tracking',
                'Personalized study plans to meet student goals and IB requirements',
            ],
        },
        format_ch: {
            "IB 文凭课程（DP）辅导":[
                '第 1 组：语言与文学研究（如：English A）',
                '第 2 组：语言习得（如：Chinese B、French B）',
                '第 3 组：个人与社会（如：经济学、商业管理、历史）',
                '第 4 组：科学（如：生物、化学、物理、环境系统）',
                '第 5 组：数学（AA 与 AI —— SL & HL）',
                '第 6 组：艺术（如：视觉艺术、音乐）'
            ],
            "内部评估（IA）与拓展论文（EE）支持":[
                '研究主题、结构与内容的指导',
                '由具有学术经验的导师提供反馈与监督',
                '引用格式、排版及分析型写作的支持'
            ],
            "IB 考试准备":[
                '真题与评分标准练习',
                '重点复习课程与概念强化',
                '时间管理与考试策略训练'
            ],
            "学习进度监测":[
                '定期反馈与学习表现追踪',
                '依据学生目标与 IB 要求制定个性化学习计划'
            ]
        },
        image: IB_COURSE,
        instructor: 'Miko Ela',
        instructor_ch:'小米',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        targetAudience_ch:"9至12年级，无基础要求",
        instructor_image: AVATAR2
    },
    {
        slug: 'high-school',
        name: 'High School Course',
        name_ch:' 高中课程',
        type: 'High School',
        type_ch: '高中',
        description:'course is specific for G5-G7 students with choice of multiple courses',
        description_ch:"课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心",

        content: [
            `High School Courses`,
        ],
        content_ch:[
            `课程将根据 SAT 题型进行结构化安排，帮助学生理清解题思路和常见考点。每种题型将用 1 到 2 节课进行讲解，重点进行基础训练和解题方法的讲授。`,
        ],
        format:{
            "High School Courses":['All High School Courses']
        },
        image: HIGH_SCHOOL,
    },

]


const data = {
    COURSES
}

export default data