import React from "react";
import './Rating.css';
import star from '../../assets/grey-star.svg'
import colorStar from '../../assets/color-star.svg'

const Rating = ({ rating }) => {
  const range = [1, 2, 3, 4, 5]

  return (
      <div className="rating">
          {/* Loop to display star by rating */}
          {range.map((rangeElem) =>
              rating >= rangeElem ? (
                  <img
                      key={rangeElem.toString()}
                      className="rating__icon"
                      src={colorStar}
                      alt="R"
                  />
              ) : (
                  <img
                      key={rangeElem.toString()}
                      className="rating__icon"
                      src={star}
                      alt="L"
                  />
              )
        
          )}
      </div>
  )
}

export default Rating
// {[...new Array(totalStars)].map((arr, index) => {                                               
//     return (
//         <div key={index + 'star'} className=''>
//             {index < obj.rating ? <img className='starColor' src={star} alt="" /> : <img className='starColor' src={starGray} alt="" />}
//         </div>
//     )})}

