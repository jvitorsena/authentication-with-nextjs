import ForcarAutenticacao from "../components/auth/ForcarAutenticacao";
import Api from '../data/api/api.js'
import * as cookie from 'cookie'
import { useState } from "react";
import NewUser from "../components/NewUser";
import Welcome from "../components/Welcome"
import Table from '../components/Table'

interface user {
  id: Number
  name: string
  user: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function Home(props) {


  console.log(props.getAllUsers)

  const [visible, setVisible] = useState<'welcome' | 'register' | 'table'>('welcome')

  const user: user = props.userLoged[0]

  return (
    <>
      <ForcarAutenticacao validation={props.validationToken} >
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
          {/* Tela inicial */}
          {(visible == 'welcome') ? (
            <Welcome 
              userName={user?.name}
              setProps={setVisible}
            />
          ) : null}
          {/* Tela de registro */}
          {(visible == 'register') ? (
            <NewUser
              setProps={setVisible}
            />
          ) : null}
          {(visible == 'table') ? (
            <Table
              usersData={props.getAllUsers}
              setProps={setVisible}
            />
          ): null}

        </div>
      </ForcarAutenticacao>
    </>
  )
}

export async function getServerSideProps(context) {


  const { api, headers } = Api
  const parsedCookie = cookie.parse(context.req.headers.cookie ?? '')
  const Cookie = parsedCookie.admin ?? ''
  const validationToken = await (await api.post("/validateToken", { token: Cookie }, headers)).data
  const userLoged = await (await api.post('/users/token', { token: Cookie }, headers)).data
  const getAllUsers = await (await api.get('/users')).data
  return {
    props: { validationToken, userLoged, getAllUsers }, // will be passed to the page component as props
  }
}