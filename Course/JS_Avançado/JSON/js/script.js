const objs = [
    {
        name: "Inacio",
        age: 18,
        studing: true,
        hobbies: [
            "Programming", 
            "Play Basketball", 
            "Study",
        ],
        profissional_details: {
            profission: "Programmer",
            company: "KKER",
            since: 2020,
            currentlyWorking: true,
        },
    },
    {
        name: "Isaias",
        age:20,
        studing: true,
        hobbies: [
            "Programming", 
            "Wach Annime", 
            "Study Mathematic",
        ],
        profissional_details: {
            profission: "Mathematic",
            company: null,
            since: null,
            currentlyWorking: false,
        },
    },
];

console.log(objs)

// JSon (converting object to json data format)

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Converting json to object format
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)


objData.map((person) => {
    console.log(person.name)
})