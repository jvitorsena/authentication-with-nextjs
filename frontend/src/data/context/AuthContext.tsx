import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import Router from "next/router"
import Api from '../api/api.js'
import * as cookie from 'cookie'

interface Usuario {
    id: string
    name: string
    user: string
    iat: string
    exp: string
    token: string
}

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?: (usuario: string, senha: string) => Promise<any>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
    configurarSessao?: () => (userData: string) => Promise<any>
    userSync?: (user: string) => Promise<any>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(userData): Promise<Usuario> {
    // const token = await usuarioFirebase.getIdToken()
    return {
        id: userData.id,
        name: userData.name,
        user: userData.user,
        iat: userData.iat,
        exp: userData.exp,
        token: userData.token
    }
} 

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-cod3r-auth', 'logado', {
            expires: 7
        })
        // console.log(Cookies.get('admin-template-cod3r-auth'))

    } else {
        Cookies.remove('admin-template-cod3r-auth')
    }
}

export function AuthProvider(props) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [msg, setMsg] = useState({
        type: '',
        mensagem: ''
    })

    async function configurarSessao(userData) {
        if (userData?.user) {
            // console.log('tem usuario')
            // console.log(userData)
            const usuario = await usuarioNormalizado(userData)
            // console.log(usuario)
            setUsuario(userData)
            // gerenciarCookie(true)
            // setCarregando(false)
            return usuario
        } else {
            setUsuario(null)
            // gerenciarCookie(false)
            // setCarregando(false)
            return null
        }
    }

    async function userSync(user){
        void async function() {
            if(Cookies.get('admin')){
                const { api, headers } = Api
                const cookie = Cookies.get('admin')
                const res = await api.post('/users/token', {token: cookie}, headers)
                    .then((response) => {return response.data[0]})
                // configurarSessao(res)
                // return () => res()
                // setUsuario(res)
            }
        }()
    }

    /* Inicio login */

    async function login(usuario, senha) {
        try {
            await Cookies.remove('admin')
            const headers = { 'headers': { 'Content-Type': 'application/json' } }
            await axios.create({ baseURL: 'http://localhost:5000' })
                .post("/signin", { user: usuario, password: senha }, headers)
                .then((response) => {
                    configurarSessao(response.data)
                    Cookies.set('admin', response.data.token)
                    Router.push('/')
                })
                .catch((err) => {
                    setMsg({
                        type: 'error',
                        mensagem: err.response.data
                    })
                })
        } finally {
            return msg
        }
    }


    useEffect(() => {
        void async function() {
            if(Cookies.get('admin')){
                const { api, headers } = Api
                const cookie = Cookies.get('admin')
                const res = await api.post('/users/token', {token: cookie}, headers)
                    .then((response) => {return response.data[0]})
                // configurarSessao(res)
                // return () => res()
                setUsuario(res)
            }
        }()



    }, [])
    /* Fim Login */

    /*     async function logout() {
            try {
                setCarregando(true)
                await firebase.auth().signOut()
                await configurarSessao(null)
            } finally {
                setCarregando(false)
            }
        } */

    /* useEffect(() => {
        if (Cookies.get('admin-template-cod3r-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, []) */

    return (
        <AuthContext.Provider value={{
            userSync,
            usuario,
            carregando,
            login,
            // cadastrar,
            // loginGoogle,
            // logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext