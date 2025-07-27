import { httpClientPlugin } from "../../../src/plugins/http-clients.plugin";

describe('plugins/http-clients.plugin', () => {

    //Llamada a un endpoint para comprobar igual de datos obtenidos
    test('httpClientPlugin.get() should return a string', async () => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
        })
    })

    //Testing para metodos POST, PUT and DELETE
    test('httpClientPlugin should have POST, PUT and Delete methods', () => { 
        console.log(typeof httpClientPlugin.post);
        expect(typeof httpClientPlugin.get).toBe('function')
        expect(typeof httpClientPlugin.post).toBe('function')
        expect(typeof httpClientPlugin.put).toBe('function')
        expect(typeof httpClientPlugin.delete).toBe('function')
     })

})