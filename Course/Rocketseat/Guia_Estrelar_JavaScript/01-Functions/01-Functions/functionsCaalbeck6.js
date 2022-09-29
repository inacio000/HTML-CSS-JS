// callback function (chamar de volta)

function sayMyName(name) {
    console.log('Before execute the callback')
    // function name() {
    //     console.log('   Am in callback function')
    // }
    name()
    console.log('After execute the callback')
}

sayMyName(
    () => {
        console.log('   Am in callback function')
    }
)