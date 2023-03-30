const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2' // Fazendo um fetch 
https.get(API, res => {
    console.log(res.statusCode)
})

console.log('Connecting API...')