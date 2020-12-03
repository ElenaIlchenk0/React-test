import { sortByAlfabet } from '../sortByAlfabet';

const fixuteres = [{title: "r"}, {title: "x"}, {title: "a"}];

describe('sortByAlfabet', ()=> {
    it('should return sort ascending arr', () => {
        const result = sortByAlfabet(fixuteres);
        
        expect(result).toEqual([{title: "a"}, {title: "r"}, {title: "x"}]);
    });
});