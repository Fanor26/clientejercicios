import React from 'react'
import Card from './Card'

function ExerciseList(props) {
    return(
        <div>
            {props.temas.map((tema) => {
                      return(


                        <Card 

                contenido={tema.contenido}
                descripcion={tema.descripcion}
                avatar={tema.avatar}
                leftColor={tema.leftColor}
                rightColor={tema.rightColor}

                />


                      )


                      })}




        </div>


    )


}


export default ExerciseList