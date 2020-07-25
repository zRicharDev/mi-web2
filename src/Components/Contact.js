import React from 'react';

import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../img/Logo-Dapps.png';

function Contact() {
  return (
    <body className="Contact">
       
       <form action="">
       <Container fluid>
       <Row>
    
    <Col sm><h1>Contáctanos</h1></Col>
    
  </Row>
        </Container>


           <Container>
           <Row>
                <Col>
                    <img  src={Logo} height="100px"/>
                    <p> Av. República de Panamá 257 – Barranco, Lima<br/><br/>
                        Whatsapp: 940113661 – Teléfono: 017612980<br/><br/>
                        informes@dapps.pe<br/><br/>
                        Horario de Atención: Lunes a Sábado 9am a 9pm</p>
                </Col>
                <Col>
                <div class="form">
                    {/* <h1>Contáctanos </h1> */}
                        <div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Ruc</label>
                        </div>
            <           div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Nombre</label>
                        </div>
                        <div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Teléfono</label>
                         </div>
                        <div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Correo</label>
                        </div>
                        <div class="grupo">
                            <textarea name="" id="" rows="3" required></textarea><span class="barra"></span>
                            <label>Mensaje</label>
                        </div>
                        <button type="submit">Solicitar licencia</button>
                </div>
                </Col>
                </Row>
                </Container>
            </form>
            
    </body>
  );
}

export default Contact;
