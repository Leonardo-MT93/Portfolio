import React from 'react'
import '../styles/home.css';
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';

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
      <div className='logo_home'>**logo**</div>
      <div className='divisor_portada'>
        <div className='parrafo_portada'>
          <div className='div_typewriter'>
            <Typewriter 
              onInit={(Typewriter) => {
                Typewriter
                .changeDelay(75)
                .typeString('Hello everyone!')
                .typeString('<br></br>')
                .typeString("I'm Leonardo Tolaba a ")
                .typeString('<br>')
                .typeString('<strong><span style="color: #fadd46;">Fullstack Developer!</span></strong>')
                .start();
              }}>
          </Typewriter>
          </div>
          <motion.div className='btns_home' variants={button} initial="hidden" animate="show">
            <button className='btn_project'>Contactame</button>
            <button className='btn_project'>Descargar CV</button>
          </motion.div>
        </div>   
        <motion.div className='redes_portada' variants={image} initial="hidden" animate="show" >
            <motion.img  className='foto_home' src={require('../image/newfoto.png')} alt="imagen de portada"></motion.img>
        </motion.div>
      </div>        
    </div>
  )
}