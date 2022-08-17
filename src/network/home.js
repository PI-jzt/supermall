import request from './request'
export default {
    getBannerDate() {
        return request.requestDate({ url: '../assets/testJson/banner.json' })
    },
    getReccommedDate() {
        return request.requestDate({ url: '' })
    }
}