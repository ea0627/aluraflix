import Categoria from "../../componentes/categoria"

//Lista Categorias
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

function Inicio() {
    return (
        <>
            {
                categorias.map((categoria) => {
                    return <Categoria datos={categoria} key={categoria.titulo} />
                })
            }
        </>
    )
}

export default Inicio