import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://marma.bdeducation.org.bd/api/',
    headers: {
        'Content-Type': 'application/json',
      },
    withCredentials: true
    
});

instance.interceptors.response.use(function(response) {
    return response;
  })

export default instance;