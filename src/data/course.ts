

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
    image: StaticImageData,
    instructor: string,
    instructor_image: StaticImageData
}

const COURSES: course[]  = [
    {
        slug: 'ap-econ',
        name: 'AP Economics',
        type: 'AP Course',
        description:'AP courses/ 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        image: AP_ECON,
        instructor: 'Alex Chen',
        instructor_image: AVATAR
    },
    {
        slug: 'ap-calculus',
        name: 'AP Calculus',
        type: 'AP Course',
        description:'AP courses/ 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        image: AP_CALCULUS,
        instructor: 'Alex Chen',
        instructor_image: AVATAR2
    },
    {
        slug: 'ap-chemistry',
        name: 'AP Chemistry',
        type: 'AP Course',
        description:'AP courses/ 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        image: AP_CHEMISTRY,
        instructor: 'Alex Chen',
        instructor_image: AVATAR3
    },
    {
        slug: 'ap-physics',
        name: 'AP Physics',
        type: 'AP Course',
        description:'AP courses/ 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心',
        image: AP_PHYSICS,
        instructor: 'Alex Chen',
        instructor_image: AVATAR4
    },

]


const data = {
    COURSES
}

export default data