const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then( response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch( err => console.log(err))
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then( response => response.json())
    .then(data => {
        userName.textContent = `Name: ${data.name}`
        userCity.textContent = `City: ${data.city}`
        userAvatar.src = `${data.avatar}`
    })
    .catch(err => console.log(err))
}

function addUser(newUser) {
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then( response => response.json())
    .then( data => alertAPI.textContent = data)
    .catch(err => console.error(err))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then( response => response.json())
    .then( data => alertAPI.textContent = data)
    .catch( err => console.error(err))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
    })
    .then( response => response.json())
    .then( data => alertAPI.textContent = data)
    .catch( err => console.error(err))
}

const newUser = {
    name: 'Inacio Raimundo',
    avatar: 'https://picsum.photos/200/300',
    city: 'Nizhny'
}

const updatedUser = {
    name: "Inacio Martinho",
    avatar: 'https://avatars.githubusercontent.com/u/113763976?v=4',
    city: "Samara"
}

// addUser(newUser)
// updateUser(updatedUser, 6)
deleteUser(4)
getUsers()
getUser(6)