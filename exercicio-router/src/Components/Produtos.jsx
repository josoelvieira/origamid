import React from "react";
import Styles from "./Produtos.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Produtos = () => {
    const [produtos, setProdutos] = useState(null);

    useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((r) => r.json())
            .then((json) => setProdutos(json));
    }, []);
    console.log(produtos);
    if (produtos === null) return null;

    return (
        <section className="animeLeft" styles={{display:"grid",
        gridTemplateColun:"1fr 1fr 1fr"}}>
            <h2>Produtos</h2>
            <Helmet>
                <title>Loja CVL Developer | Produtos </title>
            </Helmet>
            {produtos.map((produto) => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img
                        src={produto.fotos[0].src}
                        alt={produto.fotos[0].titulo}
                    />
                    <h3 className={Styles.nome}>{produto.nome}</h3>
                </Link>
            ))}
        </section>
    );
};

export default Produtos;
