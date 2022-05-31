import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const HookCuston = () => {
    const [produto, setProduto] = useLocalStorage("produto", "");
    const { request, data, loading, erro } = useFetch();

    useEffect(() => {
        async function fetchData() {
            const {response, json}= request(
                "https://ranekapi.origamid.dev/json/api/produto"
            );
        }
        fetchData();
    }, [request]);

    function handleClick(e) {
        setProduto(e.target.innerText);
    }
    if (erro) return <p>Erro</p>;
    if (loading) return <p>Carregando...</p>;
    if (data)
        return (
            <div>
                <h1>Hook Custom</h1>
                <p>Produto preferido: {produto}</p>
                <button style={{ marginRight: "5px" }} onClick={handleClick}>
                    Smartphone
                </button>
                <button onClick={handleClick}>Notebook</button>
                <hr />
                <h1>Exercicio</h1>
                {data &&
                    data.map((produto) => (
                        <li key={produto.id}>
                            {produto.nome} - {produto.preco}
                        </li>
                    ))}
            </div>
        );
    else return null;
};

export default HookCuston;
