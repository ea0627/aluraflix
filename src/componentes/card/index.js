import styles from "./card.module.css"
import iconoEditar from "./iconoEditar.png"
import iconoBorrar from "./iconoBorrar.png"
import videos from "../../data/db.json"
import Inicio from "../../pages/inicio"



function Card({ id, foto, titulo, descripcion }) {
    return (
    <div className={styles.container}>
            <img src={foto} alt={titulo} className={styles.foto} />
            
            <div className={styles.deleteEdit}>
                <div>
                    <img src={iconoBorrar} alt="Borrar"/>
                    <p>BORRAR</p>
                </div>
                <div>
                    <img src={iconoEditar} alt="Editar"/>
                    <p>EDITAR</p>
                </div>
        
            </div>
        </div>
        )
}


export default Card