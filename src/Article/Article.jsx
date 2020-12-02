import './Article.css';
import { IconContext } from "react-icons";
import { FaCalendarAlt, FaEye } from "react-icons/fa";

function Article(props) {

    let date = new Date(+props.articleItem.date * 1000);
    let dateFormat = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
  
    return(
        <div className={`Article ${props.inactive ? 'inactive' : ''}`}>
            <div className="img_wrapper">
                <img src={props.articleItem.img} alt=""/>
            </div>
            <div className="content_wrapper">
                <h3>{props.articleItem.title}</h3>

                <div className="icons">
                    <IconContext.Provider value={{ color: "#aeaeae" }}>
                        <div className="icons_item">
                            <FaCalendarAlt />
                            <span>{dateFormat}</span>
                        </div>
                        <div className="icons_item">
                            <FaEye />
                            <span>{props.articleItem.views}</span>
                        </div>
                    </IconContext.Provider>
                </div>

                <div className="text">{props.articleItem.caption}</div>
                <a href={props.articleItem.link}>Читать далее</a>
            </div>
            
        </div>
    ) 
}

export default Article;