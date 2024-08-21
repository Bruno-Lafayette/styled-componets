import React from 'react';
import Title from './components/Title-primary';
import Description from './components/Description';
import Products from './components/Products';
import products from './productData';

function App() {
  return (
    <div>
      <Title>Tela de Produtos</Title>
      <Description>Confira nossa seleção de produtos incríveis abaixo.</Description>
      <Products products={products} />
    </div>
  );
}

export default App;
