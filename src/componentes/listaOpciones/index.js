import styles from "./listaOpciones.module.css"

const ListaOpciones = (props) => {

    // const categorias = [
    //     "BACK END",
    //     "FRONT END",
    //     "INNOVACION Y GESTION"
    // ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarCategorias(e.target.value)
    }

    return <div className={styles.listaOpciones}>
            <label>Categoria</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden >Seleccione una categoria</option>
            { props.categorias.map ((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}            
            </select>
    </div>
}

export default ListaOpciones