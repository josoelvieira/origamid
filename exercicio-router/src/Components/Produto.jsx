import React, { useState, useEffect } from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Produto = () => {
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData(url) {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setProduto(json);
            } catch (err) {
                setError("Um erro ocorreu");
            } finally {
                setLoading(false);
            }
        }
        fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    }, [id]);
    if (loading) return <div className="loading"></div>;
    if (error) return <h1>{error}</h1>;
    if (produto === null) return null;
    return (
        <section className={styles.produto + " animeLeft"}>
            <Helmet>
                <title>CVL Developer | {produto.nome}</title>
                <meta name="CVL Developer " description="CVL Developer" />
            </Helmet>
            {produto.fotos.map((foto) => (
                <img key={foto.src} src={foto.src} alt={foto.nome} />
            ))}
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    );
};

export default Produto;
