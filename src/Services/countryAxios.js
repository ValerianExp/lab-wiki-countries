import InitAxios from "./initAxios"

class CountryAxios extends InitAxios {
    constructor() {
        super('/countries')
    }

    async getAllCountries() {
        try {
            const res = await this.axios.get('/');
            return res.data;
        } catch (err) {
            return console.log(err);
        }
    }

    async getCountryById(id) {
        try {
            const res = await this.axios.get(`/${id}`);
            return res.data;
        } catch (err) {
            return console.log(err);
        }
    }
}

export default CountryAxios;