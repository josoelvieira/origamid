import React from "react";
import foto from "../img/contato.jpg";
import Styles from "./Contato.module.css";
import { Helmet } from 'react-helmet';

const Contato = () => {
    return (
      
        <setcion className={`${Styles.contato} animeLeft`}>
          <Helmet>
            <title>Loja CVL Developer | Contato</title>
            <meta name="Loja CVl Developer" descriptioon="Loja CVL Developer" />
        </Helmet>
            <img src={foto} alt="Maquina de escrever" />
            <div>
                <h1>Entre em contato</h1>
                <ul className={Styles.dados}>
                    <li>cvl.jv1@gmail.com</li>
                    <li>41-9999-9999</li>
                </ul>
            </div>
        </setcion>
    );
};

export default Contato;
