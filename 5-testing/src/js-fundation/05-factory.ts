// const { v4: uuidv4 } = require('uuid')
// const getAge = require('get-age')
// const { getAge, getUuid } = require("../plugins");
// const obj = { name: "Oscar", birthdate: "1991-01-09" };

interface BuildMakerPersonOptions{
  getUuid: ()=>string;
  getAge: (birthdate:string)=>number
}

interface PersonOptions{
  name:string,
  birthdate:string,
}


export const buildMakePerson = ({ getUuid, getAge }:BuildMakerPersonOptions) => {
  return ({ name, birthdate }:PersonOptions) => {
    return {
      id: getUuid(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// module.exports = {
//   buildMakePerson,
// };
