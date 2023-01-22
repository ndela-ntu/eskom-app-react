import axios from 'axios';

export default axios.create({
    baseURL: 'https://loadshedding.eskom.co.za/LoadShedding/',
   // headers: {'ngrok-skip-browser-warning':'true'}
})