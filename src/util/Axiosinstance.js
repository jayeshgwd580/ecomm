import axios from "axios";

const Api_axios_URL = 'https://ecommece-be.herokuapp.com/ecomm/api/v1/'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

export const Axiosinstance = axios.create({
    headers: Api_axios_URL,
    timeout: 5000
})