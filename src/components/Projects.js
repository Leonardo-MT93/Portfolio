import React from 'react'
import Responsive from './CarouselResponsive'
import '../styles/carousel.css';
import {motion} from 'framer-motion'

export const Projects = () => {
  return (
        <div className='container_projects_2'>
          <div className='subtittle'>
          <motion.h2 className='subtitulo' initial={{y: -150}} animate={{y:0}} transition={{delay: 0.1, type: 'spring', stiffness: 75}}>Proyectos</motion.h2>    
          </div>
          <motion.div className='container_carousel' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
            <div className='projectsCarousel'>
            <Responsive></Responsive>
            </div>
          </motion.div>
          
        </div>
          
    
  )
}

