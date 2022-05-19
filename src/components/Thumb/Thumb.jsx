import React from "react";

import './Thumb.css';

export default function Thumb({title, cover}){
    return (
      <article className="thumb__container">
            <img src={cover} alt={title} className="thumb__img" title={title} cover={cover}/>
            <div className="thumb__bg"></div>
            <h2 className="thumb__title">{title}</h2>     
        </article>
    )
}

