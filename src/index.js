
//const element = document.createElement('h1')
//element.innerText = 'Hola React FANOR'

//const container = document.getElementById('root')
//container.appendChild(element)
import React from 'react'
import ReactDom from 'react-dom'

const user= {//objeto creado
  firstName: 'Fanor',
  lastName: 'Choque Aguirre',
  avatar: 'https://res.cloudinary.com/dhbn0fate/image/upload/v1639032523/fanor/fanor.jpg'
}

function getName(user){//funcion normal
return `${user.firstName} ${user.lastName}`

}
function getGreeting(user) {//funcion con condicion bucle
  if (user) {
    return <h1>Hola, {getName(user)}!</h1>;
  }
  return <h1>Hola, extraño</h1>;
}
const name = 'fanor'
//const element = <h1>Hola {getName(user)}</h1>// imprime la funcion getname y sus propiedades
//const element = <div>{getGreeting()}</div>// imprime la  funcion con condicion pero sin enviar nada del objeto creado
//const element = <div>{getGreeting(user)}</div>

//const element = <img src={user.avatar}/>//imprime una imagen y llamamos al objeto y sus propiedades del objeto creado

const element = (   //utilizamos hijos dentro de JSX

  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>


)
const container = document.getElementById('root') 
ReactDom.render(element, container)
