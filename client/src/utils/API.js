import axios from "axios";

// api url obtained from https://developers.google.com/books/docs/v1/using
const URL = 'https://www.googleapis.com/books/v1/volumes?q='

export default {
  
    search: function(userInput) {
        return axios.get(URL + userInput)
    },
    getBooks: () => {
        return axios.get('api/books')
    },
    saveBook: function(data) {
        return axios.post('api/books', data)
    },
    deleteBook: function(id) {
        return axios.delete('api/books/' + id)
    } 
}