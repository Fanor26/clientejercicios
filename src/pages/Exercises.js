import React from 'react'
import Welcome from '../components/Welcome'
import Card from '../components/Card'

class Exercises extends React.Component{
    render(){
        return(
            <div>
                  <Welcome
                  username="Fanor Choque Aguirre"
                  
                  />
                  <Card 

                usuario="Nombre de Usuario "
                datos="Nombre, Apellido, Ciudad, Escuela"
                avatar="https://res.cloudinary.com/dhbn0fate/image/upload/v1639032523/fanor/fanor.jpg"
                leftColor="#A74CF2"
                rightColor="#617BFB"

                />


</div>

    )

}
}
export default Exercises