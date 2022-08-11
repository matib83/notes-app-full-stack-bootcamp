import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  //Ver despues para que era esto, no me acuerdo
  // const nonExisting = {
  //   id: 10000,
  //   content: 'This note is not saved to server',
  //   date: '2019-05-30T17:30:31.098Z',
  //   important: true,
  // }
  // return request.then(response => response.data.concat(nonExisting))
  return request.then(response => response.data)
}

const create = (newObject, {token}) => {
  // Este config es de Axios, para poder mandar el token en el HEADER de la petición
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const request = axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }