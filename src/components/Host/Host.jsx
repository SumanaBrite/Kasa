import React from "react";
import './Host.css';

export default function Host({ name, image }) {
  const names = name.split(' ');
  const [firstName, LastName] = names;
  return (
    <section className="hosting__profile">
    <div className="housing__host">
      <p className="housing__host-name">{firstName}</p>
      <p className="housing__host-name">{LastName}</p>
    </div>
    <div>
      <img className="housing__host-img" src={image} alt="profile" />
    </div>
    </section>
  )
}

