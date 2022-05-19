import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Thumb from '../../components/Thumb/Thumb';
import './Home.css';
import { housing } from '../../data/data';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <div className="homeGalary">
        {housing.map((house) => {
          return <Link to={`/housing/${house.id}`} key={house.id} >
            <Thumb id={house.id} title={house.title} cover={house.cover} />
          </Link>
        })}
      </div>
    </main>
  )
  
}

