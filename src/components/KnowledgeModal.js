import React from 'react'
import '../styles/knowledge.css';
import {motion } from 'framer-motion';


export const KnowledgeModal = ({data, close}) => {

  return (
    <motion.div className='modal' 
    >
          <motion.div className='knowledge_modal'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            onClick={(e)=>{
                e.stopPropagation();
            }}
          >
          <h2 className='tittle_card_modal'>{data.tittle}</h2>
          <motion.img className='icon_inside_modal' src={data.image} alt="tarjeta con imagen"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
          }}
          ></motion.img>
          <p className='text_modal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button className='btn_certificate'>Certificado</button>
          <a className='modal_btn' onClick={close}>
           <img src={require('../image/exit.png')}></img> 
          </a>  
      </motion.div>
    </motion.div>
 

    
  )
  
}
