import React, {Component} from 'react';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header
                    titulo="Cotiza Criptomonedas al Instante"
                />
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light pb-4 contenido-principal">
                        <Formulario/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
