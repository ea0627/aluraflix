import logo from "./LogoMain.png"
import styles from "./footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logoFooter}>
                <img src={logo} alt="Logo AluraPlay"/>
            </section>
        </footer>
    )
}

export default Footer