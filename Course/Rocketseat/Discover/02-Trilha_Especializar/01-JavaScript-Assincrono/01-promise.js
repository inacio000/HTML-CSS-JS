let accept = false

console.log('Order an Uber...') // first
const promessa = new Promise( (resolve, reject) => {
    if (accept) {
        return resolve('Order accepted!')
    }

    return reject('Order denied'); // third
})

promessa
.then(result => console.log(result))
.catch(err => console.log(err))
.finally(() => console.log('Finished...'));

console.log('Waiting...') // second