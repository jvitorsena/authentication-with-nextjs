import { Dialog, Transition } from '@headlessui/react'
import Router from 'next/router'
import { Fragment, useState } from 'react'
import AuthInput from './auth/AuthInput'
import Api from '../data/api/api'
import {IconeAtencao} from './icons/index'

interface User {
  id?: Number
  user?: String
  userName?: String
  createdAt?: String
  updatedAt?: String
  showModal?: (newValue: any) => void
  password: String
}

export default function MyModal(props: User) {
  let [isOpen, setIsOpen] = useState(true)

  const [id, setId] = useState('')
  const [user, setUser] = useState(props.user)
  const [nameUser, setNameUser] = useState(props.userName)
  const [createdAt, setCreatedAt] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  function closeModal() {
    // window.location.reload()
    // setIsOpen(false)
    props.showModal(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  console.log(props.id)
  const put = async (user, name, password) => {
    const { api, headers } = Api
    const url = `/users/${props.id}`

    await api.put(url, { user: user, name: name, password: password }, headers)
      .then((response) => {
        window.location.reload()
      }).catch((err) => setError(err.response.data))
  }

  return (
    <>
      {/*             <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {/* {props.title} */}
                </Dialog.Title>
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
                <div className="mt-2 text-sm text-gray-500 flex flex-col items-end pr-10">
                  <AuthInput label="Id:" changeValue={setId} value={id} placeholder={props.id} type="text" disabled={true} />
                  <AuthInput label="Usuario:" changeValue={setUser} value={user} placeholder={props.user} type="text" disabled={true} />
                  <AuthInput label="Nome:" changeValue={setNameUser} value={nameUser} placeholder={props.userName} type="text" disabled={false} />
                  <AuthInput label="Nova senha:" changeValue={setPassword} value={password} type="password" disabled={false} placeholder="**********" />
                  <AuthInput label="Created at:" changeValue={setCreatedAt} value={createdAt} placeholder={props.createdAt.substr(0, 16).split('-').join('/')} type="text" disabled={true} />
                  <AuthInput label="Updated at:" changeValue={setUpdatedAt} value={updatedAt} placeholder={props.updatedAt.substr(0, 16).split('-').join('/')} type="text" disabled={true} />
                </div>

                <div className="mt-4 flex flex-col items-end">
                  <div>
                    <button
                      type="button"
                      className="mr-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      // onClick={closeModal}
                      onClick={() => put(user, nameUser, password)}
                    >
                      Salvar
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      // onClick={closeModal}
                      onClick={() => closeModal()}
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* </div> */}
    </>
  )
}
