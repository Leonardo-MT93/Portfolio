import React from 'react';
import '../styles/contact.css';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { Footer } from './Footer';

const socialLink = {
  hover: {
    scale: 1.2, 
    originX: 0, 
  },
  visible: {
    color: '#f8e112',
    transition: {
      type: 'spring',
      stiffness:300,
    }
  }
}

export const Contact = () => {
  return (
    <div className='container_contact' id='contact'>
      <div className='contact'>
        <div className='subtittle'>
        <motion.h2 className='subtitulo' initial={{y: -150}} animate={{y:0}} transition={{delay: 0.1, type: 'spring', stiffness: 75}}>Contacto</motion.h2>
        </div>
        <motion.div className='contenedor_contact' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
          <div className='redes_contact'>
            <div className='redes_tittle'>
              <h2 className='tittle_contact'>Mis redes</h2>
            </div>
            <div className='redes_icons'>
            <ul className='list_socialLinks'>
              <motion.li className='socialLinks' variants={socialLink}  animate="visible" whileHover="hover">LinkedIn
              <img className='logo_contact' src={require('../image/icons/linkedin.png')} alt='logo_redsocial'></img>
              </motion.li>
              <motion.li className='socialLinks' variants={socialLink}  animate="visible" whileHover="hover">GitHub
              <img className='logo_contact' src={require('../image/icons/github.png')} alt='logo_redsocial'></img>
              </motion.li>
              <motion.li className='socialLinks' variants={socialLink}  animate="visible" whileHover="hover">Instagram
              <img className='logo_contact' src={require('../image/icons/instagram.png')} alt='logo_redsocial'></img>
              </motion.li>
              <motion.li className='socialLinks' variants={socialLink}  animate="visible" whileHover="hover">Twitter
              <img className='logo_contact' src={require('../image/icons/twitter.png')} alt='logo_redsocial'></img>
              </motion.li>
              <motion.li className='socialLinks' variants={socialLink}  animate="visible" whileHover="hover">WhatsApp
              <img className='logo_contact' src={require('../image/icons/whatsapp.png')} alt='logo_redsocial'></img>
              </motion.li>
              <motion.li className='socialLinks_mobile' variants={socialLink}  animate="visible" whileHover="hover">Gmail
              <img className='logo_contact_mobile' src={require('../image/icons/gmail.png')} alt='logo_redsocial'></img>
              </motion.li>
            </ul>
            </div>
          </div>
          <div className='formulario_contact'>
            <div className='formulario_tittle'>
              <h2 className='tittle_contact'>Enviame tu propuesta!</h2>
            </div>
            <div className='contenedor_formulario'>
              <ContactForm/>
            </div>
          </div>
        </motion.div>
        <div className='contenedor_footer'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
