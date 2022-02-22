import { TrashIcon } from "./icons"
import Api from "../data/api/api"
import axios from 'axios'
import { useEffect, useState } from "react";
import Modal from "./TableModal";

interface UserProps {
    id: number
    name: string
    user: string
    password: string
    token: string
    isActive: boolean
    createdAt: string
    updatedAt: string
}

export default function Example({ usersData, setProps }) {

    const [showModal, setShowModal] = useState<Boolean>(false)
    const [userName, setUserName] = useState('')

    const { api, headers } = Api

    const del = async function (atr, name) {

        const url = "http://localhost:5000/users/".concat(atr)

        const headers = { 'headers': { 'Content-Type': 'application/json' } }
        const users = await axios.delete(url, { data: {} })
            .then((response) => {
                console.log(response.data)
            })
        // setUserName(name)
        setShowModal(true)
    }

    // console.log(props.usersData)
    return (
        <div className="flex flex-col">
            {(showModal) ? <Modal title="Usuario deletado" btnTitle="sair" subTitle={userName} /> : null}
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Data Criação
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Data Alteração
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Ativo
                                    </th>

                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {usersData.map((person) => (
                                    <tr key={person.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {/*                           <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src="" alt="" />
                          </div> */}
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                    <div className="text-sm text-gray-500">{person.user}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap" style={{ textAlign: 'center' }}>
                                            <div className="text-sm text-gray-900">{person.createdAt.substr(0, 10).split('-').reverse().join('/')}</div>
                                            <div className="text-sm text-gray-500">{ }</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap" style={{ textAlign: 'center' }}>
                                            <div className="text-sm text-gray-900">{person.updatedAt.substr(0, 10).split('-').reverse().join('/')}</div>
                                            <div className="text-sm text-gray-500">{ }</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {(person.isActive) ? 'ativo' : 'desativo'}
                                            </span>
                                        </td>
                                        <td className="flex flex-row items-center px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-3">
                                                Edit
                                            </a>
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                <button onClick={() => del(person.id, person.name)}>
                                                    {TrashIcon}
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        <div className="bg-white w-full flex flex-col items-end">
                            <button
                                onClick={() => setProps('welcome')}
                                onKeyPress={(e) => console.log(e)}
                                className={`
                                    bg-green-600 hover:bg-green-500
                                    text-white rounded-lg px-11 py-3 ml-5
                                    shadow-lg mr-9 mb-4 mt-6
                                    `}>
                                Voltar
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
