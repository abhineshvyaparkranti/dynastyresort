 
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://192.168.1.8:8000/api', // Update this
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default axiosInstance;


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dynastyresort.vyaparkranti.com/laravel/api', // Update this
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;