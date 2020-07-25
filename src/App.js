import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

import Logo from './img/Logo-Dapps.png';
import Continuo from './img/continuo-con-mis-actividades.jpg';
import Amplio from './img/amplio-mi-negocio.jpg'
import Quiero from './img/quiero-una-licencia.jpg'
import Proceso from './img/proceso-continuar-con-actividades.png'
import Proceso2 from './img/proceso-ampliar-mi-negocio2.png'
import Importante from './img/importante-licencias.png'
import Licencia from './img/dj-licencias-de-funcionamiento.png'
import Condicion from './img/dj-codiciones-de-seguridad.png'
import Enviar from './img/enviar-dj-atencion-virtual.png'
import Contact from './Components/Contact.js'
function App() {
  return (
    
    <body>
      <div className="Cabecera">
          <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
              <div class="container-fluid">
                <img className="Logo" src={Logo} height="50px"   />
        
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"/>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav" style={{paddingLeft:'30%'}}>
                       <a href="#" class="nav-item nav-link">Inicio</a>
                       <a href="#" class="nav-item nav-link">Contactanos</a>
                    </div>
                </div>
              </div>    
          </nav>
      </div>

    <div className='Cuerpo'>
        <section className='Cuerpo-Primero'>
            <h2 className="titulo-1">Licencia de Funcionamiento Online </h2>
              
              <section className="Cuerpo-Primero-parrafo">
                    <p class="text-align-justify">
                      La Municipalidad de Chorrillos se adapta a los cambios tecnológicos añadiendo un 
                      canal de atención netamente virtual. De este modo podrán realizar trámites desde 
                      la comodidad de sus hogares y así poder frenar la ola de contagios del COVID-19. 
                      El cambio vigente permitirá solicitar licencias de funcionamiento para reaperturar 
                      o ampliar tu negocio.</p>
                    <p>Para ello tenemos dos tipos de procedimientos:</p>
              </section>

              
                  
                    <img alt="continuo conmis actividades" src={Continuo} width="241" class="align-center"/>
                    <img alt="amplio mi negocio"  src={Amplio} width="241" class="align-center"/>
                    <img alt="quiero una licencia" src={Quiero}  width="241" class="align-center"/>
                  
              
        </section>

        <section className='Cuerpo-Segundo'>
          <h3 className="titulo-2">
            <strong>Quiero Continuar con mis actividades comerciales (reinciar mi laburo) </strong>
          </h3>
          <img alt="proceso continuar con actividades" src={Proceso}  class="align-center"/>
          <section  className="Cuerpo-Segundo-parrafo">
            <a>(1) Solicitar el certificado emitido por PRODUCE Y MINSA</a><br/>
            <a >(2) Presentar documentación a la Municipalidad (vía web)</a>
          </section >
        </section>

        <section className='Cuerpo-Tercero'> 
            <h3 className="titulo-3">
            <strong>Quiero ampliar mi negocio (Solo válido para locales con riesgo bajo y medio) en base al Decreto Supremo N° 009-2020-PRODUCE</strong>
            </h3>
          
            <img alt="proceso ampliar mi negocio"  src={Proceso2}  class="align-center"/>
        

            <section  className="Cuerpo-tercero-parrafo">
              <a target="_blank">(1) Verifico lista de actividades adicionales.</a> <br/>
              <a target="_blank">(2) Relleno los formatos de declaración jurada.</a><br/>
              <a target="_blank">(3) Presentar documentación a la Municipalidad (vía web)</a>
            </section>

            <img alt="importante" src={Importante}  width="400px"/>
        </section> 

         <section className='Cuerpo-Cuarto'> 
            <h3 className="titulo-4">
            <strong>Quiero una nueva licencia (Solo trámite de riesgo bajo y medio)</strong>
            </h3>
            <section  className="Cuerpo-Cuarto-parrafo">
            <p>Vecino chorrillano, si desea aperturar un nuevo negocio, recuerda que debes mantener todos los papeles bajo normativa para evitar posibles sanciones.</p>
            </section>
            
              
                <img alt="Rellenar declaración jurada de licencia de funcionamiento" src={Licencia} class="align-center" width="500" />
                <img alt="Rellenar declaración jurada de las condiciones de seguridad en la edificación"  src={Condicion} class="align-center" width="500" />
                <img alt="Envíar las declaraciones juradas a la Municipalidad" src={Enviar} class="align-center" width="500" />
              
            
            <section className="Cuerpo-Cuarto-parrafo">
            <p >
             1) - Rellenar declaración jurada de licencia de funcionamiento.<br/>
             2) - Rellenar declaración jurada de las condiciones de seguridad en la edificación.<br/>
             3) - Resolución del MINSA y/o declaración jurada (En caso de BOTICA, CENTRO DE SALUD)<br/>
             4) - Copia de título de profesión (referencial) (En caso de BOTICA, CENTRO DE SALUD)<br/>
             5) - Certificado de habilidad profesional (referencial) (En caso de BOTICA, CENTRO DE SALUD)<br/>
             6) - Ficha ruc.<br/>
             7) - Vigencia poder y/o declaración jurada.<br/>
             8) - Contrato de alquiler y/o (PU). (referencial)<br/>
             9) - Copia DNI. (referencial)
             </p>
             </section>
        </section>

        <section>
           <Contact/>
          </section>  
        
    </div>
    </body>
  );
}

export default App;
