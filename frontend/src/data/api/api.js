import axios from 'axios'

/* async function api() {
    await axios.create({baseURL: "http://localhost:5000"})
}
 */
const api = axios.create({baseURL: "http://localhost:5000"})

const headers = { 'headers': { 'Content-Type': 'application/json' } }

export default {api, headers}


/* export default axios.create(
    {baseURL: "http://localhost:5000"}
) */