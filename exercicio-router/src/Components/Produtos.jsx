import React from "react";
import styles from "./Produtos.module.css";
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
    if (produtos === null) return null;

    return (
        <section className={styles.produtos + " animeLeft"}>
            <Helmet>
                <title>Loja CVL Developer | Produtos </title>
                <meta name="Loja CVL Developer " description="Loja CVL Developer" />
            </Helmet>
            {produtos.map((produto) => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img
                        src={produto.fotos[0].src}
                        alt={produto.fotos[0].titulo}
                    />
                    <h2 className={styles.nome}>{produto.nome}</h2>
                </Link>
            ))}
        </section>
    );
};

export default Produtos;
