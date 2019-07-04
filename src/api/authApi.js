import * as systemConstants from '../config_servers';

const API_HOST = systemConstants.API_HOST;

class authApi {

    static login(credentials){
        const request = new Request(`${API_HOST}/api/v1/login/`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            throw(error);
        })
    }
}

export default authApi;