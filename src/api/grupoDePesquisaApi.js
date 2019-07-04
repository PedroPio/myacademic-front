import * as systemConstants from '../config_servers';

const API_HOST = systemConstants.API_HOST;

class grupoDePesquisaApi {

    static requestHeaders() {
        if (localStorage.token) {
            return {'AUTHORIZATION': `Token ${localStorage.token}`}
        } else {
            return {}
        }
    }

    static cadastrarGrupoDePesquisa(grupo_de_pesquisa){
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/grupo-estudo/`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(grupo_de_pesquisa)
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

    static removerGrupoDePesquisa(grupo_de_pesquisa_id){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/grupo-estudo/${grupo_de_pesquisa_id}`, {
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

    static editarGrupoDePesquisa(grupo_de_pesquisa, grupo_de_pesquisa_id){
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/grupo-estudo/${grupo_de_pesquisa_id}/`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(grupo_de_pesquisa)
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

    static recuperarGrupoDePesquisa(){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/grupo-estudo/`, {
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

export default grupoDePesquisaApi;