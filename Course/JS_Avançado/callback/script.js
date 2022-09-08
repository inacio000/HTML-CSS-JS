function hello() {
    console.log('Hello')
}

function greetings (s, name) {
    s()
    console.log(name)
}

greetings(hello, "Inacio")






let users = ['Inacio', 'Martinho', 'Raimundo']

function insertUser(name, callback) {
    setTimeout(() => { 
        users.push(name) 
        callback()
    }, 1000)
}

function listUser() {
    console.log(users)
}

insertUser('In', listUser)