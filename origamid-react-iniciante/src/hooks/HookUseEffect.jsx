import React, { useEffect } from "react";
import { useState } from "react";
import Produto from "./Produto";

const HookUseEffect = () => {
    const [contar, setContar] = useState(0);
    const [dados, setDados] = useState(null);
    const [ativo, setAtivo] = useState(false);
    useEffect(() => {
        console.log("Executou");
    }, []);
    useEffect(() => {
        document.title = "Total " + contar;
    }, [contar]);

    //Fetch
    useEffect(() => {
        fetch("https:ranekapi.origamid.dev/json/api/produto/notebook")
            .then((response) => response.json())
            .then((json) => setDados(json));
    }, []);

    function handleContar() {
        setContar(contar + 1);
    }

    return (
        <div>
            <h1>useEffect</h1>
            {dados && (
                <div>
                    <h1>{dados.nome}</h1>
                    <p>R$ {dados.preco}</p>
                </div>
            )}

            <button onClick={handleContar}>{contar}</button>

            <div style={{margin:'10px'}}>
                {ativo && <Produto/>}
                <button onClick={() => setAtivo(!ativo)}>Ativo</button>
            </div>
        </div>
    );
};

export default HookUseEffect;
