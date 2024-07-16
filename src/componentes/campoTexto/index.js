import { useState } from "react"
import styles from "./campoTexto.module.css"

const CampoTexto = (props) => {
    const [valor, actualizarValor] = useState("")
    // console.log("Datos: ", props)


    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }
    
    return <div className={styles.campoTexto}>
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}/>
    </div>
}

export default CampoTexto