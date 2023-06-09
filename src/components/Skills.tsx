import styles from '../styles/Skills.module.scss'
import globals from '../styles/globals.module.scss'
import BallCanvas from './canvas/Ball'
import { SectionWrapper } from './hoc'
import javascript from '../assets/skills/javascript.png'
import python from '../assets/skills/python.png'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import typescript from '../assets/skills/typescript.png'
import reactjs from '../assets/skills/reactjs.png'
import svelte from '../assets/skills/svelte.png'
import optimizely from '../assets/skills/optimizely.svg'
import figma from '../assets/skills/figma.png'
import photoshop from '../assets/skills/photoshop.png'
import blender from '../assets/skills/blender.png'
import kermit from '../assets/skills/kermit.png'
import { useState, useEffect }  from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      title: 'Javascript',
      img: javascript,
      level: 'advanced',
      desc: 'Javascript is the most proficient language that I know. I learned javascript around the end of highschool when I started to learn how to make websites!',
    },
    {
      title: 'Python',
      img: python,
      level: 'intermediate',
      desc: 'Python is the second language I picked up. I like python for its simplicity and readiablity. Python is my goto for non web applications.'
    },
    {
      title: 'HTML',
      img: html,
      level: 'advanced',
      desc: 'Along with Javascript and CSS, I picked up HTML when I started making websites in highschool.',
    },
    {
      title: 'CSS',
      img: css,
      level: 'advanced',
      desc: 'Along with Javascript and HTML, I picked up CSS when I started making websites in highschool.',
    },
    {
      title: 'Typescript',
      img: typescript,
      level: 'intermediate',
      desc: 'Adding Typescript to my work has improved my code styling and best practices. Helps me understand my code and the safety measures are a good plus!'
    },
    {
      title: 'React JS',
      img: reactjs,
      level: 'intermediate',
      desc: 'This front-end framework is the I always come back to. The documentation is superb and is my go-to framework!'
    },
    {
      title: 'Svelte / SvelteKit',
      img: svelte,
      level: 'intermediate',
      desc: 'A front-end framework that focus on simplicity kind of like Python! I love how simple and lightweight it is. The plan is to utilize more Svelte/SvelteKit in future projects.'
    },
    {
      title: 'Optimizely',
      img: optimizely,
      level: 'intermediate',
      desc: 'My go to  A/B testing platform and CMS platform!'
    },
    {
      title: 'Photoshop',
      img: photoshop,
      level: 'advanced',
      desc: 'The jack of all trades for editing my assets! I usually edit assets here, and draw art in Clip Studio Paint.'
    },
    {
      title: 'Figma',
      img: figma,
      level: 'intermediate',
      desc: `My go to design software. I know how to use Figma well, but that doesn't mean my designs are good. 😔`
    },
    {
      title: 'Blender',
      img: blender,
      level: 'casual',
      desc: `My go to 3d modeling software. Just started exploring the 3D and the potential is there!`
    },
    {
      title: 'Kermit',
      img: kermit,
      level: 'casual',
      desc: `I can do voice impressions of kermit. It's up to you to judge if it's good enough. 😂`
    },
  ]
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ animateIndex, setAnimateIndex ] = useState(0);
  const [ hideBox, setHideBox] = useState(false);

  useEffect(() => {
    setHideBox(true);
    setTimeout(() => {
      setAnimateIndex(activeIndex)
      setHideBox(false)
    }, 500)
  },[activeIndex])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5
      }}
    >
      <div className={`${globals.eyebrow}`}>// Skills</div>
      <h2 className={globals.sectionTitle}>What can I do?</h2>
      <div className={styles.skills__container}>
      <div className={`${styles.skills__list} ${styles.skills__list_desktop}`}>
        <BallCanvas activeIndex={activeIndex} setActiveIndex={setActiveIndex} device={'desktop'}/>
      </div>
      <div className={`${styles.skills__list} ${styles.skills__list_mobile}`}>
        <BallCanvas activeIndex={activeIndex} setActiveIndex={setActiveIndex} device={'mobile'}/>
      </div>
      
      <div className={styles.skills__info_container}>
        <AnimatePresence>
          {!hideBox ? <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className={styles.skills__info}>
            <div className={styles.skills__info_left}>
              <div className={styles.skills__img_wrapper}><img src={skills[animateIndex].img} alt="" /></div>
            </div>
            <div className={styles.skills__info_right}>
              <h3>{skills[animateIndex].title}</h3>
              <div>{skills[animateIndex].desc}</div>
              <div className={styles.skills__level} data-level={skills[animateIndex].level}>{skills[animateIndex].level} level</div>
            </div>
          </motion.div> : ``}
        </AnimatePresence>
      </div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Skills, styles.skills, 'skills')