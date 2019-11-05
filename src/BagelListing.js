import React, { Component } from "react"
import "./BagelListing.css"

import BagelForm from "./BagelForm"

export default class BagelListing extends Component {
    state = {
        isEditFormShowing: false,
    }
    deleteBagel = () => {
        this.props.deleteBagel(this.props.bagel.id)
    }
    toggleEditForm = () => {
        this.setState({
            isEditFormShowing: !this.state.isEditFormShowing
        })
    }
    editBagel = bagel => {
        this.props.editBagel(this.props.bagel.id, bagel)
        this.setState({
            isEditFormShowing: false,
        })
    }
    render(){
        const { type, rating } = this.props.bagel
        return (
            <div className="bagel-listing">
                <p>
                    <span className="type">{type}</span>
                    <span className="actions">
                        <span className="rating">{rating}</span>
                        <i
                            className={
                                this.state.isEditFormShowing
                                    ? "fas fa-edit active"
                                    : "fas fa-edit"
                            }
                            onClick={this.toggleEditForm}
                        ></i>
                        <i className="fas fa-times" onClick={this.deleteBagel}></i>
                    </span>
                </p>
                {
                    this.state.isEditFormShowing
                        ? <BagelForm
                            submitLabel="Edit"
                            defaultValues={{type, rating}}
                            submitHandler={this.editBagel}
                        /> : null
                }
            </div>
        )
    }
}

