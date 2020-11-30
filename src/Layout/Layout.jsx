import React from 'react';
import { useState } from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Article from '../Article/Article';
import Pagination from '../Pagination/Pagination';
import articleInfo from '../list';

const articlesRender = (i) => {
    let perPage = 3;
    let lastArt = perPage * i -1;
    let firstArt = lastArt - perPage +1;
    const arr = [];

    articleInfo.forEach((articleItem, index) => {
        if (index >= firstArt && index <= lastArt) {
            arr.push(<Article articleItem={articleItem} key={index}/>)
        }
    })
    return arr;
}

function Layout() {
    const [page, setPage] = useState(1);

    return(
        <div className="Layout">

            <div className="mainContent">
                <Header />

                <div className="articlesWrapper">
                    {
                        articlesRender(page)
                    }
                </div>
            </div>

            <Pagination 
                allItems={articleInfo.length} 
                perPage="3" 
                clickHandler={setPage}
            />

        </div>
  ) 
}

export default Layout;