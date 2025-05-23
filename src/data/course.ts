

import AP_ECON from '@/assets/ap_econ.png'
import AP_CALCULUS from '@/assets/ap_calculus.png'
import AP_CHEMISTRY from '@/assets/ap_chemistry.png'
import AP_PHYSICS from '@/assets/ap_physics.png'

import AVATAR from '@/assets/avatar.png'
import AVATAR2 from '@/assets/avatar2.png'
import AVATAR3 from '@/assets/avatar3.png'
import AVATAR4 from '@/assets/avatar4.png'

import { StaticImageData } from 'next/image';

interface course {
    slug: string,
    name: string,
    name_ch: string,
    type: string,
    type_ch: string,
    description: string,
    description_ch:string,
    content: string[],
    content_ch: string [],
    timing: string,
    timing_ch: string,
    format: string [],
    format_ch: string[],
    image: StaticImageData,
    instructor: string,
    instructor_ch: string,
    targetAudience: string,
    targetAudience_ch: string,
    instructor_image: StaticImageData
}

const COURSES: course[]  = [
    {
        slug: 'ap-econ',
        name: 'AP Economics',
        name_ch:'AP 经济学',
        type: 'AP Course',
        type_ch: 'AP 课程',
        description:'course is specific for G5-G7 students with choice of multiple courses',
        description_ch:"课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心",

        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        content_ch:[
            `课程将根据 SAT 题型进行结构化安排，帮助学生理清解题思路和常见考点。每种题型将用 1 到 2 节课进行讲解，重点进行基础训练和解题方法的讲授。`,
            `在整个课程中，我们将安排定期的练习环节, 并且根据学生的表现，老师会提供有针对性的学习建议，并推荐适合的练习资料，以巩固并提升学生的理解能力。`,
            `老师将根据每位学生的具体表现，灵活调整课程的重点与节奏，鼓励学生通过理解与练习，探索适合自己的提升策略。`

        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
15 sessions total, 45 hours in total.`,
        timing_ch: `7月4日 – 8月22日，每周二和周五，下午3点至6点，
共15节课，合计45小时。`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        format_ch:[
             `小班授课：每班最少3人开课，最多不超过10人。线下面授确保教学质量。`,
             `根据课程进度和学生情况，部分课程可接受中途插班。`,
             `如需了解线上课程选项，欢迎咨询课程顾问获取详细信息。`

        ],
        image: AP_ECON,
        instructor: 'Alex Chen',
        instructor_ch:'陈波宇',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        targetAudience_ch:"9至12年级，无基础要求",
        instructor_image: AVATAR
    },
    {
        slug: 'ap-calculus',
        name: 'AP Economics',
        name_ch:'AP 微积分',
        type: 'AP Course',
        type_ch: 'AP 课程',
        description:'course is specific for G5-G7 students with choice of multiple courses',
        description_ch:"课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心",

        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        content_ch:[
            `课程将根据 SAT 题型进行结构化安排，帮助学生理清解题思路和常见考点。每种题型将用 1 到 2 节课进行讲解，重点进行基础训练和解题方法的讲授。`,
            `在整个课程中，我们将安排定期的练习环节, 并且根据学生的表现，老师会提供有针对性的学习建议，并推荐适合的练习资料，以巩固并提升学生的理解能力。`,
            `老师将根据每位学生的具体表现，灵活调整课程的重点与节奏，鼓励学生通过理解与练习，探索适合自己的提升策略。`

        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
15 sessions total, 45 hours in total.`,
        timing_ch: `7月4日 – 8月22日，每周二和周五，下午3点至6点，
共15节课，合计45小时。`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        format_ch:[
             `小班授课：每班最少3人开课，最多不超过10人。线下面授确保教学质量。`,
             `根据课程进度和学生情况，部分课程可接受中途插班。`,
             `如需了解线上课程选项，欢迎咨询课程顾问获取详细信息。`

        ],
        image: AP_CALCULUS,
        instructor: 'Miko Ela',
        instructor_ch:'小米',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        targetAudience_ch:"9至12年级，无基础要求",
        instructor_image: AVATAR2
    },
    {
        slug: 'ap-chemistry',
        name: 'AP Chemistry',
        name_ch:'AP 化学',
        type: 'AP Course',
        type_ch: 'AP 课程',
        description:'course is specific for G5-G7 students with choice of multiple courses',
        description_ch:"课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心",

        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        content_ch:[
            `课程将根据 SAT 题型进行结构化安排，帮助学生理清解题思路和常见考点。每种题型将用 1 到 2 节课进行讲解，重点进行基础训练和解题方法的讲授。`,
            `在整个课程中，我们将安排定期的练习环节, 并且根据学生的表现，老师会提供有针对性的学习建议，并推荐适合的练习资料，以巩固并提升学生的理解能力。`,
            `老师将根据每位学生的具体表现，灵活调整课程的重点与节奏，鼓励学生通过理解与练习，探索适合自己的提升策略。`

        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
15 sessions total, 45 hours in total.`,
        timing_ch: `7月4日 – 8月22日，每周二和周五，下午3点至6点，
共15节课，合计45小时。`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        format_ch:[
             `小班授课：每班最少3人开课，最多不超过10人。线下面授确保教学质量。`,
             `根据课程进度和学生情况，部分课程可接受中途插班。`,
             `如需了解线上课程选项，欢迎咨询课程顾问获取详细信息。`

        ],
        image: AP_CHEMISTRY,
        instructor: 'Wiki Wola',
        instructor_ch:'小微',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        targetAudience_ch:"9至12年级，无基础要求",
        instructor_image: AVATAR3
    },
    {
        slug: 'ap-biology',
        name: 'AP Biology',
        name_ch:'AP 生物学',
        type: 'AP Course',
        type_ch: 'AP 课程',
        description:'course is specific for G5-G7 students with choice of multiple courses',
        description_ch:"课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心",

        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        content_ch:[
            `课程将根据 SAT 题型进行结构化安排，帮助学生理清解题思路和常见考点。每种题型将用 1 到 2 节课进行讲解，重点进行基础训练和解题方法的讲授。`,
            `在整个课程中，我们将安排定期的练习环节, 并且根据学生的表现，老师会提供有针对性的学习建议，并推荐适合的练习资料，以巩固并提升学生的理解能力。`,
            `老师将根据每位学生的具体表现，灵活调整课程的重点与节奏，鼓励学生通过理解与练习，探索适合自己的提升策略。`

        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
15 sessions total, 45 hours in total.`,
        timing_ch: `7月4日 – 8月22日，每周二和周五，下午3点至6点，
共15节课，合计45小时。`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        format_ch:[
             `小班授课：每班最少3人开课，最多不超过10人。线下面授确保教学质量。`,
             `根据课程进度和学生情况，部分课程可接受中途插班。`,
             `如需了解线上课程选项，欢迎咨询课程顾问获取详细信息。`

        ],
        image: AP_PHYSICS,
        instructor: 'Brian Wong',
        instructor_ch:'王明',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        targetAudience_ch:"9至12年级，无基础要求",
        instructor_image: AVATAR4
    },

]


const data = {
    COURSES
}

export default data