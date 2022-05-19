import React from "react";
import './Dropdown.css';
import arrow from '../../assets/arrow-down.svg'

export default function Dropdown({ title, content }) {
    const toggle = (e) => {
        const toggleContent = e.target.nextSibling
        // console.log(toggleContent)
        if (toggleContent.classList.contains('show')) {
            toggleContent.classList.remove('show')
        } else {
            toggleContent.classList.add('show')
        }
    }
    return (
        <section className="dropdown__container ">
            <div onClick={toggle} className="dropdown__button" >
                <h1 className="dropdown__title">{title}</h1>
                <img className="dropdown__arrow " src={arrow} alt="arrow"  />  
            </div>
            <div className="dropdown__content">
                <p >{content}</p>
            </div>
        </section>
    )

}

