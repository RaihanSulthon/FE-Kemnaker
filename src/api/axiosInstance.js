import ENV from "@/lib/environments"

const api = axios.create({
    baseURL: ENV.apiUrl,
    headers: {
        Accept: 'application/json'
    }
})

api.defaults.headers.post['Content-Type'] = 'application/json'

// interceptors..

export default api