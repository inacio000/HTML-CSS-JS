function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "au au",
    speak: speakGeneric
}

let cat = {
    sound: "miiaauu",
    speak: speakGeneric
}

// dog.speak()
// cat.speak()

let bindeFunction = speakGeneric.bind(cat)

bindeFunction();