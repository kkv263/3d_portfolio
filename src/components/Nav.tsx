import styles from '../styles/Nav.module.scss'
import globals from '../styles/globals.module.scss'
import logoURL from '../assets/logo.png';


const Nav = () => {
  return (
    <nav className={styles.nav}>
      <section className={globals.container}>
        <a className={styles.nav__logo} href="/"><img src={logoURL} alt="logo" /></a>
        <ul className={styles.nav__list}>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#end">contact</a></li>
        </ul>
      </section>
    </nav>
  )
}

export default Nav