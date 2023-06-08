import React from 'react'

const Tarjeta = ({Input1,Input2, styles}) => {
    const estilos = {backgroundColor: styles.background, color: styles.color}
    return (
      <div className='Tarjeta' style={estilos}>
        <h3>Información ingresada:</h3>
        <p>Input 1: {Input1}</p>
        <p>Input 2: {Input2}</p>
      </div>
  )
}

export default Tarjeta