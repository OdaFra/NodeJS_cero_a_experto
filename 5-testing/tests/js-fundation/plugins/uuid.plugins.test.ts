import { getUuid } from "../../../src/plugins/uuid.plugin";

describe('plugins/uuid.plugin.ts', () => {

    test('getUUID() should return a UUID', ()=>{

        const uuid = getUuid();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);

    })
 })