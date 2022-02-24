import AuthInput from "./auth/AuthInput"
import Api from '../data/api/api.js'
import { useState } from "react"
import Modal from './TableModal'
import { IconeAtencao } from "./icons"

export default function NewUser(props) {

    const [password, setPassword] = useState('')
    const [newUser, setNewUser] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })
    const [error, setError] = useState('')

    async function register(user, name, password) {

        const { api, headers } = Api
        await api.post("/users", { user: user, name: name, password: password }, headers)
            .then((response) => {
                setStatus({
                    type: 'success',
                    mensagem: response.data.mensagem
                })
            }).catch((err) => {
                if (err.response) {
                    setError(err.response.data)
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro: Tente mais tarde!"
                    });
                }
            })

        await status.type == 'success' ? window.location.reload() : null
    }

    return (
        <div className="bg-slate-300 p-4 rounded-2xl shadow-lg flex flex-col items-center">
            {(status.type == 'success') ? <Modal title="Usuario cadastrado!" subTitle={status.mensagem} btnTitle="sair" /> : <p className="text-red-600">{status.mensagem}</p>}
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
            <h1 className="text-3xl font-bold p-5 text-gray-700">
                Novo Usuario
            </h1>
            <div className="flex flex-col items-end">
                <AuthInput
                    label="Name: "
                    value={newUser}
                    type="text"
                    changeValue={setNewUser}
                    disabled={false}
                />
                <AuthInput
                    label="User: "
                    value={nameUser}
                    type="text"
                    changeValue={setNameUser}
                    disabled={false}
                />
                <AuthInput
                    label="Password: "
                    value={password}
                    type="password"
                    changeValue={setPassword}
                    disabled={false}
                />
                <div className="flex flex-row">
                    {/* Register new user */}
                    <button
                        onClick={() => register(nameUser, newUser, password)}
                        onKeyPress={(e) => console.log(e)}
                        className={`
                    bg-green-500 hover:bg-green-400
                    text-white rounded-lg px-11 py-3
                    shadow-lg mt-8
                  `}>
                        Registrar
                    </button>
                    {/* Back menu */}
                    <button
                        onClick={() => props.setProps('welcome')}
                        onKeyPress={(e) => console.log(e)}
                        className={`
                    bg-green-500 hover:bg-green-400
                    text-white rounded-lg px-11 py-3
                    shadow-lg mt-8 ml-6
                  `}>
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    )
}