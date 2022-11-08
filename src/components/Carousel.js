import React, { useEffect, useRef, useState } from 'react'
import '../styles/carousel.css'
import {motion} from 'framer-motion';

const Carousel = () => {

    const [width, setWidth] = useState(0);
    const slider_wraper = useRef();

    useEffect(()=>{
        setWidth(slider_wraper.current.scrollWidth - slider_wraper.current.offsetWidth)
    },[]);

  return (
    <div className='container_carousel'>
        <div className='headings'>
            <h1 className='tittle_Carousel'>Horizontal image carousel</h1>
        </div>
        <motion.div className='slider_wraper' ref={slider_wraper}
        whileTap={{cursor: "grabbing"}}>
            <motion.div className='inner_carousel'
            drag="x"
            dragConstraints={{right:0, left:-width}}
            >

                <motion.div className='card_carousel' whileHover={{scale:1.1}}>
                    <h2 className='tittle_card_carousel'>E-commerce - AluraWeek</h2>
                    <div className='card_header'>
                        <div className='tittle'>Tecnologias:</div>
                        <div className='sub_tittle'>HTML / CSS / JAVASCRIPT</div>
                    </div>
                    <div className='card_img'>
                        <img className='img_card_slider' src={require('../image/casita.jpg')} alt='IMAGEN CARD'></img>
                    </div>
                    <div className='card_footer'>
                        {/* <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>   */}
                        <motion.button className="btn_project_card" 
                        whileHover={{scale: 1.2}} 
                        whileTap={{cursor:"pointer"}}>Deploy!</motion.button>
                        <motion.button className="btn_project_card" 
                        whileHover={{scale: 1.1}} 
                        whileTap={{cursor:"pointer"}}>Repositorio</motion.button>
                    </div>
                </motion.div>

                <div className='card_carousel'>
                    <h2 className='tittle_card_carousel'>Portfolio</h2>
                    <div className='card_header'>
                        <div className='tittle'>Tecnologias:</div>
                        <div className='sub_tittle'>HTML / CSS / JAVASCRIPT</div>
                    </div>
                    <div className='card_img'>
                        <img className='img_card_slider' src={require('../image/casita.jpg')} alt='IMAGEN CARD'></img>
                    </div>
                    <div className='card_footer'>
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                    </div>
                </div>

                <div className='card_carousel'>
                    <h2 className='tittle_card_carousel'>Barberia</h2>
                    <div className='card_header'>
                        <div className='tittle'>Tecnologias:</div>
                        <div className='sub_tittle'>HTML / CSS / JAVASCRIPT</div>
                    </div>
                    <div className='card_img'>
                        <img className='img_card_slider' src={require('../image/casita.jpg')} alt='IMAGEN CARD'></img>
                    </div>
                    <div className='card_footer'>
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                    </div>
                </div>

                <div className='card_carousel'>
                    <h2 className='tittle_card_carousel'>Aplicacion Hotel Alura</h2>
                    <div className='card_header'>
                        <div className='tittle'>Tecnologias:</div>
                        <div className='sub_tittle'>JAVA / SPRINGBOOT</div>
                    </div>
                    <div className='card_img'>
                        <img className='img_card_slider' src={require('../image/casita.jpg')} alt='IMAGEN CARD'></img>
                    </div>
                    <div className='card_footer'>
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                    </div>
                </div>

                <div className='card_carousel'>
                    <h2 className='tittle_card_carousel'>Juego del Ahorcado</h2>
                    <div className='card_header'>
                        <div className='tittle'>Tecnologias:</div>
                        <div className='sub_tittle'>HTML / CSS / JAVASCRIPT</div>
                    </div>
                    <div className='card_img'>
                        <img className='img_card_slider' src={require('../image/casita.jpg')} alt='IMAGEN CARD'></img>
                    </div>
                    <div className='card_footer'>
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                    </div>
                </div>

                <div className='card_carousel'>
                    <h2 className='tittle_card_carousel'>Decodificador de Texto</h2>
                    <div className='card_header'>
                        <div className='tittle'>Tecnologias:</div>
                        <div className='sub_tittle'>HTML / CSS / JAVASCRIPT</div>
                    </div>
                    <div className='card_img'>
                        <img className='img_card_slider' src={require('../image/casita.jpg')} alt='IMAGEN CARD'></img>
                    </div>
                    <div className='card_footer'>
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                        <i className='icon_card_footer'></i>  
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Carousel