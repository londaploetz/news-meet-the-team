import React from 'react';
import './brand.css';
import newslogo from '../../Assets/newslogo.svg';
import weatherlogo from '../../Assets/weather.svg';

const Brand = () => (
   <div className="headder">


<img 
className = "news-logo"
src={newslogo}
/>

    <img 
    className='weather-logo'
    src={weatherlogo}
    />

    <h1 className="degrees">36°</h1>
    <p className="location">Omaha, NE</p>
  </div>
  
);
export default Brand;