import React from 'react'

import circlesImg from '../images/circles.png'
import './styles/Card.css'


class Card extends React.Component {
    /*   background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);*/

    render(){
        const  { usuario, datos, avatar, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            styles={{

                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}. ${rightColor})`
            }}
            >
                
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                    <img src={avatar} className="avatr" />
                    </div>
                <div className="col-6 Fitness-Card-Info">
                <h1>{usuario}</h1> 
                    <p>{datos}</p>
                    
                </div>
            </div>
        </div>
    </div>
        )
    }

}
export default Card 