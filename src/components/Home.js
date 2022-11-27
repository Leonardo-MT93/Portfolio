import React from 'react'
import '../styles/home.css';
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

export const Home = () => {
  const image= {
    hidden:{
      opacity: 0,
    },
    show:{
      opacity: 1,
      x: [-50, 0],
      transition:{
        delay:5,
        duration:2 
      }
    }
  }
  const button={
    hidden:{
      opacity: 0,
    },
    show:{
      opacity: 1,
      transition:{
        delay:5.5,
        duration:2 
      }
    }
  }
  
  return (
    <div className='home' id='home'> 
      <div className='logo_home'>&lt;leotolaba_dev/&gt;
        </div>
      <div className='divisor_portada'>
        <div className='parrafo_portada'>
          <div className='div_typewriter'>
            <Typewriter 
              onInit={(Typewriter) => {
                Typewriter
                .changeDelay(75)
                .typeString('Hola a todos!')
                .typeString('<br></br>')
                .typeString("Soy Leonardo Tolaba un ")
                .typeString('<br>')
                .typeString('<strong><span style="color: #fadd46;">Fullstack Developer!</span></strong>')
                .start();
              }}>
          </Typewriter>
          </div>
          <motion.div className='btns_home' variants={button} initial="hidden" animate="show">
            {/* <button className='btn_home' onClick={()=> scrollToContact}>Contáctame</button> */}
            <button className='btn_home'><Link className='link_demostration' to="/files/CV_Leonardo Manuel Tolaba.pdf" target="_blank" download>Descargar CV</Link></button>
          </motion.div>
        </div>   
        <motion.div className='redes_portada' variants={image} initial="hidden" animate="show" >
              <div className='container_fotohome'>
                <motion.img  className='foto_home' src={require('../image/spaceyellow.png')} alt="imagen de portada"></motion.img>
              </div>
        </motion.div>
      </div>        
    </div>
  )
}