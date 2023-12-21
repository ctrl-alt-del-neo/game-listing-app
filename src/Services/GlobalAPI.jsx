import axios from "axios";
const key ="9a43e59080b5415fb6eab3bfa7475714"
const axiosCreate=axios.create({
    baseURL:"https://api.rawg.io/api"
})

const getGenereList = axiosCreate.get('/genres?key='+key);

export default{
    getGenereList
}