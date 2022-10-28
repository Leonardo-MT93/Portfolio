import React, { useRef } from 'react';
import {BrowserRouter} from "react-router-dom";
import { Biography } from '../components/Biography';
import { Contact } from '../components/Contact';

import { Home } from '../components/Home';
import { Knowledge } from '../components/Knowledge';
import { Projects } from '../components/Projects';
import {motion} from 'framer-motion'


export const MisRutas = () => {
  const home = useRef();
  const bio = useRef();
  const knowledge = useRef();
  const project = useRef();
  const contact = useRef();

  const sectionAnimate={
    offscreen:{
      opacity:0,
      delay: 1,
    },
    onscreen:{
    x:[-25, 0],
    opacity:1,
    transition: {
    delay: 0.2,
    duration:1}
  }

}

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <BrowserRouter>
        <div className='contenedor'>
        <div className='header'>
            <nav className='menu_header'>
            <ul className='listado_header'>
                <li className='listado'>
                  <a to="/Home" className="navLink"  onClick={()=> scrollToSection(home)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_home.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a to="/Biography" className="navLink" onClick={()=> scrollToSection(bio)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_biography.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a to="/Knowledge" className="navLink" onClick={()=> scrollToSection(knowledge)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_knowledge.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a to="/Projects" className="navLink" onClick={()=> scrollToSection(project)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_project.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a to="/Contact" className="navLink" onClick={()=> scrollToSection(contact)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_contact.png')}></motion.img></a>
                </li>
            </ul>
            </nav>
        </div>
          <motion.section className='container_ppal_project' ref={home}><Home/></motion.section>
          <motion.section className='container_ppal_project'  ref={bio}
                  variants={sectionAnimate}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{once:false, amount:0.5}}
                  ><Biography/>
          </motion.section>
          <motion.section className='container_ppal_project' ref={knowledge}
                  variants={sectionAnimate}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{once:false, amount:0.5}}
                  ><Knowledge/>
          </motion.section>
          <motion.section className='container_ppal_project' ref={project}
                  variants={sectionAnimate}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{once:false, amount:0.5}}
                  ><Projects/>
          </motion.section>
          <motion.section className='container_ppal_project' ref={contact}
                  variants={sectionAnimate}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{once:false, amount:0.5}}
                  ><Contact/> 
          </motion.section>
        </div>   
          
    </BrowserRouter>
  )
  }