import './Pagination.css';

const pagesRender = (countPages, properties) => {
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
    let countPages = Math.ceil(props.allItems / props.perPage);

    return(
        <div className="Pagination">
            <div className="prev" onClick={() => {
                if (props.activePage > 1) {
                    props.clickHandler(props.activePage - 1)
                }
                }}> &#10094; 
            </div>

            {
                pagesRender(countPages, props)
            }

            <div className="next" onClick={() => {
                if (props.activePage < countPages) {
                    props.clickHandler(props.activePage + 1 )
                }
                }}> &#10095; 
            </div>
        </div>
    ) 
}

export default Pagination;