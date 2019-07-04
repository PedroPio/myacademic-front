import * as systemConstants from '../config_servers';

const API_HOST = systemConstants.API_HOST;

class disciplinaApi {

    static requestHeaders() {
        if (localStorage.token) {
            return {'AUTHORIZATION': `Token ${localStorage.token}`}
        } else {
            return {}
        }
    }

    static cadastrarDisciplina(disciplina){
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/disciplina/`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(disciplina)
        });

        return fetch(request).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        }).catch(error => {
            throw(error);
        })
    }

    static removerDisciplina(disciplina_id){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/disciplina/${disciplina_id}`, {
            method: 'DELETE',
            headers: headers,
        });

        return fetch(request).then(response => {
            if (!response.ok) {
                return response.status;
            }
        }).catch(error => {
            throw(error);
        })
    }

    static editarDisciplina(disciplina, disciplina_id){
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/disciplina/${disciplina_id}/`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(disciplina)
        });

        return fetch(request).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.status;
            }
        }).catch(error => {
            throw(error);
        })
    }

    static recuperarDisciplina(){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/disciplina/`, {
            method: 'GET',
            headers: headers,
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            throw(error);
        })
    }

}

export default disciplinaApi;