import callApi from '../helpers/apiHelper';
// import f from '../../../resources/api/details/fighter/1.json'
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

    async getFighterDetails(id) {
        // todo: implement this method
        // endpoint - `details/fighter/${id}.json`;
        const endpoint = `../../../resources/api/details/fighter/${id}.json`;
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    }
}

const fighterService = new FighterService();

export default fighterService;
