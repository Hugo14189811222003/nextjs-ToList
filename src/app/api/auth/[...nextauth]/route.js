import CredentialsProviders from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import {signIn} from 'next-auth/react';
import { stringify } from 'querystring';

export const AuthOption = {
    providers:[
        CredentialsProviders({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Example: example@gmail.com'
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: '*********'
                }
            },
            async authorize(credentials, req){
                const url = `https://nodejs-mysql-railwey-production.up.railway.app/api/usuarios/login`
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password
                    })
                })

                if(!res.ok){
                    console.error('Error de autenticación', await res.text());
                    throw new Error('Credenciales invalidas');
                }

                const user = await res.json();

                if(user){
                    return user;
                } else {
                    return null;
                }
            }
        }),
    ],
    page: {
        signIn: 'screem/login'
    }
}

const nextfuction = NextAuth(AuthOption);
export {nextfuction as GET, nextfuction as POST}
