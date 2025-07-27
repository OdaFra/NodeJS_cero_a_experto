import { characters } from "../../src/js-fundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => { 
    test('Characters should contain Flash, Superman', () => { 
        // console.log(characters)
        expect(characters).toContain('Cap');
        expect(characters).toContain('Thor');
    })

    test('First character should be Iroman, and second Superman', () => { 
        const [Ironman, Thor]= characters
        expect(Ironman).toBe('Ironman')
        expect(Thor).toBe('Thor')
     })
 })
