import callApi from '../helpers/apiHelper';

class FighterService {
    #endpoint = 'fighters.json';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);
            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    /*
    Task done:
    - get fignter data by id from json files
    */

    // eslint-disable-next-line class-methods-use-this, consistent-return
    async getFighterDetails(id) {
        const endpoint = `../../../resources/api/details/fighter/${id}.json`;
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}

const fighterService = new FighterService();

export default fighterService;
