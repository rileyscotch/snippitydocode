const API_URL = 'https://snippity-do-code.herokuapp.com/api/v1/snips'
export default {
    getSnips() {
       return fetch(API_URL)
        .then(response => response.json())
    }
}