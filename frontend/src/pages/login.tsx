import { useState } from "react"
import AuthInput from "../components/AuthInput"
import Image from "next/image"
import Cookie from 'js-cookie'
import axios from "axios"
import Router from "next/router"

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPasswd] = useState('')
  const [msg, setMsg] = useState({
    type: '',
    mensagem: ''
  })

  const signin = async (user, senha) => {
    try {
      await Cookie.remove('admin')
      const headers = { 'headers': { 'Content-Type': 'application/json' } }
      await axios.create({ baseURL: 'http://localhost:5000' })
        .post("/signin", { user: user, password: senha }, headers)
        .then((response) => {
          Cookie.set('admin', response.data.token)
          Router.push('/')
        })
        .catch((err) => {
          setMsg({
            type: 'error',
            mensagem: err.response.data
          })
        })
    } finally {

    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-slate-300 p-4 rounded-2xl shadow-lg flex flex-col items-end">

        <div className="w-full flex flex-col items-center py-3">
          <Image src="/images/logo.png" width={100} height={100} className="shadow-lg"></Image>
        </div>
        {msg.type === 'error' ? <p style={{ color: "red" }}>{msg.mensagem}</p> : ""}
        <AuthInput
          label="User:"
          value={email}
          type="text"
          changeValue={setEmail}
        />

        <AuthInput
          label="Password:"
          value={password}
          type="password"
          changeValue={setPasswd}
        />

        <div className="mt-6 w-full flex flex-col items-center">
          <button
            onClick={() => signin(email, password)}
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