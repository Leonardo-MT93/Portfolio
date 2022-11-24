import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ImageSlider(){
    let settings = {
        dot:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint:780,
                settings: {
                    slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    }
    return(
        <Slider {...settings}>
            <div className="card-wrapperr">
                <div className="card">
                    <div className="card-image">
                        <img className="imgCardCarousel" src={require('../image/projects/Portfolio_OracleOne.png')} alt="proyecto_portfolio"></img>
                    </div>
                    
                    <div className="CardDetails">
                        <h2 className="tittleCard_carousel">Portfolio - Alura</h2>
                        <p className="descriptionCard_carousel">Desafio realizado en OracleOne. La misma es Mobile Responsive.</p>
                    </div>
                    <div className="buttonsCard">
                        <button className="btn_carousel"><a className="link_demostration" href="https://leonardo-mt93.github.io/Portfolio_2022/">Demo</a></button>
                        <button className="btn_carousel"><a className="link_repositorio" href="https://github.com/Leonardo-MT93/Portfolio_2022">Repositorio</a></button>
                    </div>
                </div>
                
            </div>
            <div className="card-wrapperr">
                <div className="card">
                    <div className="card-image">
                        <img className="imgCardCarousel" src={require('../image/projects/JuegoAhorcado.png')} alt="proyecto_ahorcado"></img>
                    </div>
                    
                    <div className="CardDetails">
                        <h2 className="tittleCard_carousel">Juego Ahorcado</h2>
                        <p className="descriptionCard_carousel">Desafio realizado en Oracle. Aplicamos Canva en Javascript</p>
                    </div>
                    <div className="buttonsCard">
                        <button className="btn_carousel"><a className="link_demostration" href="https://leonardo-mt93.github.io/Challengue02---OracleONE---2.0/">Demo</a></button>
                        <button className="btn_carousel"><a className="link_repositorio" href="https://github.com/Leonardo-MT93/Challengue02---OracleONE---2.0">Repositorio</a></button>
                    </div>
                </div>
                
            </div>
            <div className="card-wrapperr">
                <div className="card">
                    <div className="card-image">
                        <img className="imgCardCarousel" src={require('../image/projects/ecommerce.png')} alt="proyecto_ecommerce"></img>
                    </div>
                    
                    <div className="CardDetails">
                        <h2 className="tittleCard_carousel">Ecommerce - AluraWeek</h2>
                        <p className="descriptionCard_carousel">Desafio realizado en Oracle. La misma trata sobre un e-commerce aplicando CRUD con Javascript </p>
                    </div>
                    <div className="buttonsCard">
                        <button className="btn_carousel"><a className="link_demostration" href="https://leonardo-mt93.github.io/E-commerce_AluraWeek/">Demo</a></button>
                        <button className="btn_carousel"><a className="link_repositorio" href="https://github.com/Leonardo-MT93/E-commerce_AluraWeek">Repositorio</a></button>
                    </div>
                </div>
                
            </div>
            <div className="card-wrapperr">
                <div className="card">
                    <div className="card-image">
                        <img className="imgCardCarousel" src={require('../image/projects/HotelAlura.png')} alt="proyecto_HotelAlura"></img>
                    </div>
                    
                    <div className="CardDetails">
                        <h2 className="tittleCard_carousel">Hotel Alura App</h2>
                        <p className="descriptionCard_carousel">
                            Aplicacion en Java para un Hotel y conectamos la misma a una base de datos. 
                        </p>
                    </div>
                    <div className="buttonsCard">
                        <button className="btn_carousel"><a className="link_demostration" href="https://vimeo.com/manage/videos/772893200">Demo</a></button>
                        <button className="btn_carousel"><a className="link_repositorio" href="https://github.com/Leonardo-MT93/Hotel-Alura---OracleOne">Repositorio</a></button>
                    </div>
                </div>
                
            </div>
        </Slider>
    )
}

export default ImageSlider;

