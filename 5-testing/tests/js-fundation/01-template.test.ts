import { emailTemplate } from "../../src/js-fundation/01-template";

describe('js-fundation/01-template', ()=>{
    test('emailTemplate shold contain a greeting', ()=>{
        expect(emailTemplate).toContain('Hi')
    })

    test('emailTemplate should contain {{name}} and {{orderId}}', ()=>{
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);

        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');
    })
})