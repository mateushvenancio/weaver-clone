import { createContext, useState } from "react";
import "./App.css";
import Painel from "./Painel";
import Teclado from "./Teclado";

export const PalavrasContext = createContext([]);

function App() {
    const [tentativas, setTentativas] = useState([]);
    const [atual, setAtual] = useState("");
    const [iniciais, setIniciais] = useState({
        inicial: "Abut",
        final: "Meet",
    });

    return (
        <div className="App">
            <h3>WEAVER</h3> <hr />
            <PalavrasContext.Provider
                value={{
                    tentativas,
                    setTentativas,
                    atual,
                    setAtual,
                    iniciais,
                    setIniciais,
                }}
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
