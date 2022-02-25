/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import AuthInput from "../components/auth/AuthInput"
import Image from "next/image"
import Cookie from 'js-cookie'
import axios from "axios"
import Router from "next/router"
import { IconeAtencao } from "../components/icons"

export default function Login() {

  const [user, setUser] = useState('')
  const [password, setPasswd] = useState('')
  const [error, setError] = useState('')

  async function login(usuario, senha) {
    try {
      await Cookie.remove('admin')
      const headers = { 'headers': { 'Content-Type': 'application/json' } }
      await axios.create({ baseURL: 'http://localhost:5000' })
        .post("/signin", { user: usuario, password: senha }, headers)
        .then((response) => {
          Cookie.set('admin', response.data.token)
          Router.push('/')
        })
        .catch((err) => {
          setError(err.response.data)
        })
    } finally {
      // 
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-slate-300 p-4 rounded-2xl shadow-lg flex flex-col items-end">

        <div className="w-full flex flex-col items-center py-3">
          <Image src="/images/logo.png" width={100} height={100} className="shadow-lg"></Image>
        </div>

        {error ? (
          <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
            {IconeAtencao()}
            <span className="ml-3">{error}</span>
          </div>
        ) : false}

        <AuthInput
          label="User:"
          value={user}
          type="text"
          changeValue={setUser}
          disabled={false}
        />

        <AuthInput
          label="Password:"
          value={password}
          type="password"
          changeValue={setPasswd}
          disabled={false}
        />

        <div className="mt-6 w-full flex flex-col items-center">
          <button
            onClick={() => login(user, password)}
            // onKeyPress={(e) => console.log(e)}
            className={`
              bg-green-500 hover:bg-green-400
              text-white rounded-lg px-11 py-3
              shadow-lg
            `}>
            Login
          </button>

        </div>
      </div>
    </div>
  )
}