import axios from 'axios'

const blogFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-Type" : "application/json",
        //possivel inserir um token no cabeçalho..

    }
})

export default blogFetch