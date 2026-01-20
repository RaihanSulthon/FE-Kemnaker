import ENV from "@/lib/environments"
// import { useAuth } from "@/store"
import axios from "axios"

const api = axios.create({
    baseURL: ENV.apiUrl,
    headers: {
        Accept: 'application/json'
    }
})

api.defaults.headers.post['Content-Type'] = 'application/json'

// interceptors..
// api.interceptors.request.use(
//     config => {
//     // You can add authorization headers or other custom headers here
//     const auth = useAuth.getState()
//     if (auth?.token ) {
//         config.headers.Authorization = `Bearer ${auth.token}`
//     }
//     // const token = localStorage.getItem('access-token')
//     // if (token) {
//     //     config.headers.Authorization = `Bearer ${token}`
//     // }
//     return config
//     },
//     async (error) => await Promise.reject(error)
// )

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       // useToken.getState().removeToken()
//       useAuth.getState().removeToken()
//       window.location.href = '/login'
//     }

//     if (error.response.status === 403) {
//       window.location.href = '/permission-denied'
//     }

//     return await Promise.reject(error)
//   }
// )

export default api