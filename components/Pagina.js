import React from 'react'

const Pagina = (props) => {
  return (
    <div>
       <div className=" bg-secondary text-white py-3 text-center mb-3" >
         <h1>{props.titulo}</h1>
      </div>
    </div>
  )
}

export default Pagina
