import React from 'react';

interface Props {
  fact: string;
}

const FactCart: React.FC<Props> = ({fact}) => {
  return (
    <div className="card col-6 mb-2 p-2">
      {fact}
    </div>
  );
};

export default FactCart;