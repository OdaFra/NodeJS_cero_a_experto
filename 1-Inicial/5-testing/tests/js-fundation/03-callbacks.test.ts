import { describe } from "node:test";
import { getUserById } from "../../src/js-fundation/03-callback";


describe('s-fundation/03-callback.ts', () => { 

    test('getUserById should return an error if user does not exists', (done) => { 
        const id = 10;
        getUserById(id,(err, user)=>{
            expect(err).toBe(`Usuario no encontrado ${id}`);
            expect(user).toBeUndefined;
            done();
        })
     });

     test('getUserById should return Jhon Doe', (done) => { 
        const id = 1;
        
        getUserById(id,(err, user)=>{
            // const { id, name } = user!;

            expect(err).toBeUndefined;
            // expect(id).toBe(1);
            // expect(name).toBe('Juan');
            expect(user).toStrictEqual(
                {
                    id: 1,
                    name: 'Juan'
                },
            );
            done();
        })
     });

 });