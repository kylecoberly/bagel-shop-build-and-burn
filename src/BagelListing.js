import React from "react"
import "./BagelListing.css"

export default function BagelListing(props){
    const { type, rating, id } = props.bagel
    const deleteBagel = () => {
        props.deleteBagel(id)
    }
    return (
        <div className="bagel-listing">
            <p>
                <span className="type">{type}</span>
                <span className="actions">
                    <span className="rating">{rating}</span>
                    <i className="fas fa-times" onClick={deleteBagel}></i>
                </span>
            </p>
        </div>
    )
}

