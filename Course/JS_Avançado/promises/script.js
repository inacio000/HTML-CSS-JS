// Promise: Objeto que recebe como argumento uma função


let users = ['Inacio', 'Martinho', 'Raimundo']

function insertUser(name) {

    let promise = new Promise(function(resolve, reject) {

        setTimeout( () => {
            users.push(name)

            let error = true

            if(!error) {
                resolve()
            }else {
                reject({msg: "Anything went wrong!"})
            }
        }, 1000)

    })

    return promise

}


function listUsers() {
    console.log(users)
}

insertUser('In')
    .then(listUsers)
    .catch((error) => {
        console.log(error.msg)
})