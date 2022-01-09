import React from 'react'

import circlesImg from '../images/circles.png'
import './styles/Card.css'


class Card extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
    image:"https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    }
    }
    componentDidMount(){
        setTimeout(() => {

            this.setState({
            image: "https://res.cloudinary.com/dhbn0fate/image/upload/v1641719721/124578_yayxba.jpg"
        })
        }, 5000)

    }
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
                    <img src={this.state.image} className="avatr" />
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