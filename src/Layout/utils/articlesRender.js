import Article from '../../Article/Article'

export const articlesRender = (i, arr) => {
    let perPage = 3;
    let lastArt = perPage * i -1;
    let firstArt = lastArt - perPage +1;

    return arr.map((articleItem, index) => <Article articleItem={articleItem} key={articleItem.id} inactive={!(index >= firstArt && index <= lastArt)} />)
}