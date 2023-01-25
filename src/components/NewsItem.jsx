import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="card my-3 " style={{ width: "18rem" }}>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.newsTitle}</h5>
                <p className="card-text">{props.newsDesc}</p>
                <a href="#" className="btn btn-dark">Read more</a>
            </div>
        </div>
    );
}
