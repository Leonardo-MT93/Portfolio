import React from 'react';
import '../styles/projects.css'
import { motion } from 'framer-motion';
export const Projects = () => {

  const details= {
    hidden:{
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      }
    }
  }
  return (
 
    <div className='container_ppal_project' id='projects'>
      <div className='project'>
        <div className='subtittle_project'>
        <motion.h2 className='subtitulo' initial={{y: -150}} animate={{y:0}} transition={{delay: 0.1, type: 'spring', stiffness: 75}}>Proyectos</motion.h2>
        </div>  
        <div className='content_project'>          
          <div className='container_carrusel' >
            <div className='itemCarrusel'id='carrusel-item-1'>
              <div className='tarjetaCarrusel'>
                <div className='imgTarjeta'>
                  <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
                </div>
                <div className='descTarjeta'>
                  <h2 className='tituloTarjeta'>Proyecto 1</h2>
                  <p className='descripcionTarjeta'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  <div className='btn_tarjeta'>
                    <button className='btn_project'>Ir al proyecto</button>
                    <button className='btn_project'>Ir a Github</button>
                  </div>
                </div>
              </div>
              <div className='btn_carrusel_left'>
                <a href='#carrusel-item-3'><img className='arrow_btn' src={require('../image/left-arrow.png')}></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-2'><img className='arrow_btn' src={require('../image/right-arrow.png')}></img></a>
              </div>
            </div>
            <div className='itemCarrusel'id='carrusel-item-2'>
              <div className='tarjetaCarrusel'>
                <div className='imgTarjeta'>
                  <img src={require('../image/icon.png')} className='card-img-top' alt="..."/>  
                </div>
                <div className='descTarjeta'>
                  <h2 className='tituloTarjeta'>Proyecto 2</h2>
                  <p className='descripcionTarjeta'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  <div className='btn_tarjeta'>
                    <button className='btn_project'>Ir al proyecto</button>
                    <button className='btn_project'>Ir a Github</button>
                  </div>
                </div>
              </div>
              <div className='btn_carrusel_left'>
                <a href='#carrusel-item-1'><img className='arrow_btn' src={require('../image/left-arrow.png')}></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-3'><img className='arrow_btn' src={require('../image/right-arrow.png')}></img></a>
              </div>
              </div>
            <div className='itemCarrusel'id='carrusel-item-3'>
              <div className='tarjetaCarrusel'>
                <div className='imgTarjeta'>
                  <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
                </div>
                <div className='descTarjeta'>
                  <h2 className='tituloTarjeta'>Proyecto 3</h2>
                  <p className='descripcionTarjeta'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  <div className='btn_tarjeta'>
                    <button className='btn_project'>Ir al proyecto</button>
                    <button className='btn_project'>Ir a Github</button>
                  </div>
                </div>
              </div>
              <div className='btn_carrusel_left'>
                <a href='#carrusel-item-2'><img className='arrow_btn' src={require('../image/left-arrow.png')}></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-4'><img className='arrow_btn' src={require('../image/right-arrow.png')}></img></a>
              </div>
            </div>

            <div className='itemCarrusel'id='carrusel-item-4'>
              <div className='tarjetaCarrusel'>
                <div className='imgTarjeta'>
                  <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
                </div>
                <div className='descTarjeta'>
                  <h2 className='tituloTarjeta'>Proyecto 4</h2>
                  <p className='descripcionTarjeta'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  <div className='btn_tarjeta'>
                    <button className='btn_project'>Ir al proyecto</button>
                    <button className='btn_project'>Ir a Github</button>
                  </div>
                </div>
              </div>
              <div className='btn_carrusel_left'>
                <a href='#carrusel-item-3'><img className='arrow_btn' src={require('../image/left-arrow.png')}></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-5'><img className='arrow_btn' src={require('../image/right-arrow.png')}></img></a>
              </div>
            </div>

            <div className='itemCarrusel'id='carrusel-item-5'>
              <div className='tarjetaCarrusel'>
                <div className='imgTarjeta'>
                  <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
                </div>
                <div className='descTarjeta'>
                  <h2 className='tituloTarjeta'>Proyecto 5</h2>
                  <p className='descripcionTarjeta'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  <div className='btn_tarjeta'>
                    <button className='btn_project'>Ir al proyecto</button>
                    <button className='btn_project'>Ir a Github</button>
                  </div>
                </div>
              </div>
              <div className='btn_carrusel_left'>
                <a href='#carrusel-item-4'><img className='arrow_btn' src={require('../image/left-arrow.png')}></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-1'><img className='arrow_btn' src={require('../image/right-arrow.png')}></img></a>
              </div>


            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}

{/* <motion.div id="carouselExampleControls" className='carousel slide' data-bs-ride="carousel" 
    variants={details}
    initial="hidden" 
    animate="visible" >
  <div className='carousel-inner'>
    <div className='carousel-item active'>
    
      <div className='card'>
          <div className='container_image'>
            <img src={require('../image/icon.png')} className='card-img-top' alt="..."/>  
          </div>
        <div className='card-body'>
          <h2 className='card-title'>Proyecto 1</h2>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='div_button_project'>
            <a href="www.google.com" className='btn btn-primary'>Ir al proyecto</a>
            <a href="www.google.com" className='btn btn-primary'>Ir al repositorio</a>
          </div>
          
        </div>
      </div>
    </div>
    <div className='carousel-item'>
      <div className='card'>
          <div className='container_image'>
            <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
          </div>
        <div className='card-body'>
          <h2 className='card-title'>Proyecto 2</h2>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='div_button_project'>
            <a href="www.google.com" className='btn btn-primary'>Ir al proyecto</a>
            <a href="www.google.com" className='btn btn-primary'>Ir al repositorio</a>
          </div>
        </div>
      </div>
    </div>
    <div className='carousel-item'>
      <div className='card'>
          <div className='container_image'>
            <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
          </div>
        <div className='card-body'>
          <h2 className='card-title'>Proyecto 3</h2>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='div_button_project'>
            <a href="www.google.com" className='btn btn-primary'>Ir al proyecto</a>
            <a href="www.google.com" className='btn btn-primary'>Ir al repositorio</a>
          </div>
        </div>
      </div>
    </div>
    <div className='carousel-item'>
      <div className='card'>
          <div className='container_image'>
            <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
          </div>
        <div className='card-body'>
          <h2 className='card-title'>Proyecto 4</h2>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='div_button_project'>
            <a href="www.google.com" className='btn btn-primary'>Ir al proyecto</a>
            <a href="www.google.com" className='btn btn-primary'>Ir al repositorio</a>
          </div>
        </div>
      </div>
    </div>
    <div className='carousel-item'>
    <div className='card'>
          <div className='container_image'>
            <img src={require('../image/casita.jpg')} className='card-img-top' alt="..."/>
          </div>
        <div className='card-body'>
          <h2 className='card-title'>Proyecto 5</h2>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='div_button_project'>
            <a href="www.google.com" className='btn btn-primary'>Ir al proyecto</a>
            <a href="www.google.com" className='btn btn-primary'>Ir al repositorio</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='div_btnPrev'>
  <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className='carousel-control-prev-icon' aria-hidden="true"></span>
    <span className='visually-hidden'>Previous</span>
  </button>
  </div>
  
  <button className='carousel-control-next' type="button" >
    <span className='carousel-control-next-icon' aria-hidden="true" data-bs-target="#carouselExampleControls" data-bs-slide="next"></span>
    <span className='visually-hidden'>Next</span>
  </button>
</motion.div> */}