import {requestToken} from "@/request/axios";

export const commonGet = (url: string, data?: any) => {
    return requestToken.get(url, {
        data: {
            ...data
        }
    }).then(res => res.data).catch(err => console.log(err))
}

export const commonPost = (url: string, data?: any) => {
    return requestToken.post(url, {
        ...data
    }).then(res => res.data).catch(err => console.log(err))
}