import { buildMakePerson } from "../../src/js-fundation/05-factory";

describe('js-fundation/05-factory', () => { 

    const getUuid = ()=>'1234';
    const getAge = ()=>33;

    test('BuildMakePerson', () => { 

        const makePerson = buildMakePerson({getUuid, getAge})   
        expect( typeof makePerson).toBe('function')

     });
     test('makePerson should return a person', () => { 

        const makePerson = buildMakePerson({getUuid, getAge})   
        const johnDoe = makePerson({name:'John Doe', birthdate:'1991-01-09'});
        expect(johnDoe).toEqual({
            id:'1234',
            name:'John Doe',
            birthdate:'1991-01-09',
            age:33
        })

     });

 })