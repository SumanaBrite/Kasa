import React from "react";
import './Rating.css';
export default function Rating({rating}){
  const ratingLevels = [1, 2, 3, 4, 5]
    return (
      <div className="housing__tags">
            {ratingLevels.forEach((rate, i) => 
             
             rating>=rate?
                 ( <img key = {i + "colorStar"} src="../../assets/color-star.svg" alt="" />
                ):
                (<img key ={ i + "greyStar"}src="../../assets/grey-star.svg" alt=""/>)
            )}
        </div>
      
        
      
    )
}

