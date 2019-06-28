import * as systemConstants from '../config_servers';

const API_HOST = systemConstants.API_HOST;

class publicacaoApi {

    static requestHeaders() {
        if (localStorage.token) {
            return {'AUTHORIZATION': `Token ${localStorage.token}`}
        } else {
            return {}
        }
    }

    static cadastrarPublicacao(publicacao){
        let formData = new FormData();
        formData.append('bibtex', publicacao.bibtex);
        formData.append('name', publicacao.name);
        formData.append('type', publicacao.type);
        const headers = Object.assign({}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/publicacao/`, {
            method: 'POST',
            headers: headers,
            body: formData
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

    static removerPublicacao(publicacao_id){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/publicacao/${publicacao_id}`, {
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

    static editarPublicacao(publicacao, publicacao_id){
        let formData = new FormData();
        formData.append('bibtex', publicacao.bibtex);
        formData.append('name', publicacao.name);
        formData.append('type', publicacao.type);
        const headers = Object.assign({}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/publicacao/${publicacao_id}/`, {
            method: 'PUT',
            headers: headers,
            body: formData
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

    static recuperarPublicacao(){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/publicacao/`, {
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

export default publicacaoApi;