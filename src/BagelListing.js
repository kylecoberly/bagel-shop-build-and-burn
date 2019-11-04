import React from "react"
import "./BagelListing.css"

export default function BagelListing(props){
    const { type, rating } = props.bagel
    return (
        <div className="bagel-listing">
            <p>
                <span className="type">{type}</span>
                <span className="rating">{rating}</span>
            </p>
        </div>
    )
}

