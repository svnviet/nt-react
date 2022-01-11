import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";


const userApi = {
    login(data) {
        const url = '/api/token/';
        return axiosClient.post(url, data);
    },
}
export default userApi
