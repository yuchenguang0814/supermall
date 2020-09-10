import {request} from './request'

export function GetHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}  