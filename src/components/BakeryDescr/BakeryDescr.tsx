import React from 'react';

interface Props {
  img: string;
  description: string;
}

const BakeryDescr: React.FC<Props> = ({img, description}) => {
  return (
    <div>
      <div className="imgBox my-3">
        <img className="w-50 rounded mx-auto d-block" src={img} alt="#" />
      </div>
     <div className="descBox mb-4 text-center">
       {description}
     </div>

    </div>
  );
};

export default BakeryDescr;