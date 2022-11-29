import React from 'react';

interface Props {
  name: string;
  price: number;
  img: string;
}

const ProductCard: React.FC<Props> = ({name, price, img}) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top h-75" alt="#"/>
            <div className="card-body mt-auto">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">От {price} сом</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;