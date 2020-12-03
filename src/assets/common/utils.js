import axios from 'axios'
export function POST(url, body) {
  const HOST = `/handler/`
  console.log(`${HOST}${url}`)
  return axios.post(`${HOST}${url}`, body)
}