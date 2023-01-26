import React, { useEffect, useState } from 'react'
import NewsItem from "./NewsItem";
const My_API_KEY = import.meta.env.API_KEY;

export default function News() {
    const [news, setNews] = useState({
        newsArticles: [],
        loading: false,
        page: 1,
        totalResults: null,
    })

    //useEffect is invoked each time the particular component re-renders.
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=268dc93ccb4448e3810e16005fefff53&page=${news.page}`);
            const parsedResponse = await response.json();
            console.log(parsedResponse);
            setNews({
                newsArticles: parsedResponse.articles,
                page: news.page,
                totalResults: parsedResponse.totalResults,
            })
        }
        fetchData();
    }, []);

    // const onClickNext = async () => {
    //     console.log(news.page);
    //     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=268dc93ccb4448e3810e16005fefff53&page=${(news.page) + 1}`);
    //     const parsedResponse = await response.json();
    //     console.log(parsedResponse);
    //     setNews({
    //         newsArticles: parsedResponse.articles,
    //         page: (news.page) + 1,
    //     })
    // }

    // const onClickPrev = async () => {
    //     console.log(news.page);
    //     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=268dc93ccb4448e3810e16005fefff53&page=${(news.page) - 1}`);
    //     const parsedResponse = await response.json();
    //     console.log(parsedResponse);
    //     setNews({
    //         newsArticles: parsedResponse.articles,
    //         page: (news.page) - 1,
    //     })
    // }

    const onClickPgChange = async (e) => {
        console.log(news.page);
        // if (e.target.id === "btnPrev") {
        console.log(news.page);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=268dc93ccb4448e3810e16005fefff53&page=${e.target.id === "btnPrev" ? (news.page) - 1 : (news.page) + 1}`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        setNews({
            newsArticles: parsedResponse.articles,
            page: e.target.id === "btnPrev" ? (news.page) - 1 : (news.page) + 1,
            totalArticles: parsedResponse.totalResults,
        })
    }

    return (
        <div className='container my-3'>
            <h1>TopNews - Headlines</h1>
            <div className='my-2 d-flex gap-3 flex-wrap justify-content-space-between'>
                {(news.newsArticles) ? news.newsArticles.map((element) => {
                    return <NewsItem imgUrl={element.urlToImage ? element.urlToImage : "https://www.ohsd.net/cms/lib/WA01919452/Centricity/Page/5501/news.jpg"} newsTitle={element.title} newsDesc={element.description} key={element.url} />
                }) : null}
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={news.page == 1} id='btnPrev' onClick={onClickPgChange} type="button" className="btn btn-dark">&larr; Previous</button>
                <button disabled={news.totalResults ?? news.page == Math.ceil(news.totalResults / 20)} id='btnNext' onClick={onClickPgChange} type="button" className="btn btn-dark">Next &rarr;</button>
            </div>
        </div>
    )
}
