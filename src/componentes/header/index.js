import { Link } from "react-router-dom"
import styles from "./header.module.css"
import logo from "./LogoMain.png"
import vector from "./vector-default.png"
import home from "./home-default.png"
import HeaderLink from "../headerLink/headerLink"


function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraPlay"/>
                </section>
            </Link>
            <nav className={styles.botones}>
                <HeaderLink url="./">
                    <img className={styles.imgbtn} src={home}></img><p className="homeTexto">HOME</p>
                </HeaderLink>
                <HeaderLink url="../pages/nuevo">
                    <img className={styles.imgbtn} src={vector}></img><p className="nuevoTexto">NUEVO VIDEO</p>
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;