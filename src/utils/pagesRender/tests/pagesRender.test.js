import { pagesRender } from '../pagesRender';

const fixuteres = {
    countPages: 4,
    props: {
        activePage: 1,
        clickHandler: () => jest.fn(),
    },
};

describe('pagesRender', ()=> {
    it('should receive style.color for first page as active', () => {
        const result = pagesRender(fixuteres.countPages, fixuteres.props);
        expect(result[0].props.style.color).toBe('#333');
    });
});
