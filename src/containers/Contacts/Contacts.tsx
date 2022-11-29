import React from 'react';

interface Props {
  imgAddress: string;
  imgSchedule: string;
}

const Contacts: React.FC<Props> = ({imgAddress, imgSchedule}) => {
  return (
    <div className="text-center p-3">
      <h3 className="m-2">Наши контакты:</h3>
      <p><b>Адрес:</b> Кожевническая ул., 8с2, Москва, Россия, 115114</p>
      <img className="m-3" src={imgAddress} alt="#"/>
      <p><b>Часы работы:</b> 7:00 - 20:00</p>
      <p><b>Телефон: </b>+7 111 222-33-44</p>
      <h4>Посещаемость:</h4>
      <img src={imgSchedule} alt="#"/>
    </div>
  );
};

export default Contacts;