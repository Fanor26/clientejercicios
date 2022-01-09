
//const element = document.createElement('h1')
//element.innerText = 'Hola React FANOR'

//const container = document.getElementById('root')
//container.appendChild(element)
import React from 'react'
import ReactDom from 'react-dom'
import Exercises from './pages/Exercises'

import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root') 
ReactDom.render(<Exercises/>, container)
