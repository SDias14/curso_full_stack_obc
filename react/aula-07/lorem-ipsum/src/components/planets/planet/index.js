import React from 'react';
import GrayImg from '../../shared/grayImage';
import Description from '../DescriptionLink';







const Planet = (props) => {
    return (
      <div>
            
            <h2>{props.title}</h2>
            
            <p>{props.description}</p>

       

            <GrayImg img_url = {props.img_url}  />

            
            <Description text = {props.text} />

            <Description link = {props.link} />

            
      
           


      </div>      
       

    );
}

export default Planet;