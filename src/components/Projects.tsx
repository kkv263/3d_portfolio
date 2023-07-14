import styles from '../styles/Projects.module.scss'
import globals from '../styles/globals.module.scss'
import { SectionWrapper } from './hoc';
import CartsCanvas from './canvas/Carts';
import { motion } from 'framer-motion';
import { ReactComponent as Github } from '../assets/github-mark-white.svg'
import { ReactComponent as Discord } from '../assets/discord-mark-white.svg'
import { useRef, useState, useLayoutEffect } from 'react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    function updateSize() {
      handleClick("", activeIndex)
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleClick = (direction:string = "", cardIndex:number = -1) => {
    const scrollPos = [0, 300 , 600, 900, 1200];
    let index = cardIndex;

    if (direction === 'right') {
      index = (activeIndex >= cards.length - 1 ? 0 : activeIndex + 1);
    }
    else if (direction === 'left') {
      index = (activeIndex <= 0 ? cards.length - 1 : activeIndex - 1);
    }

    if (carouselRef.current) {
      carouselRef.current.scroll({top: 0, left:scrollPos[index], behavior:'smooth'});
      setActiveIndex(index);
    }
  };


  const cards = [
    { title: 'LingoAI', 
      subtitle: 'OpenAI Chatbot',
      link: 'https://blog.keveloper.dev/blog/case-study-lingo/',
      description: `An OpenAI chatbot with the purpose to help you learn languages. Speak with different personalities and learn the language! Provides translation, vocabulary lookup, and audio playback on demand to help you be immersed and learn at your own pace. Japanese is the only currently supported language. The landing page was also created by yours truly!`,
      tags: ['openai', 'langchain', 'sveltekit'],
      cart: './gameboy_cartridge_lingo.gltf',
      disabled: false,
      github: 'https://github.com/kkv263/bot',
      discord: '',
      new: true,
      landing: 'https://lingoai.vercel.app/',
    },
    { title: 'Portfolio', 
      subtitle: 'React Landing Page',
      link: 'https://blog.keveloper.dev/blog/case-study-portfolio/',
      description: `You're looking at this project now! 3D & motion was the main focus of this project. I utilized Blender to create and modify 3d models, threejs to load them on the page, and react to build out the site. 90% of the models and art on this page was done by hand by yours truly.`,
      tags: ['threejs', 'react'],
      cart: './gameboy_cartridge_port.gltf',
      disabled: false,
      github: 'https://github.com/kkv263/3d_portfolio',
      discord: '',
      new: false,
      landing: '',
    },
    { title: 'D&D Friend Bot ', 
      subtitle: 'Discord Bot',
      link: 'https://blog.keveloper.dev/blog/case-study-friendbot/',
      description: 'An all around custom general bot was created for a Dungeons and Dragons discord server. From features such as setting up timers, character management, lookup tools, and many more. Works with a database on to keep track of characters for players on the server. Take a look and try it for yourself using the discord link below! I also worked on the landing page for the server with some neat spline3D. Check it out live!',
      tags: ['discord', 'python', 'spline3d'],
      cart: './gameboy_cartridge_friend.gltf',
      disabled: false,
      github: 'https://github.com/kkv263/friendbot',
      discord: 'https://discord.gg/dndfriends',
      new: false,
      landing: 'https://dnd-landing.vercel.app/',
    },
    { title: "Myco's Market (demo soon!)", 
      subtitle: 'Ecommerce Store with DatoCMS',
      link: 'https://blog.keveloper.dev/blog/case-study-mycos/',
      description: 'An ecommerce store that sells mushrooms that is focused on flexibility for the client. Paired with DatoCMS (a headless CMS) and snipcart (a payment framework). Site was designed to create a welcoming and laidback feeling.',
      tags: ['nextjs', 'datocms', 'snipcart'],
      cart: './gameboy_cartridge_mushroom.gltf',
      disabled: false,
      github: 'https://github.com/kkv263/next.js-ecommerce-snipcart',
      discord: '',
      new: false,
      landing: '',
    },
    { title: 'Potion (demo soon!)', 
      subtitle: 'Svelte Web Application',
      link: '/case-study-potion',
      description: 'A one stop hub primarly for streamers. The app helps streamers off/on stream by communicating with different APIs to keep track of socials. The apps also features OBS remote feature to control their streams. An implementation of user authentication (OAUTH2) and the use of a database stores users data so they can save their progress.',
      tags: ['svelte', 'supabase', 'oauth2'],
      cart: './gameboy_cartridge_potion.gltf',
      disabled: true,
      github: 'https://github.com/streamingpotion/stream-app',
      discord: '',
      new: false,
      landing: '',
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
        <div className={styles.card__carousel}>
          <ul className={styles.cards__list} ref={carouselRef}>
            {cards.map((card,index) => (
              <li key={index} className={`${styles.projects__container} ${cards[index].new ? styles.projects__container_new : ''}`} data-active={activeIndex === index} onClick={()=> {handleClick('', index)}}>
                <div className={styles.cart__container}><CartsCanvas activeIndex={index === activeIndex} cart={card.cart}/> </div>
              </li>
            ))}
          </ul>
          <div className={styles.carousel_button_wrapper}>

            <div>{activeIndex + 1} of {cards.length}</div>
            <div>
              <button className={styles.carousel_button} onClick={() => handleClick('left')}>&larr;</button>
              <button className={styles.carousel_button} onClick={() => handleClick('right')}>&rarr;</button>
            </div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.cards__card}>
              <header>
                <h2 className={styles.cards__title}>{cards[activeIndex].title}
                  {cards[activeIndex].landing ? <a target="_blank" rel="noopener noreferrer" className={styles.cards__landing} href={cards[activeIndex].landing}>See it Live &rarr;</a> : ''}
                </h2>
                <h4 className={styles.cards__subtitle}>{cards[activeIndex].subtitle}</h4>
              </header>
              <ul className={styles.cards__tags}>
                {cards[activeIndex].tags.map((tag, index) => ( <li key={index} className={styles.cards__tag} >{tag}</li>))}
              </ul>
              <div className={styles.card__description}>{cards[activeIndex].description}</div>
              <div className={styles.card__btn_wrapper}>
                <button type="button" disabled={cards[activeIndex].disabled} className={styles.card__button}>{cards[activeIndex].disabled ? 'Case Study TBD': <a href={cards[activeIndex].link} target="_blank" rel="noopener noreferrer">View Case Study</a>}</button>
                <a className={styles.git__btn} target="_blank" rel="noopener noreferrer" href={cards[activeIndex].github}><Github /></a>
                {cards[activeIndex].discord ? <a className={styles.git__btn} target="_blank" rel="noopener noreferrer" href={cards[activeIndex].discord}><Discord /></a> : ''}
              </div>
            </div>
          </div>
        </div>

    </motion.div>
  )
}

export default SectionWrapper(Projects, styles.projects, 'projects')