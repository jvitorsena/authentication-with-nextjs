import ForcarAutenticacao from "../components/auth/ForcarAutenticacao";
import Cookie from 'js-cookie'
import { useState } from "react";
import Api from '../data/api/api.js'
import * as cookie from 'cookie'

export default function Home(props) {

  return (
    <>
      <ForcarAutenticacao valid={props.res}>
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="bg-slate-300 p-4 rounded-2xl shadow-lg flex flex-col items-end">
            <h1 className="text-3xl font-bold p-5 text-gray-700">
              Bem vindo ao meu sistema !
            </h1>

          </div>
        </div>
      </ForcarAutenticacao>
    </>
  )
}

export async function getServerSideProps(context) {

  const { api, headers } = Api
  const parsedCookie = cookie.parse(context.req.headers.cookie)
  const Cookie = parsedCookie.admin
  const res = await (await api.post("/validateToken", { token: Cookie }, headers)).data
  return {
    props: { res }, // will be passed to the page component as props
  }
}