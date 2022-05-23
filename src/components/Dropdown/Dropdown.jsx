import React from "react";
import './Dropdown.css';
import arrow from '../../assets/arrow-down.svg'

export default function Dropdown({ title, content }) {
    const toggle = (e) => {
        const toggleContent = e.target.nextSibling
        const arrowImg = e.target.lastChild
        // console.log(toggleContent)
        if (toggleContent.classList.contains('show')) {
            toggleContent.classList.remove('show')
            arrowImg.classList.remove('trans__rotate')

        } else {
            toggleContent.classList.add('show')
            arrowImg.classList.add('trans__rotate')
        }
    }
    return (
        <section className="dropdown__container">
            <div onClick={toggle} className="dropdown__button" >
                <h1 className="dropdown__title">{title}</h1>
                <img className="dropdown__arrow " id="arrow" src={arrow} alt="arrow" />
            </div>
            <div className="dropdown__content">
                {Array.isArray(content) ? (
                    <ul className="">
                        {content.map((list, i) =>
                            <li key = {i + "contentList"}>
                                {list}
                            </li>
                        )}
                    </ul>

                ) :
                (
                    <p>{content}</p>
                ) }
            </div>
        </section>
    )

}

