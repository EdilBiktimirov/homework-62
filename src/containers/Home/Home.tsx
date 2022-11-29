import React from 'react';
import FactCart from "../../components/FactCart/FactCart";
import BakeryDescription from "../../components/BakeryDescription/BakeryDescription";

interface Props {
  facts: string [];
}

const Home: React.FC<Props> = ({facts}) => {
  const imageUrl = 'https://manofmany.com/wp-content/uploads/2021/07/23-Best-Bakery' +
    '-Shops-in-Sydney-Sourdough-Bread-to-Croissant-1200x900.jpeg';

  return (
    <div className="container py-2">
      <h1 className="text-center mt-2">Добрая перканя</h1>
      <BakeryDescription
        img={imageUrl}
        description={"Пекарня объединяет русские и французские кулинарные традиции. " +
          "Местным работникам известны секреты старинных поваренных книг, а для создания своих хлебобулочных шедевров они используют только натуральные ингредиенты. " +
          "В ассортименте сети пекарен несколько десятков видов хлеба, а ещё торты, выпечка, пироги, сэндвичи и круассаны. Вся продукция готовится вручную." +
          " Угоститься купленными булочками можно в уютном кафе пекарни либо заказать доставку выпечки на дом."}/>
      <h3 className='text-center'>Интересные факты про нашу перканю:</h3>
      <div className="row">
        {facts.map((elem) => (
          <FactCart
            fact={elem}
            key={Math.random()}/>
        ))}
      </div>
    </div>
  );
};

export default Home;