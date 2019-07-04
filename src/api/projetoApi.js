import * as systemConstants from '../config_servers';

const API_HOST = systemConstants.API_HOST;

class projetoApi {

    static requestHeaders() {
        if (localStorage.token) {
            return {'AUTHORIZATION': `Token ${localStorage.token}`}
        } else {
            return {}
        }
    }

    static cadastrarProjeto(projeto){
        let formData = new FormData();
        formData.append('name', projeto.name);
        formData.append('abstract', projeto.abstract);
        formData.append('year_beg', projeto.year_beg);
        formData.append('year_end', projeto.year_end);
        formData.append('paper', projeto.paper);

        const headers = Object.assign({}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/projeto/`, {
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

    static removerProjeto(projeto_id){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/projeto/${projeto_id}`, {
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

    static editarProjeto(projeto, projeto_id){
        let formData = new FormData();
        formData.append('name', projeto.name);
        formData.append('abstract', projeto.abstract);
        formData.append('year_beg', projeto.year_beg);
        formData.append('year_end', projeto.year_end);
        formData.append('paper', projeto.paper);
        
        const headers = Object.assign({}, this.requestHeaders());

        const request = new Request(`${API_HOST}/api/v1/projeto/${projeto_id}/`, {
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

    static recuperarProjeto(){
        const headers = this.requestHeaders();

        const request = new Request(`${API_HOST}/api/v1/projeto/`, {
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

export default projetoApi;