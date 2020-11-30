import './Pagination.css';

const pagesRender = (properties) => {
    let countPages = Math.ceil(properties.allItems / properties.perPage);

    const arr =[];

    for(let i = 1; i <= countPages; i++) {
        arr.push(
            <div 
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
            {
                pagesRender(props)
            }
        </div>
    ) 
}

export default Pagination;