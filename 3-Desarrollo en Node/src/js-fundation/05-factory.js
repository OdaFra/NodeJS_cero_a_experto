// const { v4: uuidv4 } = require('uuid')
// const getAge = require('get-age')
const { getAge, getUuid } = require('../plugins')

const obj = {name:'Oscar', birthdate:'1991-01-09'}

const buildPerson = ({name, birthdate})=>{

    return{
        id: getUuid(),
        name:name,
        birthdate:birthdate,
        age: getAge(birthdate)
    }
}
const oscar = buildPerson(obj)

console.log(oscar)