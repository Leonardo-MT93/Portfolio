import React, { useRef } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();
  return (
    <>
    <Formik
    initialValues={{
        user_name: '',
        user_tittle: '',
        user_email: '',
        user_message: '',
    }}
    validate={(valores)=>{
        let errores = {};
        if(!valores.user_name){
            errores.user_name = 'Ingrese un nombre. Mín 3 caract.';
        }else if(!/[a-zA-Z][a-zA-Z ]/.test(valores.user_name)){
            errores.user_name = 'Sólo inserte letras y espacios';
        }
        if(!valores.user_tittle){
            errores.user_tittle = 'Ingrese el asunto del mensaje';
        }
        if(!valores.user_email){
            errores.user_email = 'Ingrese un email válido';
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.user_email)){
            errores.user_email = 'Email inválido';
        }
        if(!valores.user_message){
            errores.user_message = 'Ingrese un mensaje.';
        }else if((valores.user_message).length < 6){
            errores.user_message = 'Mensaje muy corto. Caracteres mínimos: 6';
        }

        return errores;
    }}
    onSubmit={(valores)=>{
      console.log('Formulario enviado');  
      console.log(valores);
      emailjs.sendForm('service_6n0izp8', 'template_qtvsiqo', form.current, 'F9UhVcH9FxUryBicv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }}
    >
        {({values, handleBlur})=>(
            <Form className='formulario' ref={form}>   
            <div className='div_formulario'>
                <label className='label_style' htmlFor='name'>Nombre: </label>
                <Field type="text" className="input_form" id="name" name='user_name' placeholder="Ingrese su nombre"  value={values.user_name} onBlur={handleBlur}/>
                <ErrorMessage className='error' name='user_name' component='div'></ErrorMessage>
            </div>
            <div className='div_formulario'>
                <label className='label_style' htmlFor='tittle'>Asunto: </label>
                <Field type="text" className="input_form" id="tittle" name='user_tittle' placeholder="Ingrese el asunto"  value={values.user_tittle} onBlur={handleBlur}/>
                <ErrorMessage className='error' name='user_tittle' component='div'></ErrorMessage>

            </div>
            <div className='div_formulario'>
                <label className='label_style' htmlFor='email'>Email: </label>
                <Field type="email" className="input_form" id="email" name='user_email' placeholder="name@example.com"  value={values.user_email} onBlur={handleBlur}/>
                <ErrorMessage className='error' name='user_email' component='div'></ErrorMessage>
            </div>
            <div className='div_formulario'>
                <label className='label_style' htmlFor='message'>Mensaje: </label>
                <Field className="textarea_form" as="textarea" id="message" rows="3" placeholder="Ingrese su mensaje"  name='user_message' value={values.user_message} onBlur={handleBlur}/>
                <ErrorMessage className='error' name='user_message' component='div'></ErrorMessage>
            </div>
            <button type="submit" className="btn_contact">Enviar</button>
            </Form>
        )
        }   
    </Formik>    
    </>
  )
}

export default ContactForm