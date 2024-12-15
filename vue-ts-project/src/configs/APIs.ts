import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/'

export const endpoints = {
  login: '/user/login',

  categories: '/categories',
  courses: '/courses',
  lessons: '/lessons',

  rating: '/rating',
}

export const authAPIs = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
}

export default axios.create({
  baseURL: BASE_URL,
})
