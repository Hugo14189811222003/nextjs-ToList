/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Link from 'next/link';
import './page.login.css';
import './page.nubes.css';
import './page.form.css';
import './page.movil.css';
import {useForm} from 'react-hook-form';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import next from 'next';

export default function login(){

    const {register, handleSubmit, formState:{errors}} = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        })

        if(res?.ok){
            router.refresh;
            router.push('/screem/sesion');
            
        } else {
            alert('datos incorrectos');
        }
    })

    return (
        <section>
            <div className='fondo'>
                <div className='move'>
                    <div className='izquierda'>
                        <h1>Bienvenido</h1>
                        <div id="posisionSol"></div>
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
                            <h2>Iniciar sesión</h2>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Gmail o Username</label>
                                    <input type="text" className='textAlignForm'
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: "Este campo es requerido"
                                        }
                                    })}
                                    name="email" id="email" placeholder='Ejemplo: robert@gmail.com'/>
                                </div>
                                {
                                    errors.email && (
                                        <span className='errorText'>
                                            {errors.email.message as string}
                                        </span>
                                    )
                                }

                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input type="password" className='textAlignForm'
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: "este campo es requerido"
                                        }
                                    })}
                                    name="password" id="password" placeholder='* * * * * * * * * * * *'/>
                                </div>
                                {
                                    errors.password && (
                                        <span className='errorText'>
                                            {errors.password.message as string}
                                        </span>
                                    )
                                }
                                <div className='form-solid'>
                                    <div className='registrar'>
                                        <a href="/screem/register">
                                            <h4>No tengo cuenta</h4>
                                        </a>
                                    </div>
                                    <div className='contraseñaOlvidada'>
                                        <a href='/screem/resetPassword'>
                                            <h4>¿Olvidastes al contraseña?</h4>
                                        </a>
                                    </div>
                                </div>

                                <button type='submit'>Enviar</button>

                                <a href='/screem/sesion'>
                                    <h3>Iniciar sesión en otro momento</h3>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}