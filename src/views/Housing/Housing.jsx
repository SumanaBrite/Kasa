import React from "react";
import { useParams } from 'react-router-dom'
import './Housing.css';
import Carousel from '../../components/Carousel/Carousel'
import Host from '../../components/Host/Host'
import Rating from '../../components/Rating/Rating'
import { housing } from '../../data/data'
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
export default function Housing() {
  const { id } = useParams();
  return (
    
    <main>
      {housing.map((house, i) => (
        <>
        {house.id === id && (
          <div key={i + "housing"}>
            <Carousel pictures={house.pictures} />
            <div className="housing__contents">
              <div className="housing__info">
                <h1 className="housing__title">{house.title}</h1>
                <p className="housing__location">{house.location}</p>
                <Tag tags={house.tags} />

              </div>
              <div className="housing__rightinfo">
                <Host key={house.host.id} name={house.host.name} image={house.host.picture} />
                <Rating rating={house.rating} />
              </div>


            </div>
            <section className="housing__dropdowns">
              <div className="housing__dropdownLeft">
                <Dropdown title="description" content={house.description} />
              </div>
              <div className="housing__dropdownRight">
                <Dropdown title="equipments" content={house.equipments} />
              </div>
            </section>

          </div>
        )}      
          </>

      ))}
        
    
    </main>
  )

}

