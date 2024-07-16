import { useState } from "react"
import Boton from "../boton"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../listaOpciones"
import CajaTexto from "../textArea"
import styles from "./formulario.module.css"

const Formulario = (props) => {

    const [titulo, actualizarTitulo] = useState("")
    const [categorias, actualizarCategorias] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescricion] = useState("")
    
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,
            imagen,
            video,
            categorias,
            descripcion
        }
        props.registrarVideo(datosAEnviar)
    }

    return <section className={styles.formulario}>
            <form onSubmit={manejarEnvio}>
                <h1>NUEVO VIDEO</h1>
                <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
                <h2>Crear Tarjeta</h2>
                <div>
                    <div className={styles.row}>
                    <CampoTexto titulo="Titulo"
                        placeholder="Ingrese el titulo"
                        required
                        valor={titulo}
                        actualizarValor={actualizarTitulo} />
                    <ListaOpciones
                        valor={categorias}
                        actualizarCategorias={actualizarCategorias}
                        categorias={props.categorias}
                    />
                    </div>
                    <div className={styles.row}>
                    <CampoTexto titulo="Imagen"
                        placeholder="Ingrese el enlace de la imagen"
                        required
                        valor={imagen}
                        actualizarValor={actualizarImagen} />
                    <CampoTexto titulo="Video"
                        placeholder="Ingrese el enlace del video"
                        required
                        valor={video}
                        actualizarValor={actualizarVideo} />
                    </div>
                    <div className={styles.rowCajaTexto}>
                    <CajaTexto titulo="Descripcion"
                        placeholder="¿De que se trata el video?"
                        required
                        valor={descripcion}
                        actualizarValor={actualizarDescricion}
                    />
                    </div>
                </div>
                <Boton />
            </form>
        </section>

}

export default Formulario