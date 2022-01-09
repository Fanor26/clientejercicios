
//const element = document.createElement('h1')
//element.innerText = 'Hola React FANOR'

//const container = document.getElementById('root')
//container.appendChild(element)
import React from 'react'
import ReactDom from 'react-dom'
import Welcome from './components/Welcome'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root') 
ReactDom.render(<div>
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


</div>, container)
