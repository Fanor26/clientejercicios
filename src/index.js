
//const element = document.createElement('h1')
//element.innerText = 'Hola React FANOR'

//const container = document.getElementById('root')
//container.appendChild(element)
import React from 'react'
import ReactDom from 'react-dom'
const element = <h1>Hola React Fanor</h1>
const container = document.getElementById('root') 
ReactDom.render(element, container)
