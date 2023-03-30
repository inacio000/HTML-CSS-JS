import axios from 'axios'

axios
    .get('https://api.github.com/users/inacio000')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(err => console.log(err))