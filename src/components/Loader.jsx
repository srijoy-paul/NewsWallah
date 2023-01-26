import React from 'react'
import loader from "../assets/Loading.gif"

export default function Loader() {
    return (
        <div className="text-center">
            <img src={loader} alt="" />
        </div>
    )
}
