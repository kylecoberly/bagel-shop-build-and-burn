import React from "react"

export default function BagelFilter(props) {
    const updateSearchTerm = event => {
        props.updateSearchTerm(event.target.value)
    }
    return (
        <form className="bagel-filter">
            <input
                type="text"
                value={props.searchTerm}
                placeholder="Find bagel"
                onChange={updateSearchTerm}
            />
        </form>
    )
}
