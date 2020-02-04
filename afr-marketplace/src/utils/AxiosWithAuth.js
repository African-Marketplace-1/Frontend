import axios from 'axios';

export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token')
   
    return axios.create({
        baseURL: 'https://african-marketplace-2020.herokuapp.com/',
        headers: {
            // 'Content-Type' : 'application/json',
            'authorization': `${token},
        }
    })
}