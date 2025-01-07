'use client'
import Link from 'next/link';
import { useState } from 'react';
import './page.register.css';
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
export default function register(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onsubmit = handleSubmit(async (data) => {
        localStorage.setItem('dataCredentials', JSON.stringify(data));
        router.push('/screem/register/password');
    })
    return (
        <section>
            <div className='fondo'>
                <div className='move'>
                    <div className='izquierda'>
                        <h1>Bienvenido</h1>
                        <div className='sol'>
                        <div className='nubes'>
                            {/*original*/}
                            <div className='nube1'></div>
                            <div className='nube2'></div>
                            <div className='nube3'></div>
                            <div className='nube4'></div>
                            <div className='nube5'></div>
                            <div className='nube6'></div>
                            <div className='nube7'></div>
                            {/*sombras*/}
                            <div className='nube8'></div>
                            <div className='nube9'></div>
                            <div className='nube10'></div>
                            <div className='nube11'></div>
                            <div className='nube12'></div>
                            <div className='nube13'></div>
                            <div className='nube14'></div>
                        </div>
                        </div>
                    </div>
                    <div className='derecha'>
                        <div className='formulario'>
                            <h2>Registrarse</h2>
                            <form onSubmit={onsubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text"
                                    {...register('name', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    })}
                                    name="name" id="name" placeholder='Ejemplo: robert'/>
                                    {
                                        errors.name && (
                                            <span className='errorText'>
                                                {errors.name.message as string}
                                            </span>
                                        )
                                    }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Nombre de usuario</label>
                                    <input type="text" 
                                    {...register('username', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    })}
                                    name="username" id="username" placeholder='Ejemplo: robert_43'/>
                                    {
                                        errors.username && (
                                            <span className='errorText'>{errors.username.message as string}</span>
                                        )
                                    }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Gmail</label>
                                    <input type="email" 
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    })}
                                    name="email" id="email" placeholder='Ejemplo: robert@gmail.com'/>
                                    {
                                        errors.email && (
                                            <span className='errorText'> {errors.email.message as string} </span>
                                        )
                                    }
                                </div>

                                <div className='form-solid'>
                                    <div className='registrar'>
                                        <a href="/screem/login">
                                            <h4>Ya tengo cuenta</h4>
                                        </a>
                                    </div>
                                </div>

                                
                                <button type='submit'>Siguiente</button>
                                
                                <a href='/'>
                                    <h3>Registrarse en otro momento</h3>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}