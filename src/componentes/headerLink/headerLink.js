import { Link } from "react-router-dom"
import styles from "./headerLink.module.css"

function HeaderLink({url, children, img}) {
    return (
        <button to={url} className={styles.link}>
            {children} {img}
        </button>
    )
}

export default HeaderLink