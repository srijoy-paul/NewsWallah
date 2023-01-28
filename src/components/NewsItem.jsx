import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="card my-3 col-md-3">
            <div className='d-flex justify-content-end border position-relative'>
                <button type="button" className="btn btn-secondary position-absolute" style={{ fontSize: ".8rem" }}>
                    {props.source}
                </button>
            </div>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{props.newsTitle}</h6>
                <p className="card-text fs-8">{props.newsDesc}</p>
                <p className="card-text"><small className="text-muted">By {props.author} on {props.publishinfo}</small></p>
                <a href="#" className="btn btn-dark">Read more</a>
            </div>
        </div>
    );
}
