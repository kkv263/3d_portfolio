import styles from '../styles/Projects.module.scss'
import globals from '../styles/globals.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SectionWrapper } from './hoc';
import { ReactComponent as CaretDown } from '../assets/caret-down.svg'

const Projects = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { title: 'Portfolio', 
      subtitle: 'React Landing Page',
      img: 'https://place-hold.it/480x480',
      alt: '',
      description: '',
      tags: ['threejs', 'react']
    },
    { title: 'D&D Friend Bot ', 
      subtitle: 'Discord Bot',
      img: 'https://place-hold.it/480x480',
      alt: '',
      description: '',
      tags: ['discord', 'python']
    },
    { title: 'Potion (Unfinished)', 
      subtitle: 'Svelte Web Application',
      img: 'https://place-hold.it/480x480',
      alt: '',
      description: '',
      tags: ['svelte']
    },
  ];

  return (
      <>
        <h2 className={globals.sectionTitle}>PROJECTS</h2>
        <ul className={styles.cards__list}>
          {cards.map((card,index) => (
            <li key={index}>
              <motion.div onClick={() => {setOpen(!isOpen); setActiveIndex(index);}} className={styles.cards__card}
                transition={{ layout: { duration: 1, type: "spring"} }}
                layout
              >
                <header>
                  <h2 className={styles.cards__title}>{card.title}</h2>
                  <h4 className={styles.cards__subtitle}>{card.subtitle}</h4>
                </header>
                <div className={styles.cards__imgWrapper}>
                  <img src={card.img} alt={card.alt} />
                  <ul className={styles.cards__tags}>
                  {card.tags.map((tag, index) => ( <li key={index} className={styles.cards__tag} >{tag}</li>))}
                  </ul>
                </div>
                <div>
                  <div>{card.description}</div>
                  <button type="button" className={styles.card__button}><CaretDown/></button>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {isOpen && 
            <motion.div className={styles.modal}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <div onClick={() => setOpen(false)} className={styles.modal__overlay}></div>
              <div className={styles.modal__content}>
                <div>{cards[activeIndex].title}</div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
    </>
  )
}

export default SectionWrapper(Projects, styles.projects, 'projects')