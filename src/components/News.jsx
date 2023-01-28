import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from './Footer';
// const My_API_KEY = import.meta.env.REACT_APP_API_KEY;
// const My_API_KEY = process.env.REACT_APP_API_KEY;
// import { REACT_APP_API_KEY as My_API_KEY } from "process.env";
const My_API_KEY = import.meta.env.VITE_API_KEY;

export default function News(props) {
    const [news, setNews] = useState({
        newsArticles: [],
        page: 1,
        totalResults: null,
    });
    const [loading, setLoading] = useState(false);

    //useEffect is invoked each time the particular component re-renders.
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${My_API_KEY}&page=${news.page}&pageSize=${props.pageSize}`);
            const parsedResponse = await response.json();
            console.log(parsedResponse);
            setLoading(false);
            setNews({
                newsArticles: parsedResponse.articles,
                page: news.page,
                totalResults: parsedResponse.totalResults,
            })
        }
        fetchData();
    }, []);

    // const onClickPgChange = async (e) => {
    //     setLoading(true);
    //     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${My_API_KEY}&page=${e.target.id === "btnPrev" ? (news.page) - 1 : (news.page) + 1}&pageSize=${props.pageSize}`);
    //     const parsedResponse = await response.json();
    //     console.log(parsedResponse);
    //     setLoading(false);
    //     setNews({
    //         newsArticles: parsedResponse.articles,
    //         page: e.target.id === "btnPrev" ? (news.page) - 1 : (news.page) + 1,
    //         totalResults: parsedResponse.totalResults,
    //     })
    // }
    const fetchData = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${My_API_KEY}&page=${(news.page) + 1}&pageSize=${props.pageSize}`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        setLoading(false);
        setNews({
            newsArticles: news.newsArticles.concat(parsedResponse.articles),
            page: (news.page) + 1,
            totalResults: parsedResponse.totalResults,
        })
    }

    return (
        <div className='container my-3'>
            <h1 className='text-center underline my-5' style={{ textDecoration: "underline" }}>TopNews - Headlines</h1>
            {loading && <Loader />}
            <InfiniteScroll
                dataLength={news.newsArticles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={news.newsArticles.length !== news.totalResults}
                loader={loading === false ? <Loader /> : null}>
                <div className='my-2 d-flex gap-3 flex-wrap justify-content-center' style={{ minHeight: "100vh" }}>
                    {(news.newsArticles) ? news.newsArticles.map((element) => {
                        return <NewsItem imgUrl={element.urlToImage ? element.urlToImage : "https://www.ohsd.net/cms/lib/WA01919452/Centricity/Page/5501/news.jpg"} newsTitle={element.title} newsDesc={element.description} key={element.url} author={element.author ? element.author : "Unknown"} publishinfo={new Date(element.publishedAt).toLocaleString()} />
                    }) : null}
                </div>
            </InfiniteScroll>
            {/* <div className='container d-flex justify-content-between'>
                <button disabled={news.page == 1} id='btnPrev' onClick={onClickPgChange} type="button" className="btn btn-dark">&larr; Previous</button>
                <button disabled={news.page == Math.ceil(news.totalResults / props.pageSize)} id='btnNext' onClick={onClickPgChange} type="button" className="btn btn-dark">Next &rarr;</button>
            </div> */}
            <Footer />
        </div>
    )
}
