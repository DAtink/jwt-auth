import axios from 'axios';

export const getProducts = () => {
    const token = localStorage.getItem('authToken');
    return axios.get('http://localhost:5003/api/values', {
        headers: {
            "Authorization": "Bearer " + token
        }
    });
};