import api from './axiosInstance'

export const authApi = {
    login: async(data) => {
        const response = await api.post('/auth/login', data)
        return response.data
    },
    logout: async() => {
        const response = await api.post('/auth/logout')
        return response.data
    },
    me: async() => {
        const response = await api.get('/auth/me')
        return response.data
    },
}