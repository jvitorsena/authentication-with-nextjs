import '../styles/globals.css'
import { AuthProvider } from '../data/context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>

  )
}

export async function getServerSideProps(context) {

  const { api, headers } = Api
  const parsedCookie = cookie.parse(context.req.headers.cookie)
  const Cookie = parsedCookie.admin
  const res = await (await api.post("/validateToken", { token: Cookie }, headers)).data
  console.log(res)
  return {
      props: { res }, // will be passed to the page component as props
  }
}

export default MyApp
