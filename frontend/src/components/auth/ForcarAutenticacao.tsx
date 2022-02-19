import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import Api from '../../data/api/api'
import Modal from '../../components/Modal'
import * as cookie from 'cookie'

export default function ForcarAutenticacao(props) {

    function renderizarConteudo() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} />
            </div>
        )
    }

    function error() {
        return (
            <>
                <h1>Deslogado</h1>
            </>
        )
    }


    if (props.valid) {
        return renderizarConteudo()
    } else if (!props.valid) {
        return (
            <>
                <Modal />
            </>
        )
    } else {
        return null
    }
}

