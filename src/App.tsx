import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Contacts from "./containers/Contacts/Contacts";
import Portfolio from "./containers/Portfolio/Portfolio";
import Game from "./containers/Game/Game";
import Hamburger from "./containers/Hamburger/Hamburger";
import Countries from "./containers/Countries/Countries";
import type {Product} from "./types";
import bread from './assets/bread.jpeg';
import cakes from './assets/cakes.jpeg';
import cakes2 from './assets/cakes2.jpeg';
import cookies from './assets/cookies.jpeg';
import macaroons from './assets/makaroons.jpeg';
import pie from './assets/pie.jpeg';
import address from './assets/adressImg.png';
import schedule from './assets/grafic.png';


const BAKERY_FACTS: string[] = [
  "В наших пекарнях мы начинаем работу ранним утром, чтобы на завтрак вы смогли порадовать себя домашней выпечкой.",
  "Натуральные ингредиенты, ручная лепка и современные технологии — вот секрет выпечки из нашей пекарни.",
  "Вся продукция в наших пекарнях приготовлена руками наших пекарей со старанием и любовью.",
  "Свежий хлеб, пироги, выпечка, печенье — каждый Гость найдет продукцию," +
  " которая подарит истинное наслаждение от качественной и вкусной выпечки."
];

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts([
      {name: "Хлеб", price: 50, img: bread},
      {name: "Торты", price: 300, img: cakes},
      {name: "Пироженные", price: 150, img: cakes2},
      {name: "Печенья", price: 100, img: cookies},
      {name: "Макарунсы", price: 350, img: macaroons},
      {name: "Пироги", price: 250, img: pie},
    ])
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={(
          <Home facts={BAKERY_FACTS}/>
        )}/>
        <Route path="/production" element={(
          <Products products={products}/>
        )}/>
        <Route path="/contacts" element={(
          <Contacts imgSchedule={schedule} imgAddress={address}/>
        )}/>
        <Route path="/portfolio" element={(
          <Portfolio/>
        )}>
          <Route path="game" element={(
            <Game/>
          )}/>
          <Route path="hamburger" element={(
            <Hamburger/>
          )}/>
          <Route path="countries" element={(
            <Countries/>
          )}/>
        </Route>
        <Route path="*" element={(
          <h1 className="text-center mt-4">Not found</h1>
        )}/>
      </Routes>
    </div>
  );
}

export default App;
