import React from 'react'
import Responsive from './CarouselResponsive'
import '../styles/carousel.css';
import {motion} from 'framer-motion'

export const Projects = () => {
  return (
        <div className='container_projects_2'>
          <div className='subtittle'>
          <motion.h2 className='subtitulo' initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.35, duration: 0.5}}>Proyectos</motion.h2>    
          </div>
          <div className='container_carousel'>
            <div className='projectsCarousel'>
            <Responsive></Responsive>
            </div>
          </div>
          
        </div>
          
    
  )
}

