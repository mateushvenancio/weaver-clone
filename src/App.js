import { createContext, useEffect, useState } from "react";
import "./App.css";
import Painel from "./Painel";
import getPalavras from "./services/get_palavras";
import Teclado from "./Teclado";

export const PalavrasContext = createContext([]);

function App() {
    const [tentativas, setTentativas] = useState([]);
    const [atual, setAtual] = useState("");
    const [iniciais, setIniciais] = useState({
        inicial: "AULO",
        final: "MURO",
    });
    const [banco, setBanco] = useState([]);

    useEffect(() => {
        const palavras = getPalavras();
        setBanco(palavras);
    }, []);

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
                    banco,
                    setBanco,
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
