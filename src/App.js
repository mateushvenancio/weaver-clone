import { createContext, useEffect, useState } from "react";
import Alert from "./Alert";
import "./App.css";
import Barra from "./Barra";
import Painel from "./Painel";
import { getRandomGame } from "./services/get_games";
import getPalavras from "./services/get_palavras";
import {
    getJogoSalvo,
    getTentativasSalvas,
    salvarJogo,
} from "./services/local_storage_service";
import Teclado from "./Teclado";

export const PalavrasContext = createContext([]);

function App() {
    const [tentativas, setTentativas] = useState([]);
    const [atual, setAtual] = useState("");
    const [iniciais, setIniciais] = useState({
        inicial: "PEGA",
        final: "RATO",
    });
    const [banco, setBanco] = useState([]);
    const [alert, setAlert] = useState(" ");
    const [end, setEnd] = useState(false);

    function mostrarAlert(mensagem) {
        setAlert(mensagem);
        setTimeout(() => {
            setAlert(" ");
        }, "2000");
    }

    useEffect(() => {
        const jogoSalvo = getJogoSalvo();
        if (jogoSalvo) {
            setIniciais(jogoSalvo);
            const tentativasSalvas = getTentativasSalvas();
            setTentativas(tentativasSalvas || []);

            if (tentativasSalvas.length > 0) {
                const ultima = tentativasSalvas[tentativasSalvas.length - 1];
                if (ultima === jogoSalvo.final) {
                    setEnd(true);
                }
            }
        } else {
            const novoJogo = getRandomGame();
            salvarJogo(novoJogo);
            setIniciais(novoJogo);
        }

        const palavras = getPalavras();
        setBanco(palavras);
    }, []);

    return (
        <div className="App">
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
                    alert,
                    mostrarAlert,
                    end,
                    setEnd,
                }}
            >
                <Barra /> <hr />
                <div className="Coluna ColunaCenter">
                    <Painel />
                    <Alert />
                    <Teclado />
                </div>
            </PalavrasContext.Provider>
        </div>
    );
}

export default App;
