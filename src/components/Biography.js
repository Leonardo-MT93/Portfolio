import React from 'react';
import '../styles/biography.css';
import {motion} from 'framer-motion'

export const Biography = () => {

  return (
    <motion.div className='container_bio' >
      <div className='biography'>
        <div className='subtittle'>
        <motion.h2 className='subtitulo' initial={{y: -150}} animate={{y:0}} transition={{delay: 0.1, type: 'spring', stiffness: 75}}>A cerca de mí</motion.h2>
        </div>
        <motion.div className='bio_details' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
          <div className='bio_text'>
          <p className='biography_description'>Soy Leonardo Tolaba y es un gusto poder mostrarte todo lo que mas me apasiona. Estoy estudiando en la UTN y también estoy cursando inglés en el CUI. Adquirí mucho conocimiento en el bootcamp brindado por Oracle ONE tanto en el Frontend como el Backend. Me encuentro en búsqueda de un empleo donde pueda seguir explotando mis conocimientos y pueda seguir creciendo aun más!</p>
          </div>
          <div className='bio_study'>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/krause.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Técnico Mecánico<br></br>Esc.Téc. Otto Krause</p>
            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/utn.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Tecn. en Programación<br></br>UTN FRA - En curso</p>
            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/oracle.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>FrontEnd Developer<br></br>Oracle ONE - 2022</p>

            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/cui.webp')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Ingles A1<br></br>CUI - Nivel4 en curso</p>
            </div>
          </div>
        </motion.div>
        <motion.div className='bio_image' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
          <div className='contain_imgbio'>
          <img src={require('../image/PerfilPrincipal.webp')} className='imagen_foto' alt='imq'></img>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
