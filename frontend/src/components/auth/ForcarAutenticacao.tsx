import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import Api from '../../data/api/api'
import Modal from './ModalWarningAuth'

interface ResProps {
    validation: Boolean
    children: Object
}


export default function ForcarAutenticacao(props: ResProps) {

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


    if (props.validation) {
        return renderizarConteudo()
    } else if (!props.validation) {
        return (
            <>
                <Modal
                    title='Falha ao acessar esta página !'
                    subTitle='Para ter acesso ao sistema, por favor faça o login'
                    btnTitle='Fazer login'
                />
            </>
        )
    } else {
        return null
    }
}

