import React from "react";
import './Carousel.css';

export default function Carousel({ pictures }) {
  // console.log(pictures);

  return (
    <section className="carousel__container">
      {pictures.map((pic, i) => {
        return (
          <div key={i+'housing'}>
            <img className="carousel__img" src={pic} alt="" />
          </div>
        )
      })}
    </section>
  )
}


