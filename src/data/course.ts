

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
    type: string,
    description: string,
    content: string[],
    timing: string,
    format: string [],
    image: StaticImageData,
    instructor: string,
    targetAudience: string,
    instructor_image: StaticImageData
}

const COURSES: course[]  = [
    {
        slug: 'ap-econ',
        name: 'AP Economics',
        type: 'AP Course',
        description:' 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
15 sessions total, 45 hours in total.`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        image: AP_ECON,
        instructor: 'Alex Chen',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        instructor_image: AVATAR
    },
    {
        slug: 'ap-calculus',
        name: 'AP Calculus',
        type: 'AP Course',
        description:' 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
        15 sessions total, 45 hours in total.`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        image: AP_CALCULUS,
        instructor: 'Alex Chen',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        instructor_image: AVATAR2
    },
    {
        slug: 'ap-chemistry',
        name: 'AP Chemistry',
        type: 'AP Course',
        description:' 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
        15 sessions total, 45 hours in total.`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        image: AP_CHEMISTRY,
        instructor: 'Alex Chen',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        instructor_image: AVATAR3
    },
    {
        slug: 'ap-physics',
        name: 'AP Physics',
        type: 'AP Course',
        description:' 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        content: [
            `The course will be structured according to SAT question types, helping students clarify problem-solving approaches and common test points. Each question type will be covered in 1–2 lessons, focusing on foundational training and method instruction.`,
            `Throughout the course, periodic practice sessions will be arranged. Based on students’ performance, the instructor will provide targeted learning suggestions and recommend suitable practice materials to reinforce and enhance understanding.`,
            `The instructor will adapt the focus and pace of lessons based on each student’s specific performance, encouraging students to discover personalized strategies for improvement through understanding and practice.`
        ],
        timing:`July 4 – August 22, every Tuesday and Friday, from 3:00 PM to 6:00 PM,
        15 sessions total, 45 hours in total.`,
        format:[
            `Small class sizes: Classes start with a minimum of 3 students and are capped at 10 students. In-person instruction ensures high teaching quality.`,
            `Depending on class progress and student circumstances, mid-course enrollment may be accepted for certain sessions.`,
            `For online course options, please consult with a course advisor for more details.`
        ],
        image: AP_PHYSICS,
        instructor: 'Alex Chen',
        targetAudience: 'Grade 9 -12, No Basic Requirements',
        instructor_image: AVATAR4
    },

]


const data = {
    COURSES
}

export default data