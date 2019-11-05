import React from "react"
import "./BagelList.css"
import BagelListing from "./BagelListing"

export default function BagelList(props){
    const bagels = props.bagels.map(bagel => {
        return <li key={bagel.id}>
            <BagelListing
                bagel={bagel}
                deleteBagel={props.deleteBagel}
            />
        </li>
    })
    return (
        <section>
            <h2>Bagels</h2>
            <ul className="bagel-list">{bagels}</ul>
        </section>
    )
}
