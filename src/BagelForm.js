import React, { Component } from "react"
import "./BagelForm.css"

export default class App extends Component {
    state = {
        newBagel: {
            type: "",
            rating: 5,
        },
    }
    handleChange = event => {
        const newBagel = this.state.newBagel
        newBagel[event.target.name] = event.target.value
        this.setState({ newBagel })
    }
    addBagel = event => {
        event.preventDefault()
        const { type, rating } = this.state.newBagel

        this.props.addBagel({ type, rating })

        this.setState({
            newBagel: {
                type: "",
                rating: 5,
            },
        })
    }
    render(){
        return (
            <form className="bagel-form" onSubmit={this.addBagel}>
                <input
                    name="type"
                    type="text"
                    required
                    value={this.state.newBagel.type}
                    placeholder="Type"
                    onChange={this.handleChange}
                />
                <input
                    name="rating"
                    type="number"
                    min="1"
                    max="10"
                    required
                    value={this.state.newBagel.rating}
                    placeholder="Rating"
                    onChange={this.handleChange}
                />
    
                <input type="submit" value="Add" />
            </form>
        )
    }
}
