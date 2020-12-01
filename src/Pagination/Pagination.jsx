import './Pagination.css';

let countPages;

const pagesRender = (properties) => {
    countPages = Math.ceil(properties.allItems / properties.perPage);

    const arr =[];

    for(let i = 1; i <= countPages; i++) {
        arr.push(
            <div 
                style={{ color: (properties.activePage === i) ? '#333' : 'grey' }}
                onClick={() => properties.clickHandler(i)}
                key={i}>
                    {i}
            </div>
        );
    }

    return arr;
}

function Pagination(props) {
    return(
        <div className="Pagination">
            <div className="prev" onClick={() => {
                if (props.activePage > 1) {
                    props.clickHandler(props.activePage - 1)
                }
                }}> &#10094; </div>
            {
                pagesRender(props)
            }
            <div className="next" onClick={() => {
                if (props.activePage < countPages) {
                    props.clickHandler(props.activePage + 1 )
                }
                }}> &#10095; </div>
        </div>
    ) 
}

export default Pagination;