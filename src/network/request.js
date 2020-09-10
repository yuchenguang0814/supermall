import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })
    //拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })
    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    //发送请求
    return instance(config)
}