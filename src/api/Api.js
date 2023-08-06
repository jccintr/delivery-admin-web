

//const BASE_API = 'localhost:8000/api';
//const BASE_API = 'http://192.168.0.117:8000/api';
const BASE_API = 'https://brazped-api.js-software.tech/api';

export default {
 // base_storage: 'http://192.168.0.117:8000/storage',
  base_storage: 'https://brazped-api.js-software.tech/storage',


    login: async (email, password) => {
        const response = await fetch(`${BASE_API}/auth/login2`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
       // const json = await req.json();
        return response;
    },
    getUser: async (token) => {
        const response = await fetch(`${BASE_API}/user`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        return response;
    },
    
    addTenant: async (token,fd) => {
        const response = await fetch(`${BASE_API}/tenant`, {
            method: 'POST',
            headers: {
               
                'Authorization': 'Bearer ' + token
            },
            body: fd
        });
       return response;
    },
    getTenants: async (token) => {
        const response = await fetch(`${BASE_API}/tenant`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        return response;
    },
   

};

