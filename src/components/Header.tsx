import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header(){ //componentes com a primeira letra maiuscula
  return(
    <header className={styles.header}>
      <img src={igniteLogo} alt="ignite logotipo"/>
    </header>
  )
}