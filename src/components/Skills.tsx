import styles from '../styles/Skills.module.scss'
import globals from '../styles/globals.module.scss'
import BallCanvas from './canvas/Ball'
import { SectionWrapper } from './hoc'
import javascript from '../assets/skills/javascript.png'
import python from '../assets/skills/python.png'
import css from '../assets/skills/css.png'
import html from '../assets/skills/html.png'
import typescript from '../assets/skills/typescript.png'
import reactjs from '../assets/skills/reactjs.png'
import svelte from '../assets/skills/svelte.png'
import figma from '../assets/skills/figma.png'
import sass from '../assets/skills/sass.png'
import photoshop from '../assets/skills/photoshop.png'
import blender from '../assets/skills/blender.png'
import kermit from '../assets/skills/kermit.png'
import soyjaks from '../assets/soyjaks.png';
import { useState}  from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'Javascript',
      img: javascript,
      level: 'advanced',
      desc: 'programming language',
    },
    {
      title: 'Python',
      img: python,
      level: 'intermediate',
      desc: 'programming language'
    },
    {
      title: 'CSS',
      img: css,
      level: 'advanced',
      desc: 'programming language'
    },
    {
      title: 'HTML',
      img: html,
      level: 'advanced',
      desc: 'markup language',
    },
    {
      title: 'Typescript',
      img: typescript,
      level: 'intermediate',
      desc: 'syntactical superset of JavaScript'
    },
    {
      title: 'React JS',
      img: reactjs,
      level: 'intermediate',
      desc: 'front-end framework'
    },
    {
      title: 'Svelte',
      img: svelte,
      level: 'intermediate',
      desc: 'front-end framework'
    },
    {
      title: 'Photoshop',
      img: photoshop,
      level: 'intermediate',
      desc: 'graphics editor'
    },
    {
      title: 'Figma',
      img: figma,
      level: 'advanced',
      desc: 'design software'
    },
    {
      title: 'Sass',
      img: sass,
      level: 'advanced',
      desc: 'scripting styling language'
    },
    {
      title: 'Blender',
      img: blender,
      level: 'casual',
      desc: '3d modeling software'
    },
    {
      title: 'Kermit',
      img: kermit,
      level: 'casual',
      desc: 'I can do voice impressions of kermit'
    },
  ]
  const [ activeIndex, setActiveIndex ] = useState(0);
  return (
    <>
      <ul className={styles.skills__list}>
      {skills.map((skill,index) => (
        <li key={index} onClick={() => {setActiveIndex(index)}}>
          <BallCanvas icon={skill.img} index={index} activeIndex={activeIndex}/>
        </li>
      ))}
      </ul>
      <div className={styles.skills__info}>
        <div className={styles.skills__info_left}>
          <div className={styles.skills__img_wrapper}><img src={skills[activeIndex].img} alt="" /></div>
        </div>
        <div className={styles.skills__info_right}>
          <h3>{skills[activeIndex].title}</h3>
          <div>{skills[activeIndex].desc}</div>
          <div className={styles.skills__level} data-level={skills[activeIndex].level}>{skills[activeIndex].level}</div>
        </div>

      </div>
      {/* <img className={styles.soyjaks__img} src={soyjaks} alt="" /> */}
    </>
  )
}

export default SectionWrapper(Skills, styles.skills, 'skills')