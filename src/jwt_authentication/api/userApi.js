import axiosClient from "../../helpers/axiosClient";

const userAuth = {
    login(data) {
        const url = 'token/';
        return axiosClient.post(url, data)
            .then((res) => {
                if (res.data.accessToken) {
                    localStorage.setItem("refresh", JSON.stringify(res.data.refresh));
                    refreshJWTokenApi(axiosClient)
                    return res.data
                }
                return res.data
            });
    },

    logout() {
        console.log('logout')
        localStorage.removeItem("refresh")
    },

    register(data) {
        console.log(data);
        return axiosClient.post('res_user/register/', data).then((res) => {
            console.log(res);
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
    }
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