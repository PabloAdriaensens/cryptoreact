import React, {Component} from 'react';
import Header from "./componentes/Header";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header
                    titulo = "Cotiza Criptomonedas al Instante"
                />
            </div>
        );
    }
}

export default App;
