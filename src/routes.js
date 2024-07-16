import Header from "./componentes/header"
import Footer from "./componentes/footer"
import Inicio from "./pages/inicio/index"
import Nuevo from "./pages/nuevo"
// import Container from "./componentes/container";
import Banner from "./componentes/banner";
// import Categoria from "./componentes/categoria";
    
const { BrowserRouter, Routes, Route } = require("react-router-dom");
// const { default: Inicio } = require("./pages/inicio");
// const { default: Nuevo } = require("./pages/nuevo");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Banner img="home" color="#154580" />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nuevo" element={<Nuevo />} /> 
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes