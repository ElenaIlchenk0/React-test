import React from 'react';
import { useState } from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import articleInfo from '../list';
import { sortByAlphabet } from '../utils/sorting/sortByAlphabet';
import { sortByDate } from '../utils/sorting/sortByDate';
import { articlesRender } from './utils/articlesRender';

const getArticles = (sort, page) => {
    switch(sort) {
        case 'date':
            return articlesRender(page, sortByDate(articleInfo));
        case 'alphabet':
            return articlesRender(page, sortByAlphabet(articleInfo));
        default:
            return articlesRender(page, articleInfo)
    }
}

function Layout() {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("default");

    const changeSortingHandler = (v) => {
        setSort(v);
        setPage(1);
    }

    return(
        <div className="Layout">
            <div className="mainContent">
                <Header changeSorting={(v) => changeSortingHandler(v)} />

                <div className="articlesWrapper">
                    { getArticles(sort, page) }
                </div>
            </div>

            <Pagination 
                allItems={articleInfo.length} 
                perPage="3" 
                clickHandler={setPage}
                activePage={page}
            />
        </div>
    ) 
}

export default Layout;
