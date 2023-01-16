import { useContext } from "react";
import { PalavrasContext } from "./App";
import "./App.css";

function Painel() {
    const { tentativas, iniciais } = useContext(PalavrasContext);

    return (
        <div className="Coluna">
            <Iniciais palavra={iniciais.inicial} />
            {tentativas.map((value, index) => (
                <Tentativa palavra={value} index={index} />
            ))}
            <Atual />
            <Iniciais palavra={iniciais.final} />
        </div>
    );
}

function Tentativa({ palavra, index }) {
    const { tentativas, iniciais } = useContext(PalavrasContext);

    function getClasses(letraIndex) {
        const classes = ["Letra", "LetraAtual"];

        const ultima = tentativas[index - 1] || iniciais.inicial;

        if (ultima[letraIndex] !== palavra[letraIndex]) {
            classes.push("LetraAlterada");
        }

        if (
            palavra[letraIndex].toUpperCase() ===
            iniciais.final[letraIndex].toUpperCase()
        ) {
            classes.push("LetraVerde");
        }

        return classes.join(" ");
    }

    return (
        <div className="Linha Gap">
            <div className={getClasses(0)}>{palavra[0].toUpperCase()}</div>
            <div className={getClasses(1)}>{palavra[1].toUpperCase()}</div>
            <div className={getClasses(2)}>{palavra[2].toUpperCase()}</div>
            <div className={getClasses(3)}>{palavra[3].toUpperCase()}</div>
        </div>
    );
}

function Atual() {
    const { atual } = useContext(PalavrasContext);
    const word = atual.toUpperCase();

    const getClasses = (index) => {
        if (index === atual.length) {
            return "Letra LetraAlterada";
        }
        return "Letra LetraAtual";
    };

    return (
        <div className="Linha Gap">
            <div className={getClasses(0)}>{word[0] || ""}</div>
            <div className={getClasses(1)}>{word[1] || ""}</div>
            <div className={getClasses(2)}>{word[2] || ""}</div>
            <div className={getClasses(3)}>{word[3] || ""}</div>
        </div>
    );
}

function Iniciais({ palavra }) {
    return (
        <div className="Linha Gap">
            <div className="Letra LetraInicial">{palavra[0].toUpperCase()}</div>
            <div className="Letra LetraInicial">{palavra[1].toUpperCase()}</div>
            <div className="Letra LetraInicial">{palavra[2].toUpperCase()}</div>
            <div className="Letra LetraInicial">{palavra[3].toUpperCase()}</div>
        </div>
    );
}

export default Painel;
