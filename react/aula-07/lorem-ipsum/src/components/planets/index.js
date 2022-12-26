import React, {Fragment} from 'react';
import Planet from './planet';


const showMessage = () => {
    console.log('Hello World');
}




const Planets = () => {
    return (
        <Fragment>
        
        <h1>Planet List</h1>
        <button onClick = {showMessage}>Click me</button>
        <hr />
        
        <Planet 
        
        title = "Mercurio" description = "Mais proximo da terra"
        
        img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" 

        text = "Mercurio é o planeta mais proximo do sol e o menor do sistema solar"

        link = "saiba mais sobre mercurio"

      
       
        
        
        />
    
        
        <Planet title = "Terra" description = "O pais azul" img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg" />
        
        
        <Planet title = "Marte" description = "O planeta vermelho" img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg" />
        
        
        </Fragment>      
        
        
        );
    }
    
    export default Planets;