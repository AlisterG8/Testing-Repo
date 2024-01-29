import React from 'react'


function AComponent({image,title}) {
    return(
        <div className="articulo">
            <img src={image} alt={ "Imagen " + title}/>
            <p>{title}</p>      
                </div>
        

    );

}
export default AComponent;