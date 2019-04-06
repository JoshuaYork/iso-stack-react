import { delay } from "redux-saga";

describe('The Question List Detail Component', () => {
    beforeAll(() => {
        console.log("Before all!");
    });
    beforeEach(() => {
        console.log("Before Each!");
    });
    it('Should display a list of items', () => {
        expect(2 + 2).toEqual(4);
    });

    it.skip('Should display the meaning of life', () => {
        expect(2 + 2).toEqual(42);
    });

    it("asy7nc test 1", done=> {
        setTimeout(done, 100);
    });

    it("async tst2", ()=> {
        return new Promise(
            resolve => setTimeout(resolve,100)
        )
    });

    it ("async test 3", async ()=>await delay(100));

    afterAll(() => {
        console.log("after all!");
    });
    afterEach(() => {
        console.log("after Each!");
    });
});