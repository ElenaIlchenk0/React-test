import { articlesRender } from './articlesRender';

const fixuteres = {
    i: 2,
    arr: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
};

describe('articlesRender', ()=> {
    it('should return 5th element as active', () => {
        const result = articlesRender(fixuteres.i, fixuteres.arr);
        expect(result[5].props.inactive).toBe(false);
    });

    it('should return 2nd element as inactive', () => {
        const result = articlesRender(fixuteres.i, fixuteres.arr);
        expect(result[2].props.inactive).toBe(true);
    });
});