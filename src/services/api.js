import axios from 'axios'

let domain = 'http://localhost:5000'
export const createUser = (data) => {
    return new Promise((resolve) => {
        let url = `${domain}/createUser`
        let body = {
            username:data['username'],
            password:data['password'],
            pname:data['pname'],
            fname:data['fname'],
            lname:data['lname'],
            nickname:data['nickname'],
            phone:data['phone'],
            status_user:data['status_user']
        }
        let header = {
            'Content-Type': 'application/json'
        }
        axios.post(url,body,{headers: header}).then((res) => {
            resolve(res)
        }).catch((err) => {
            resolve(false)
        })
    })
}