import axios from 'axios';
import {baseUrl} from "../baseUrl";

export function login(username: string, password: string) : any {
    axios.post( baseUrl + "/login/passwordLogin", {
        username,
        password
    }).then(res => res.data).catch(error => console.log(error))
}

export async function signIn(username: string, password: string) : Promise<any> {
     return axios.post( baseUrl + "/login/signIn", {
        username,
        password
    }).then(res => res).catch(error => console.log(error))
}