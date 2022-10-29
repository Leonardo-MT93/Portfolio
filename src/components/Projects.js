import React from 'react';
import '../styles/projects.css'
import { motion } from 'framer-motion';
export const Projects = () => {

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
                <a href='#carrusel-item-3'><img className='arrow_btn' src={require('../image/left-arrow.png')} alt='flecha_carrusel'></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-2'><img className='arrow_btn' src={require('../image/right-arrow.png')} alt='flecha_carrusel'></img></a>
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
                <a href='#carrusel-item-1'><img className='arrow_btn' src={require('../image/left-arrow.png')} alt='flecha_carrusel'></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-3'><img className='arrow_btn' src={require('../image/right-arrow.png')} alt='flecha_carrusel'></img></a>
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
                <a href='#carrusel-item-2'><img className='arrow_btn' src={require('../image/left-arrow.png')} alt='flecha_carrusel'></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-4'><img className='arrow_btn' src={require('../image/right-arrow.png')} alt='flecha_carrusel'></img></a>
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
                <a href='#carrusel-item-3'><img className='arrow_btn' src={require('../image/left-arrow.png')} alt='flecha_carrusel'></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-5'><img className='arrow_btn' src={require('../image/right-arrow.png')} alt='flecha_carrusel'></img></a>
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
                <a href='#carrusel-item-4'><img className='arrow_btn' src={require('../image/left-arrow.png')} alt='flecha_carrusel'></img></a>
              </div>
              <div className='btn_carrusel_right'>
                <a href='#carrusel-item-1'><img className='arrow_btn' src={require('../image/right-arrow.png')} alt='flecha_carrusel'></img></a>
              </div>


            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}
