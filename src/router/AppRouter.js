import {NavLink } from "react-router-dom";
import {motion} from 'framer-motion'

export default function AppRouter() {
  return (
    <div className="header">
        <nav className="menu_header">
            <ul className="listado_header">
                <li className="listado"><NavLink to="/" className="navlink"><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/homeicon.png')}></motion.img></NavLink></li>
                <li className="listado"><NavLink to="/bio" className="navlink"><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/bioicon.png')}></motion.img></NavLink></li>
                <li className="listado"><NavLink to="/knowledge" className="navlink"><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/knowledgeicon.png')}></motion.img></NavLink></li>
                <li className="listado"><NavLink to="/projects" className="navlink"><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/projecticon.png')}></motion.img></NavLink></li>
                <li className="listado"><NavLink to="/contact" className="navlink"><motion.img whileHover={{scale: 1.35, transition: {duration: 0.15}}} whileTap={{scale: 0.9}} className='icon' alt='icono navbar' src={require('../image/icon_contact.png')}></motion.img></NavLink></li>
            </ul>
        </nav>
    </div>
    
  )
}
