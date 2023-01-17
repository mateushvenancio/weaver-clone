import { useContext } from "react";
import { PalavrasContext } from "./App";
import "./App.css";
import { salvarTentativas } from "./services/local_storage_service";

export default function Alert() {
    const { end, alert, setTentativas, setEnd } = useContext(PalavrasContext);

    function handleClick() {
        if (!end) return;

        setTentativas([]);
        setEnd(false);
        salvarTentativas([]);
    }

    return (
        <div className={end ? "Negrito" : "Alert"} onClick={handleClick}>
            {end ? "Tentar novamente ↺" : alert}
        </div>
    );
}
