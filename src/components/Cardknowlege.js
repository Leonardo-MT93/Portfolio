import React from 'react'
import {motion } from 'framer-motion';
export const Cardknowlege = ({data, open}) => {
  return (
    <motion.div className='card_knowledge'
                    onClick={open}
                      initial={{
                      opacity: 0, 
                      translateX: -75, 
                      translateY: -50}}
                      animate={{opacity:1, 
                      translateX: 0, 
                      translateY: 0,
                      }} 
                      transition={{
                      duration: 0.9, 
                      delay: data.id * 0.25,
                      }}
                        >
                    <h3 className='tittle_card'>{data.tittle}</h3>
                    <img className='icon_inside' src={data.image}></img>
        </motion.div>
  )
}
