'use client'
import Link from 'next/link';
import './page.register.password.css';
import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'

export default function password(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit, formState: {errors}} = useForm();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dataCredentials, setDataCredentials] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const dataInfo = JSON.parse(localStorage.getItem('dataCredentials'));
        setDataCredentials(dataInfo);
    }, [])
    const onsubmit = handleSubmit(async (data) => {
        const userCreated = await fetch('https://nodejs-mysql-railwey-production.up.railway.app/api/usuarios', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: dataCredentials.name,
                username: dataCredentials.username,
                email: dataCredentials.email,
                password: data.password
            })
        })
        if(userCreated){
            alert('Se completo con exito su registro');
            router.push('/screem/login');
            return;
        }
        alert('Error al registrarte')

        
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
                                    <label htmlFor="password">Contraseña</label>
                                    <input type="password" 
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    })}
                                    name="password" id="password" placeholder='******'/>
                                </div>

                                <div className='form-solid'>
                                    <div className='registrar'>
                                        <a href="/screem/login">
                                            <h4>Ya tengo cuenta</h4>
                                        </a>
                                    </div>
                                </div>

                                <button>Guardar</button>

                                <a href='/screem/sesion'>
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