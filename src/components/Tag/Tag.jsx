import React from "react";
import './Tag.css';

export default function Tag({tags}) {
    console.log(tags)
    return (
        <div className="housing__tags">
            {tags.map((tag, i) => {
                return (
                    <div key={i + 'tag'}>
                        <span className="tag__text">{tag}</span>
                    </div>
                )
            })}

        </div>
    )
}

