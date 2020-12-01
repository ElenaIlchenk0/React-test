import React from 'react';
import { useState } from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Article from '../Article/Article';
import Pagination from '../Pagination/Pagination';
import articleInfo from '../list';

const sortByDate = () => {
    let sorted = [...articleInfo];

    sorted.sort(function(a, b) {
        if (a.date > b.date) {
            return -1;
          }
        if (a.date < b.date) {
            return 1;
        }
        return 0;
    });

    return sorted;
}

const sortByAlfabet = () => {
    let sorted = [...articleInfo];

    sorted.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
          }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });

    return sorted;
}

const articlesRender = (i, arr) => {
    let perPage = 3;
    let lastArt = perPage * i -1;
    let firstArt = lastArt - perPage +1;

    return arr.map((articleItem, index) => {
        return index >= firstArt && index <= lastArt
            ? <Article articleItem={articleItem} key={index}/>
            : <Article articleItem={articleItem} key={index} inactive/>
    })
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
                    {
                        (function() {
                            switch(sort) {
                                case 'date':
                                    return articlesRender(page, sortByDate());
                                case 'alfabet':
                                    return articlesRender(page, sortByAlfabet());
                                default:
                                    return articlesRender(page, articleInfo)
                            }
                        })(sort)
                    }
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