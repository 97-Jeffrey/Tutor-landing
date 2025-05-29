import { StaticImageData } from "next/image";
import AVATAR1 from '@/assets/avatar.png'
import AVATAR2 from '@/assets/avatar2.png'
import AVATAR3 from '@/assets/avatar3.png'
import AVATAR4 from '@/assets/avatar4.png'
import AVATAR5 from '@/assets/avatar5.png'

interface team_member {
    slug: string,
    name: string,
    name_ch : string,
    note: string, 
    note_ch: string,
    personal_detail: string,
    personal_detail_ch: string,
    image: StaticImageData
}

const TEAM: team_member[]  = [
    {
      slug: 'alex-chen',
      name: 'Alex Chen',
      name_ch: '小城',
      note:'Econ instructor',
      note_ch: '经济讲师',
      personal_detail:`
        嗨！我是一位充满热情的辅导老师，拥有扎实的[科目，例如计算机科学、数学或英语]背景，致力于帮助学生发挥他们的最大潜力。
我拥有[X年]的教学经验，辅导过来自不同背景的学生，擅长将复杂的知识点拆解成简单易懂、贴近生活的概念。

无论你是需要备考、提升成绩，还是增强在某个科目的信心，我都会根据你的学习风格和目标，量身定制每一堂课。
我的教学方法融合了清晰的讲解、积极的鼓励以及实际的例子，让学习变得既高效又有趣。

让我们一起努力，把你的学习挑战转化为真正的成就吧！


    `,
      personal_detail_ch:"",
      image: AVATAR1
    },
    {
        slug: 'miko-ela',
        name: 'Miko Ela',
        name_ch:"米卡",
        note:'AP Math instructor',
        note_ch:"AP 数学讲师",
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
      personal_detail_ch:`嗨！我是一位充满热情的辅导老师，拥有扎实的[科目，例如计算机科学、数学或英语]背景，致力于帮助学生发挥他们的最大潜力。
        我拥有[X年]的教学经验，辅导过来自不同背景的学生，擅长将复杂的知识点拆解成简单易懂、贴近生活的概念。

        无论你是需要备考、提升成绩，还是增强在某个科目的信心，我都会根据你的学习风格和目标，量身定制每一堂课。
        我的教学方法融合了清晰的讲解、积极的鼓励以及实际的例子，让学习变得既高效又有趣。

        让我们一起努力，把你的学习挑战转化为真正的成就吧！

`,
        image: AVATAR2
    },
    {
        slug: 'wiki-wola',
        name: 'Wiki Wola',
        name_ch:'小微',
        note:'Econ instructor',
        note_ch:"经济讲师",
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
      personal_detail_ch:`
         嗨！我是一位充满热情的辅导老师，拥有扎实的[科目，例如计算机科学、数学或英语]背景，致力于帮助学生发挥他们的最大潜力。
        我拥有[X年]的教学经验，辅导过来自不同背景的学生，擅长将复杂的知识点拆解成简单易懂、贴近生活的概念。

        无论你是需要备考、提升成绩，还是增强在某个科目的信心，我都会根据你的学习风格和目标，量身定制每一堂课。
        我的教学方法融合了清晰的讲解、积极的鼓励以及实际的例子，让学习变得既高效又有趣。

        让我们一起努力，把你的学习挑战转化为真正的成就吧！
      `,
        image: AVATAR3
    },
    {
        slug: 'brian-wang',
        name: 'Brian Wang',
        name_ch:'小王',
        note:'Biology instructor',
        note_ch:"生物讲师",
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
      personal_detail_ch:`
        嗨！我是一位充满热情的辅导老师，拥有扎实的[科目，例如计算机科学、数学或英语]背景，致力于帮助学生发挥他们的最大潜力。
        我拥有[X年]的教学经验，辅导过来自不同背景的学生，擅长将复杂的知识点拆解成简单易懂、贴近生活的概念。

        无论你是需要备考、提升成绩，还是增强在某个科目的信心，我都会根据你的学习风格和目标，量身定制每一堂课。
        我的教学方法融合了清晰的讲解、积极的鼓励以及实际的例子，让学习变得既高效又有趣。

        让我们一起努力，把你的学习挑战转化为真正的成就吧！
      `,
        image: AVATAR4
    },
    {
        slug: 'mitoka-kata',
        name: 'Mitoka Kata',
        name_ch:'小卡',
        note:'AP Chemistry instructor',
        note_ch:"AP 化学讲师",
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
      personal_detail_ch:`
         嗨！我是一位充满热情的辅导老师，拥有扎实的[科目，例如计算机科学、数学或英语]背景，致力于帮助学生发挥他们的最大潜力。
        我拥有[X年]的教学经验，辅导过来自不同背景的学生，擅长将复杂的知识点拆解成简单易懂、贴近生活的概念。

        无论你是需要备考、提升成绩，还是增强在某个科目的信心，我都会根据你的学习风格和目标，量身定制每一堂课。
        我的教学方法融合了清晰的讲解、积极的鼓励以及实际的例子，让学习变得既高效又有趣。

        让我们一起努力，把你的学习挑战转化为真正的成就吧！
      `,
        image: AVATAR5
    },
    
]

const TEAM_CH: team_member[] =[]

const data ={
    TEAM
}

export default data;