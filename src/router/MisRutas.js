import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Biography } from '../components/Biography';
import { Contact } from '../components/Contact';
import '../styles/header.css';
import { Home } from '../components/Home';
import { Knowledge } from '../components/Knowledge';
import { Projects } from '../components/Projects';
import AppRouter from './AppRouter';
import ErrorPage from '../components/ErrorPage';


export const MisRutas = () => {


  return (
    <Router>
      <AppRouter/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/bio' element={<Biography/>}/>
        <Route exact path='/knowledge' element={<Knowledge/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
  }