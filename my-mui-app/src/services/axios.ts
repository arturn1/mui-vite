import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: 'https://localhost:7075/api/',
    timeout: 1000,
});

api.interceptors.request.use(request => {
    console.log('interceptado: ' + JSON.stringify(request))
    return request
}, (error: AxiosError) => {
    console.log('Erro interceptado: ' + JSON.stringify(error))
})

api.interceptors.response.use(
    response => {
        return response;
    },
    (error: AxiosError) => {
        console.log('axios_response_error', JSON.stringify(error.response));
        // Interceptando e tratando erros na resposta
        if (error.response) {
            return Promise.reject(JSON.stringify(error.response!.data));
        } else if (error.request) {
            // A solicitação foi feita, mas não houve resposta do servidor
            console.error('Sem resposta do servidor:', error.request);
            return Promise.reject('Sem resposta do servidor.');

        } else {
            console.error('Erro durante a solicitação:', error.message);
            return Promise.reject('Erro durante a solicitação:');

        }

    }
);

export default api