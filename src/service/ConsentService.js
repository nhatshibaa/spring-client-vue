import axios from 'axios';

const API_URL = 'http://localhost:8090/api/v1';

class ConsentService {
    allows() {
        return axios
            .post(API_URL + `/auth?authCode=${localStorage.getItem('code')}&redirectUrl=/consenScreen&client_id=1`)
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('accessToken', response.data.accessToken);
                }
                return response.data;
            });
    }
}

export default new ConsentService();
