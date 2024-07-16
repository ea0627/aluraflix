import styles from "./categoria.module.css"
import Cards from "../cards"

const Categoria = (props) => {

    const {colorPrimario, titulo}=props.datos

    const obj = {
        backgroundColor: props.datos.colorPrimario
    }

    const estiloCards = { borderColor: colorPrimario}

    return <section className={styles.categoria}>
        <h3 style={obj}> {titulo}</h3>
        <div className={styles.videos}>
            <Cards style={estiloCards} />
        </div>
    </section>
}

export default Categoria