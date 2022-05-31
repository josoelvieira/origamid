import React from "react";
import { Route, Routes, useParams, NavLink } from "react-router-dom";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoCuston from "./ProdutoCustom";

const Produto = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h2>Produtos:{params.id}</h2>
            <nav>
              <NavLink to="">Descricao</NavLink>
              <NavLink to="avaliacao">Avalicao</NavLink>
              <NavLink to="custumizado">Custom</NavLink>

              </nav>
            <Routes>
                <Route path="/" element={<ProdutoDescricao />} />
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                <Route path="custumizado" element={<ProdutoCuston />} />
            </Routes>
        </div>
    );
};

export default Produto;
