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
          <p className='text_modal'>{(data.description)}</p>
          <button className='btn_certificate'><a className='btn_certificate_link' href={data.link} target="_blank" rel="noopener noreferrer">
            {data.link==="#" ? "Pendiente" : "Certificado"}
            </a></button>
          <button className='modal_btn' onClick={close}>
           <img className='modal_btn_close' alt='img_btn_modal' src={require('../image/exit.png')} ></img> 
          </button>  
      </motion.div>
    </motion.div>
 

    
  )
  
}
