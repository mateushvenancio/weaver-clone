import { useContext, useEffect } from "react";
import { PalavrasContext } from "./App";
import "./App.css";
import { salvarTentativas } from "./services/local_storage_service";
import quantasAlts from "./services/quantas_alteracoes";

function Teclado() {
    const linhaCima = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const linhaMeio = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const linhaBaixo = ["Z", "X", "C", "V", "B", "N", "M"];

    const {
        atual,
        setAtual,
        tentativas,
        setTentativas,
        iniciais,
        banco,
        mostrarAlert,
        end,
        setEnd,
    } = useContext(PalavrasContext);

    function handleTecla(letra) {
        if (end) return;
        const letras = [...linhaCima, ...linhaMeio, ...linhaBaixo];
        if (!letras.includes(letra)) return;
        if (atual.length === 4) return;

        setAtual((value) => value + letra);
    }

    function handleDelete() {
        if (end) return;
        if (atual.length === 0) {
            if (tentativas.length === 0) return;

            const ultima = tentativas[tentativas.length - 1];
            setAtual(ultima);
            setTentativas((value) => value.slice(0, -1));

            console.log("Atual: ", atual);
            console.log("Tentativas: ", tentativas);
            console.log("Última: ", ultima);

            return;
        }

        setAtual((value) => value.substring(0, value.length - 1));
    }

    function handleEnter() {
        if (end) return;
        if (atual.length !== 4) {
            mostrarAlert("Palavra deve ter exatamente 4 letras");
            return;
        }

        const anterior =
            tentativas.length > 0 ? tentativas.slice(-1)[0] : iniciais.inicial;

        const alts = quantasAlts(anterior, atual);

        if (alts === 0) {
            mostrarAlert("Deve mudar pelo menos uma letra");
            return;
        }

        if (alts > 1) {
            mostrarAlert("Deve mudar apenas uma letra de cada vez");
            return;
        }

        if (!banco.includes(atual.toUpperCase())) {
            mostrarAlert("Essa palavra não existe");
            return;
        }

        salvarTentativas([...tentativas, atual]);
        setTentativas((value) => [...value, atual]);
        setAtual("");

        if (atual === iniciais.final) {
            setEnd(true);
        }
    }

    function handleTeclado(event) {
        if (event.key === "Enter") {
            handleEnter();
            return;
        }

        if (event.key === "Backspace") {
            handleDelete();
            return;
        }

        const letra = event.key.toUpperCase();

        const letras = [...linhaCima, ...linhaMeio, ...linhaBaixo];
        if (letras.includes(letra)) {
            handleTecla(letra);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleTeclado);
        return () => document.removeEventListener("keydown", handleTeclado);
    });

    return (
        <div className="Coluna ColunaCenter">
            <div className="Linha GapTecla">
                {linhaCima.map((value) => (
                    <div onClick={() => handleTecla(value)}>
                        <Tecla tecla={value} />
                    </div>
                ))}
            </div>
            <div className="Linha GapTecla">
                {linhaMeio.map((value) => (
                    <div onClick={() => handleTecla(value)}>
                        <Tecla tecla={value} />
                    </div>
                ))}
            </div>
            <div className="Linha GapTecla">
                <div onClick={handleEnter}>
                    <TeclaEnter />
                </div>
                {linhaBaixo.map((value) => (
                    <div onClick={() => handleTecla(value)}>
                        <Tecla tecla={value} />
                    </div>
                ))}
                <div onClick={handleDelete}>
                    <TeclaDelete />
                </div>
            </div>
        </div>
    );
}

function TeclaEnter() {
    return <div className="Tecla TeclaGrande">ENTER</div>;
}

function TeclaDelete() {
    return <div className="Tecla TeclaGrande">⌫</div>;
}

function Tecla({ tecla }) {
    return <div className="Tecla">{tecla}</div>;
}

export default Teclado;
