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
        <div className='bio_details'>
          <div className='bio_text'>
          <p className='biography_description'>Hola gracias por visitar mi portafolio soy Leonardo Tolaba y es un gusto poder mostrarte lo que es mi mundo. Soy estudiante de la Tecnicatura en Programación en la UTN y a su vez me encuentro realizando el curso brindado por Oracle One para convertirme en desarrollador FrontEnd. Me gustaria poder tener mi primera experiencia como desarrollador y poder capacitarme cada día más. Soy una persona proactiva y me encanta aprender. </p>
          </div>
          <div className='bio_study'>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/krause.png')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Técnico Mecánico<br></br>Esc.Téc. Otto Krause</p>
            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/utn.png')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Tecn. en Programación<br></br>UTN FRA - En curso</p>
            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/oracle.png')} alt='logo_formacion'></img>
              <p className='studyCard_text'>FrontEnd Developer<br></br>Oracle ONE - 2022</p>

            </div>
            <div className='study_card'>
              <img className='studyCard_img' src={require('../image/formacion/cui.jpg')} alt='logo_formacion'></img>
              <p className='studyCard_text'>Ingles A1<br></br>CUI - Nivel4 en curso</p>
            </div>
          </div>
        </div>
        <div className='bio_image'>
          <div className='contain_imgbio'>
          <img src={require('../image/lion.png')} className='imagen_foto' alt='imq'></img>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
