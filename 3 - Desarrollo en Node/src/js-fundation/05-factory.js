const obj = {name:'Oscar', birthdate:'1991-01-09'}

const buildPerson = ({name, birthdate})=>{

    return{
        id: new Date().getTime(),
        name:name,
        birthdate:birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    }
}
const oscar = buildPerson(obj)

console.log(oscar)