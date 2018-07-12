import ezFetch from "ez-fetch";
const API_URL = "https://snippity-do-code.herokuapp.com/api/v1/snips";

export default {
  getSnips() {
    return ezFetch.get(API_URL);
  },
  getExample(id) {
    return ezFetch.get(`${API_URL}/${id}`);
  },
  createSnip(snip) {
    return ezFetch.post(API_URL, snip);
  },
  updateSnip(id, snip) {
    return ezFetch.put(`${API_URL}/${id}`, snip);
  },
  deleteSnip(id) {
    return ezFetch.delete(`${API_URL}/${id}`);
  }
};
