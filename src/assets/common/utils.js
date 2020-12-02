import axios from 'axios'
export function POST(url, body) {
  console.log('url is:', url)
  const HOST = `https://mydear.site/handler/`
  console.log(`${HOST}${url}`)
  return axios.post(`${HOST}${url}`, body)
}