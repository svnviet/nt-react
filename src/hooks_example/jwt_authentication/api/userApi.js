import axiosClient from "../../../helpers/axiosClient"

const userAuth = {
    login(username, password) {
        const url = 'token/';
        const data = {
            'username': username,
            'password': password
        }
        return axiosClient.post(url, data)
            .then((res) => {
                if (res.data.access) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    console.log(localStorage.getItem("user"))
                    // refreshJWTokenApi(axiosClient)
                    return res.data
                }
                console.log('django', res)
                return res.data
            });
    },

    logOut() {
        console.log('logout')
        localStorage.removeItem("user")
    },

    register(data) {
        console.log(data);
        return axiosClient.post('res_user/register/', data).then((res) => {
            console.log(res);
            if (res.data.access) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    },
}


function refreshJWTokenApi(instance) {
    const refreshToken = window.localStorage.getItem('refresh')
    return instance.post('token/refresh', refreshToken).then((res) => {
        if (res.data.access) {
            localStorage.setItem("token", JSON.stringify(res.data.access));
        }
        return res.data.access
    });
}


export default userAuth
