import React from 'react';
import {Product} from "../../types";
import ProductCard from "../../components/ProductCard/ProductCard";

interface Props {
  products: Product [];
}

const Products: React.FC<Props> = ({products}) => {
  return (
    <div className="container py-3">
    <h3 className="text-center my-3">Наша продукция с ценами:</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((element) => (
          <ProductCard name={element.name} price={element.price} img={element.img} key={Math.random()}/>
        ))}
      </div>
    </div>
  );
};

export default Products;