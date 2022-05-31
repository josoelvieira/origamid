import React from 'react';
import { GlobalContext } from './GlobalContext';

const Hookcontext = () => {
  const { dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <div>
      Produto:{' '}
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};


export default Hookcontext