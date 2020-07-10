import React from 'react';
import '../assets/style/components/CarrusellItem.scss';
import iconPlay from '../assets/Static/play-icon.png'
import iconplus from '../assets/Static/plus-icon.png'
const CarrusellItem = () => (

  <div className="carousel-item">
  <img className="carousel-item__img" src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Platzi Video" />
  <div className="carousel-item__details">
    <div>             
      <img className="carousel-item__details--img" src= {iconPlay} alt="Play Icon" />
      <img className="carousel-item__details--img" src=  {iconplus} alt="Plus Icon" />
    </div>
    <p className="carousel-item__details--title">Título descriptivo</p>
    <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
  </div>
</div>

);

export default CarrusellItem;