import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3 footer'>
            Copyright &copy; VirtualMall
          </Col>
        </Row>
        <Row className='text-center py-3 footer'>
          <Col>
            <span>
              Creators |
              <a className='gitLink' href="https://github.com/demarcusmb" target='_blank' > DeMarcus Brown</a> | 
              <a className='gitLink' href="https://github.com/Robford1996" target='_blank'> Bobby Ford</a> | 
              <a className='gitLink' href="https://github.com/joeyfasanelli" target='_blank'> Joey Fasanelli</a> | 
              <a className='gitLink' href="https://github.com/pneibaur" target='_blank'> Phillip Neibaur</a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer