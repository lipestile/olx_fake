import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';


const Pagina = (props) => {
  console.log(props)
  return (
    <>
      <Cabecalho/>

      <div className=" bg-secondary text-white py-3 text-center mb-3" >
         <h1>{props.titulo}</h1>
      </div>
      <Container className='mb-5'>
       {props.children}
      </Container>
      <Rodape/>

    </>
  )
}

export default Pagina