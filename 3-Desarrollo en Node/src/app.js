// const { emailTemplate } = require('./js-fundation/01-template')
// require('./js-fundation/02-destructuring');
// console.log(emailTemplate)
// const { getUserById } =require('./js-fundation/03-callback');
// const { getUserById } =require('./js-fundation/04-arrows.js');

 const { getAge, getUuid } = require("./plugins");
const { buildMakePerson } = require('./js-fundation/05-factory')

const makePerson = buildMakePerson({ getUuid, getAge })

const obj = ({ name: 'Oscar', birthdate:'1991-01-09' })

const oscar = makePerson(obj)
console.log({ oscar })

// const id = 2

// getUserById(id, (error, user)=>{
//     if (error){
//         throw new Error(error)
//     }
//     console.log({user})
// })

