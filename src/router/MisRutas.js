import React, { useRef } from 'react';
import {BrowserRouter} from "react-router-dom";
import { Biography } from '../components/Biography';
import { Contact } from '../components/Contact';
import '../styles/header.css';
import { Home } from '../components/Home';
import { Knowledge } from '../components/Knowledge';
import { Projects } from '../components/Projects';
import {motion} from 'framer-motion'


export const MisRutas = () => {
  const home = useRef(null);
  const bio = useRef(null);
  const knowledge = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);


//   const sectionAnimate={
//     offscreen:{
//       opacity:0,
//       delay: 1,
//     },
//     onscreen:{
//     x:[-25, 0],
//     opacity:1,
//     transition: {
//     delay: 0.1,
//     duration:1}
//   }

// }

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
                  <a href='#home' to="/Home" className="navLink"  onClick={()=> scrollToSection(home)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_home.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a href='#bio' to="/Biography" className="navLink" onClick={()=> scrollToSection(bio)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_biography.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a href='#knowledge' to="/Knowledge" className="navLink" onClick={()=> scrollToSection(knowledge)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_knowledge.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a href='#project' to="/Projects" className="navLink" onClick={()=> scrollToSection(project)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_project.png')}></motion.img></a>
                </li>
                <li className='listado'>
                  <a href='#contact' to="/Contact" className="navLink" onClick={()=> scrollToSection(contact)}><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_contact.png')}></motion.img></a>
                </li>
            </ul>
            </nav>
        </div>
          <section className='container_ppal_project' ref={home} id='#home'><Home refProp={contact}></Home></section>
          <section className='container_ppal_project'  ref={bio} id='#bio'
                  // variants={sectionAnimate}
                  // initial={"offscreen"}
                  // whileInView={"onscreen"}
                  // viewport={{once:false, amount:0.5}}
                  ><Biography/>
          </section>
          <section className='container_ppal_project' ref={knowledge} id='#knowledge'
                  // variants={sectionAnimate}
                  // initial={"offscreen"}
                  // whileInView={"onscreen"}
                  // viewport={{once:false, amount:0.5}}
                  ><Knowledge/>
          </section>
          {/* CORREGIR EL CARRUSEL DE PROYECTOS -- PENDIENTE */}
          <section className='container_ppal_project' ref={project} id='#project'
                  // variants={sectionAnimate}
                  // initial={"offscreen"}
                  // whileInView={"onscreen"}
                  // viewport={{once:false, amount:0.5}}
                  ><Projects/>
          </section>
          <section className='container_ppal_project' ref={contact} id='#contact'
                  // variants={sectionAnimate}
                  // initial={"offscreen"}
                  // whileInView={"onscreen"}
                  // viewport={{once:false, amount:0.5}}
                  ><Contact/> 
          </section>
        </div>   
          
    </BrowserRouter>
  )
  }