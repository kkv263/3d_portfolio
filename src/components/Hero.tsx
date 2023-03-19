import ComputersCanvas from './canvas/Computers';
import styles from '../styles/Hero.module.scss'
import globals from '../styles/globals.module.scss'
import vidURL from '../assets/herovideo.mp4';
import { SectionWrapper } from './hoc';

const Hero = () => {
  return (
    <>
      <div className={styles.hero__content}>
        <div className={styles.eyebrow}>Developer</div>
        <h1>
          <span>Kevin</span> 
          <span>Vu</span> 
        </h1>
        <div>(and an artist somewhat.)</div>
      </div>
      <div className={styles.hero__canvas}>
        {/* <ComputersCanvas /> */}
        <div className={styles.video__wrapper}>
          <video autoPlay muted loop src={vidURL}></video>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Hero, styles.hero, 'hero', styles.hero__container)
