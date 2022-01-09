import React from 'react'
import exerciseImg from '../images/exercise.png'

class Card extends React.Component {

        render(){
            return (
            <div>
                <div>
                    <img src={exerciseImg}/>
                </div>
                <div>
                <h1>Titulo</h1>
                <p>Descripcion</p>

                </div>
            </div>
        )

        }

}

export default Card