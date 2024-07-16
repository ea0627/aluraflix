import styles from "./textArea.module.css"

const CajaTexto = () => {

    return <div className={styles.cajaTexto}>
            <label>Descripcion</label>
            <textarea className={styles.areaTexto} placeholder="¿de que se trata este video?"></textarea>
  
    </div>
}

export default CajaTexto