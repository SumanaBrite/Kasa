import React from "react";
import './Tag.css';

export default function Tag({tags}) {
    console.log(tags)
    return (
        <div className="housing__tags">
            {tags.map((tag, i) => {
                return (
        
                        <span key={i + 'tag'} className="tag__text">{tag}</span>
            
                )
            })}

        </div>
    )
}

