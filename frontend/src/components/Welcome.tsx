import Router from "next/router";
import Cookies from 'js-cookie'

export default function Welcome({ userName, setProps }) {

    function logout() {
        Cookies.remove('admin')
        Router.push('/login')
    }

    return (

        <div className="bg-slate-200 p-4 rounded-2xl shadow-lg flex flex-col items-end">
            <h1 className="text-3xl font-bold p-5 text-gray-700">
                Bem vindo ao meu sistema !
                <p className="text-base">Usuario: {userName}</p>
            </h1>
            <div className="flex flex-row">
                <button
                    onClick={() => setProps('register')}
                    onKeyPress={(e) => console.log(e)}
                    className={`
              bg-green-500 hover:bg-green-400
              text-white rounded-lg px-6 py-3 ml-5
              shadow-lg
            `}>
                    Novo Usuario
                </button>
                <button
                    onClick={() => logout()}
                    onKeyPress={(e) => console.log(e)}
                    className={`
              bg-red-600 hover:bg-red-500
              text-white rounded-lg px-11 py-3 ml-5
              shadow-lg
            `}>
                    Sair
                </button>
            </div>
            <div>
            <button
                    onClick={() => setProps('table')}
                    onKeyPress={(e) => console.log(e)}
                    className={`
              bg-green-500 hover:bg-green-400
              text-white rounded-lg px-7 py-3 mt-4
              shadow-lg
            `}>
                    Usuarios cadastrados
                </button>
            </div>

        </div>
    )
}