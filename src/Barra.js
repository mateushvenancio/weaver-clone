import { useContext } from "react";
import { PalavrasContext } from "./App";
import { getRandomGame } from "./services/get_games";
import "./App.css";
import { salvarJogo, salvarTentativas } from "./services/local_storage_service";

export default function Barra() {
    const { setEnd, setTentativas, setIniciais } = useContext(PalavrasContext);

    function handleRepeat() {
        const iniciais = getRandomGame();

        salvarJogo(iniciais);
        salvarTentativas([]);

        setEnd(false);
        setTentativas([]);
        setIniciais(iniciais);
    }

    return (
        <div className="Barra">
            <h3>WEAVER</h3>
            <div className="BotaoBarra" onClick={handleRepeat}>
                ↺
            </div>
        </div>
    );
}
