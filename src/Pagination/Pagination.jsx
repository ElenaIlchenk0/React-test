import './Pagination.css';
import { pagesRender } from '../utils/pagesRender/pagesRender';

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
            <div className="countPages" data-testid="countPages">
            {
                pagesRender(countPages, props)
            }
            </div>

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