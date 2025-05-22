import { StaticImageData } from "next/image";
import AVATAR1 from '@/assets/avatar.png'
import AVATAR2 from '@/assets/avatar2.png'
import AVATAR3 from '@/assets/avatar3.png'
import AVATAR4 from '@/assets/avatar4.png'
import AVATAR5 from '@/assets/avatar5.png'

interface team_member {
    slug: string,
    name: string,
    note: string, 
    personal_detail: string,
    image: StaticImageData
}

const TEAM: team_member[]  = [
    {
      slug: 'alex-chen',
      name: 'Alex Chen',
      note:'Econ instructor',
      personal_detail:`
        Hi! I’m a dedicated tutor with a strong background in [subject(s), e.g., 
        Computer Science, Math, or English], and a passion for helping students 
        reach their full potential. With [X years] of experience supporting 
        learners from diverse backgrounds, I specialize in breaking down complex 
        topics into simple, relatable concepts.Whether you need help preparing for
        exams, improving your grades, or building confidence in a subject, I 
        tailor each lesson to your individual learning style and goals. 
        My approach combines clarity, encouragement, and real-world examples 
        to make learning both effective and enjoyable.Let’s work together to 
        turn your academic challenges into achievements!
    `,
      image: AVATAR1
    },
    {
        slug: 'miko-ela',
        name: 'Miko Ela',
        note:'AP Math instructor',
        personal_detail:`
          Hi! I’m a dedicated tutor with a strong background in [subject(s), e.g., 
          Computer Science, Math, or English], and a passion for helping students 
          reach their full potential. With [X years] of experience supporting 
          learners from diverse backgrounds, I specialize in breaking down complex 
          topics into simple, relatable concepts.Whether you need help preparing for
          exams, improving your grades, or building confidence in a subject, I 
          tailor each lesson to your individual learning style and goals. 
          My approach combines clarity, encouragement, and real-world examples 
          to make learning both effective and enjoyable.Let’s work together to 
          turn your academic challenges into achievements!
      `,
        image: AVATAR2
    },
    {
        slug: 'wiki-wola',
        name: 'Wiki Wola',
        note:'Econ instructor',
        personal_detail:`
          Hi! I’m a dedicated tutor with a strong background in [subject(s), e.g., 
          Computer Science, Math, or English], and a passion for helping students 
          reach their full potential. With [X years] of experience supporting 
          learners from diverse backgrounds, I specialize in breaking down complex 
          topics into simple, relatable concepts.Whether you need help preparing for
          exams, improving your grades, or building confidence in a subject, I 
          tailor each lesson to your individual learning style and goals. 
          My approach combines clarity, encouragement, and real-world examples 
          to make learning both effective and enjoyable.Let’s work together to 
          turn your academic challenges into achievements!
      `,
        image: AVATAR3
    },
    {
        slug: 'brian-wang',
        name: 'Brian Wang',
        note:'Biology instructor',
        personal_detail:`
          Hi! I’m a dedicated tutor with a strong background in [subject(s), e.g., 
          Computer Science, Math, or English], and a passion for helping students 
          reach their full potential. With [X years] of experience supporting 
          learners from diverse backgrounds, I specialize in breaking down complex 
          topics into simple, relatable concepts.Whether you need help preparing for
          exams, improving your grades, or building confidence in a subject, I 
          tailor each lesson to your individual learning style and goals. 
          My approach combines clarity, encouragement, and real-world examples 
          to make learning both effective and enjoyable.Let’s work together to 
          turn your academic challenges into achievements!
      `,
        image: AVATAR4
    },
    {
        slug: 'mitoka-kata',
        name: 'Mitoka Kata',
        note:'AP Chemistry instructor',
        personal_detail:`
          Hi! I’m a dedicated tutor with a strong background in [subject(s), e.g., 
          Computer Science, Math, or English], and a passion for helping students 
          reach their full potential. With [X years] of experience supporting 
          learners from diverse backgrounds, I specialize in breaking down complex 
          topics into simple, relatable concepts.Whether you need help preparing for
          exams, improving your grades, or building confidence in a subject, I 
          tailor each lesson to your individual learning style and goals. 
          My approach combines clarity, encouragement, and real-world examples 
          to make learning both effective and enjoyable.Let’s work together to 
          turn your academic challenges into achievements!
      `,
        image: AVATAR5
    },
    
]

const data ={
    TEAM
}

export default data;