import axios from 'axios'
axios.interceptors.request.use((config) => {

    return config
}, error => {
    return error
})
axios.interceptors.response.use((response) => {

    return response.data
}, error => {
    return error
})
export default {
    requestDate(config) {
        const createAxios = axios.create({
            baseURL: 'http://123.207.32.32:8080',
            timeout: 3000

        })

        return createAxios(config)
    }
}