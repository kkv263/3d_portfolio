import styles from '../styles/Footer.module.scss'
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contact></Contact>
    </footer>
  )
}

export default Footer