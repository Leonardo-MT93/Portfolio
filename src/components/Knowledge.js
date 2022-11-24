import React, { useEffect, useRef, useState } from 'react';
import '../styles/knowledge.css'
import {motion } from 'framer-motion';
import { KnowledgeCards} from './KnowledgeCards';

const knowledges = [
    {id:0, tittle: "HTML", image: require('../image/knowledges/html.webp'), description: "Writing Semantic HTML / Accessibility / Forms and Validations / Best Practices", link: "#" },
    {id:1, tittle: "CSS", image: require('../image/knowledges/css.webp'), description: "Display/BoxModel/Flexbox/CSS Grid/Responsive Design and Media Queries", link: "#" },
    {id:2, tittle: "Javascript", image: require('../image/knowledges/javascript.webp'), description: "Syntax and Basic Constructs / DOM manipulation / Fetch API / ES6+ / POO / ", link: "#" },
    {id:3, tittle: "React.js", image: require('../image/knowledges/react.webp'), description: "Components / Events / Hooks / Router / CustomsHooks", link: "#" },
    {id:4, tittle: "Node.js", image: require('../image/knowledges/nodejs.webp'), description: "REST / JWT / NPM / YARGS / SOCKETS / ", link: "#" },
    {id:5, tittle: "Typescript", image: require('../image/knowledges/typescript.webp'), description: "Functions / ES6 / Class / Interfaces / NameSpaces / Generics / jQuery", link: "#" },
    {id:6, tittle: "Java", image: require('../image/knowledges/java.webp'), description: "POO / JDBC / Servlets / JavaEE / MySQL", link: "#" },
    {id:7, tittle: "MongoDB", image: require('../image/knowledges/mongodb.webp'), description: "CRUD / NoSQL / Schemas & types / Relations / Framework / JSON", link: "#" },
    {id:8, tittle: "Git", image: require('../image/knowledges/git.webp'), description: "Versions / Github / GithubPages / Teams", link: "#" },
    {id:9, tittle: "Linux", image: require('../image/knowledges/linux.webp'), description: "Terminal Bash / Scripts / Shells", link: "#"}
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
