import axios from 'axios';

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://ih-countries-api.herokuapp.com${path}`,
        })
    }
}

export default InitAxios;