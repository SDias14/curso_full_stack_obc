import React, { Fragment } from "react";

const Description = (props) => {
    return (
      

         <Fragment>
            
            <p>{props.text}</p>

           
           
            <a href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)">{props.link}</a>

        

            </Fragment>

      

            


        
    

    );
}

export default Description;