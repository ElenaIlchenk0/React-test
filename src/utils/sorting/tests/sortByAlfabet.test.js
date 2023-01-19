import { sortByAlphabet } from '../sortByAlphabet';

const fixtures = [{title: "r"}, {title: "x"}, {title: "a"}];

describe('sortByAlphabet', ()=> {
    it('should return sort ascending arr', () => {
        const result = sortByAlphabet(fixtures);
        
        expect(result).toEqual([{title: "a"}, {title: "r"}, {title: "x"}]);
    });
});
