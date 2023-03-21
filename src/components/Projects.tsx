import styles from '../styles/Projects.module.scss'
import globals from '../styles/globals.module.scss'
import { SectionWrapper } from './hoc';
import CartsCanvas from './canvas/Carts';

const Projects = () => {
  const cards = [
    { title: 'Portfolio', 
      subtitle: 'React Landing Page',
      img: 'https://place-hold.it/480x480',
      alt: '',
      description: `You're looking at this project now! 3D & motion was the main focus of this project. I utilized Blender to create and modify 3d models, threejs to load them on the page, and react to build out the site. 90% of the models and art on this page was done by hand by yours truly.`,
      tags: ['threejs', 'react'],
      cart: './gameboy_cartridge_port.gltf'
    },
    { title: 'D&D Friend Bot ', 
      subtitle: 'Discord Bot',
      img: 'https://place-hold.it/480x480',
      alt: '',
      description: 'An all around custom general bot was created for a Dungeons and Dragons discord server. From features such as setting up timers, character management, lookup tools, and many more. Works with a database on to keep track of characters for players on the server.',
      tags: ['discord', 'python'],
      cart: './gameboy_cartridge_friend.gltf'
    },
    { title: 'Potion (Unfinished)', 
      subtitle: 'Svelte Web Application',
      img: 'https://place-hold.it/480x480',
      alt: '',
      description: 'A one stop hub primarly for streamers. The app helps streamers off/on stream by communicating with different APIs to keep track of socials. The apps also features OBS remote feature to control their streams. An implementation of user authentication (OAUTH2) and the use of a database stores users data so they can save their progress.',
      tags: ['svelte', 'supabase', 'oauth2'],
      cart: './gameboy_cartridge_potion.gltf'
    },
  ];

  return (
      <>
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
                  <button type="button" className={styles.card__button}>Learn more</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </>
  )
}

export default SectionWrapper(Projects, styles.projects, 'projects')