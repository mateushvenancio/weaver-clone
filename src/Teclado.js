import "./App.css";

function Teclado() {
    const linhaCima = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const linhaMeio = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const linhaBaixo = ["Z", "X", "C", "V", "B", "N", "M", "I", "O", "P"];

    return (
        <div className="Coluna ColunaCenter">
            <div className="Linha GapTecla">
                {linhaCima.map((value) => (
                    <Tecla tecla={value} />
                ))}
            </div>
            <div className="Linha GapTecla">
                {linhaMeio.map((value) => (
                    <Tecla tecla={value} />
                ))}
            </div>
            <div className="Linha GapTecla">
                {linhaBaixo.map((value) => (
                    <Tecla tecla={value} />
                ))}
            </div>
        </div>
    );
}

function Tecla({ tecla }) {
    return <div className="Tecla">{tecla}</div>;
}

export default Teclado;
