import React, { useEffect, useRef, useState } from 'react';
import '../styles/knowledge.css'
import {motion } from 'framer-motion';
import { KnowledgeCards} from './KnowledgeCards';

const knowledges = [
    {id:0, tittle: "HTML", image: require('../image/icon.png')},
    {id:1, tittle: "CSS", image: require('../image/icon.png')},
    {id:2, tittle: "Javascript", image: require('../image/icon.png')},
    {id:3, tittle: "React.js", image: require('../image/icon.png')},
    {id:4, tittle: "Node.js", image: require('../image/icon.png')},
    {id:5, tittle: "Typescript", image: require('../image/icon.png')},
    {id:6, tittle: "Java", image: require('../image/icon.png')},
    {id:7, tittle: "MySQL", image: require('../image/icon.png')},
    {id:8, tittle: "Git", image: require('../image/icon.png')},
    {id:9, tittle: "C", image: require('../image/icon.png')}
]


export const Knowledge = () => {

  const [visible, setVisible] = useState(false);
  const divRef = useRef();

  // Con UseEffect detecto cada vez que se posiciona la vision de la pagina en esta seccion
  useEffect(()=>{
    const handleScroll = () =>{
      const div = divRef.current;
      const {y} = div.getBoundingClientRect();
      const visibilidad = (y <= 100 && y > -850) ? true : false;
      setVisible(visibilidad);
    }

    window.addEventListener('scroll', handleScroll);

    return() =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);


  return (
    
    <div className='container_knowledge' id='knowledge' ref={divRef}>
      <div className='knowledge'>
        <div className='subtittle'>
        <motion.h2 className='subtitulo' initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.35, duration: 0.5}}>Conocimientos</motion.h2>    
        </div>
        {visible &&    
        <motion.div className='list_knowledge' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.35, duration: 0.5}}>  
        <motion.ul className='section_knowledge' layout >
            {knowledges.map((knowledge) =>(
                <KnowledgeCards data={knowledge} key={knowledge.id}>
                </KnowledgeCards>
            )
            )}
        </motion.ul>        
      </motion.div>   
}
      </div>

    </div>
  )
}
