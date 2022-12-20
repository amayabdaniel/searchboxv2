const axios = require('axios');

const getPosts = async () => {
    const api_url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(api_url);
    return response.data;
}


module.exports = {
    getPosts
}