import axios from "axios";


 const http = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

const Token = localStorage.getItem('Token')

http.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    if(Token && config.headers){
        config.headers.Authorization = `Bearer ${Token}`
    }
    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
  });

export default http