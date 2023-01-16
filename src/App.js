import { createContext, useState } from "react";
import "./App.css";
import Painel from "./Painel";
import Teclado from "./Teclado";

export const PalavrasContext = createContext([]);

function App() {
    const [tentativas, setTentativas] = useState([]);
    const [atual, setAtual] = useState("");

    return (
        <div className="App">
            <h3>Mateus</h3> <hr />
            <PalavrasContext.Provider
                value={{ tentativas, setTentativas, atual, setAtual }}
            >
                <div className="Coluna ColunaCenter">
                    <Painel />
                    <Teclado />
                </div>
            </PalavrasContext.Provider>
        </div>
    );
}

export default App;
