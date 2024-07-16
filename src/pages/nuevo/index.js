import { useState } from "react"
import Formulario from "../../componentes/formulario"
// import styles from "./nuevo.module.css"

const categorias = [
    {
        titulo: "BACK END",
        colorPrimario: "#00C86F"
    },
    {
        titulo: "FRONT END",
        colorPrimario: "#6BD1FF"
    },
    {
        titulo: "INNOVACION Y GESTION",
        colorPrimario: "#FFBA05"
    },
    
]

function Nuevo() {

    const [videos, actualizarVideo] = useState([])

    const registrarVideo = (video) => {
        console.log("Nuevo Video: ", video)
        {
            videos.map((video) => {
                actualizarVideo([...videos, video])
            })
        }
    }


    return (
        <>  
            <Formulario
                categorias={categorias.map((categoria) => <video
                    datos={categoria}
                    key={categoria.titulo}
                    video={videos}    
                />
                    
                )
                }
                    
                registrarVideo = {registrarVideo}
            />
                    
        </>
    )
}

export default Nuevo