import axios from 'axios';

const ApiGitHub = axios.create({
    baseURL: 'https://api.github.com/',
})

export default ApiGitHub;

