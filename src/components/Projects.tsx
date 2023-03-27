import styles from '../styles/Projects.module.scss'
import globals from '../styles/globals.module.scss'
import { SectionWrapper } from './hoc';
import CartsCanvas from './canvas/Carts';
import { motion } from 'framer-motion';
import { ReactComponent as Github } from '../assets/github-mark-white.svg'

const Projects = () => {
  const cards = [
    { title: 'Portfolio', 
      subtitle: 'React Landing Page',
      link: 'https://blog.keveloper.dev/blog/case-study-portfolio/',
      description: `You're looking at this project now! 3D & motion was the main focus of this project. I utilized Blender to create and modify 3d models, threejs to load them on the page, and react to build out the site. 90% of the models and art on this page was done by hand by yours truly.`,
      tags: ['threejs', 'react'],
      cart: './gameboy_cartridge_port.gltf',
      disabled: false,
      github: 'https://github.com/kkv263/3d_portfolio'

    },
    { title: 'D&D Friend Bot ', 
      subtitle: 'Discord Bot',
      link: '/case-study-friendbot',
      description: 'An all around custom general bot was created for a Dungeons and Dragons discord server. From features such as setting up timers, character management, lookup tools, and many more. Works with a database on to keep track of characters for players on the server.',
      tags: ['discord', 'python'],
      cart: './gameboy_cartridge_friend.gltf',
      disabled: true,
      github: 'https://github.com/kkv263/friendbot'
    },
    { title: 'Potion (Unfinished)', 
      subtitle: 'Svelte Web Application',
      link: '/case-study-potion',
      description: 'A one stop hub primarly for streamers. The app helps streamers off/on stream by communicating with different APIs to keep track of socials. The apps also features OBS remote feature to control their streams. An implementation of user authentication (OAUTH2) and the use of a database stores users data so they can save their progress.',
      tags: ['svelte', 'supabase', 'oauth2'],
      cart: './gameboy_cartridge_potion.gltf',
      disabled: true,
      github: 'https://github.com/streamingpotion/stream-app'
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5
        }}
      >
        <div className={`${globals.eyebrow}`}>// PROJECTS</div>
        <h2 className={globals.sectionTitle}>What projects have I worked on?</h2>
        <ul className={styles.cards__list}>
          {cards.map((card,index) => (
            <li key={index} className={styles.projects__container}>
              <div className={styles.cart__container}><CartsCanvas cart={card.cart}/> </div>
              <div className={styles.cards__card}>
                <header>
                  <h2 className={styles.cards__title}>{card.title}</h2>
                  <h4 className={styles.cards__subtitle}>{card.subtitle}</h4>
                </header>
                <ul className={styles.cards__tags}>
                {card.tags.map((tag, index) => ( <li key={index} className={styles.cards__tag} >{tag}</li>))}
                </ul>
                <div>
                  <div className={styles.card__description}>{card.description}</div>
                  <div className={styles.card__btn_wrapper}>
                    <button type="button" disabled={card.disabled} className={styles.card__button}>{card.disabled ? 'Case Study TBD': <a href={card.link} target="_blank" rel="noopener noreferrer">View Case Study</a>}</button>
                    <a className={styles.git__btn} target="_blank" rel="noopener noreferrer" href={card.github}><Github /></a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </motion.div>
  )
}

export default SectionWrapper(Projects, styles.projects, 'projects')