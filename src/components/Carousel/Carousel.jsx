import { useState } from 'react'
import './Carousel.css';

export default function Carousel({ pictures }) {
  let [current, setCurrent] = useState(0)
  const picLength = pictures.length;
  console.log(picLength);
  const navigateSlide = (val) => {
    setCurrent(current === 0 ? current = picLength - 1:current === picLength-1?current = 0:current = current + val)
    
  }
  return (
    <section className="carousel__container">
      {pictures.map((pic, i) => {
        return (
          <div key={i + "carouselImg"}>
            <img src={pictures[current]} alt="" className={i === current ? 'carousel__img show' : 'carousel__img hide'}   />
          </div>
        )
      })}
      {picLength>1 ? (
        <>
        <img className="prev" src="/previous.svg" alt="prev" onClick={() => navigateSlide(-1)} />
        <img className="next" src="/next.svg" alt="next" onClick={() => navigateSlide(+1)} />
</>
      ):null}
      <div className='carousel__count'>
        <p>{current}/{picLength}</p>
      </div>
      
    </section>
  )
}



