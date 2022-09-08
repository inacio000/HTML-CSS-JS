// Async Await

let users = ['Inacio', 'Martinho', 'Raimundo']

function insertUser(name) {

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            users.push(name)
            let error = false

            if(!error) {
                resolve()
            }else {
                reject({msg: "Something wents wrong!"})
            }
        }, 1000)
    })

    return promise

}

function listUser() {
    console.log(users)
}

async function execute() {
    await insertUser('In')
    listUser()
}

execute()