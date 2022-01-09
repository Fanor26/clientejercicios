import React from 'react'
import './styles/Welcome.css'
function Welcome(props){


    return (
        <div className="container">
        <div className="Fitness-User-Info">
            <h1>Bienvenido al Sistema DevFanor!</h1>
            <p>{props.username}</p>
            <p>¡Hagamos ejercicio para que alguien gane!</p>
        </div>
    </div>


    )


}

export default Welcome 