

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
    format?: object,
    format_ch?: string[],
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
        name_ch:'AP 经济学',
        type: 'AP Course',
        type_ch: 'AP 课程',
        description:'Earn credits based on AP exam scores.',
        description_ch:"课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心",

        content: [
            `🧮 Mathematics & Computer Science`,
            `🔬 Sciences`,
            `🌎 Social Sciences & History`,
            `🎨 Arts`,
            `🌐 World Languages & Cultures`,
            `📖 English & Literature`
        ],
        content_ch:[
            `课程将根据 SAT 题型进行结构化安排，帮助学生理清解题思路和常见考点。每种题型将用 1 到 2 节课进行讲解，重点进行基础训练和解题方法的讲授。`,
            `在整个课程中，我们将安排定期的练习环节, 并且根据学生的表现，老师会提供有针对性的学习建议，并推荐适合的练习资料，以巩固并提升学生的理解能力。`,
            `老师将根据每位学生的具体表现，灵活调整课程的重点与节奏，鼓励学生通过理解与练习，探索适合自己的提升策略。`
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
        image: AP_COURSE,
    },
    {
        slug: 'ib-course',
        name: 'IB Course',
        name_ch:'IB 微积分',
        type: 'IB Course',
        type_ch: 'IB 课程',
        description:'Available at Standard Level (SL) and Higher Level (HL)',
        description_ch:"课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心",

        content: [
            `IB Diploma Programme (DP) Tutoring`,
            `Internal Assessment (IA) & Extended Essay (EE) Support`,
            `IB Exam Preparation`,
            `Progress Monitoring`,
        ],
        content_ch:[
            `课程将根据 SAT 题型进行结构化安排，帮助学生理清解题思路和常见考点。每种题型将用 1 到 2 节课进行讲解，重点进行基础训练和解题方法的讲授。`,
            `在整个课程中，我们将安排定期的练习环节, 并且根据学生的表现，老师会提供有针对性的学习建议，并推荐适合的练习资料，以巩固并提升学生的理解能力。`,
            `老师将根据每位学生的具体表现，灵活调整课程的重点与节奏，鼓励学生通过理解与练习，探索适合自己的提升策略。`

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
        format_ch:[
             `小班授课：每班最少3人开课，最多不超过10人。线下面授确保教学质量。`,
             `根据课程进度和学生情况，部分课程可接受中途插班。`,
             `如需了解线上课程选项，欢迎咨询课程顾问获取详细信息。`

        ],
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
        name_ch:' 化学',
        type: 'High School',
        type_ch: 'AP 课程',
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
        format_ch:[
             `小班授课：每班最少3人开课，最多不超过10人。线下面授确保教学质量。`,
             `根据课程进度和学生情况，部分课程可接受中途插班。`,
             `如需了解线上课程选项，欢迎咨询课程顾问获取详细信息。`

        ],
        image: HIGH_SCHOOL,
    },

]


const data = {
    COURSES
}

export default data