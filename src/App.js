import React, { Component } from "react"
import "./App.css"
import BagelList from "./BagelList"
import BagelForm from "./BagelForm"

const BASE_URL = "https://bagel-api-fis.herokuapp.com"

export default class App extends Component {
    state = {
        bagels: [],
        isNewFormShowing: false,
    }
    componentDidMount(){
        const url = `${BASE_URL}/bagels`
        fetch(url)
            .then(response => response.json())
            .then(bagels => bagels
                .filter(({ type, rating }) => type && rating))
            .then(bagels => {
                this.setState({ bagels })
            })
    }
    addBagel = bagel => {
        const url = `${BASE_URL}/bagels`
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bagel),
        }).then(response => response.json())
        .then(bagel => {
            this.setState({
                bagels: [...this.state.bagels, bagel],
                isNewFormShowing: false,
            })
        })
    }
    toggleNewForm = () => {
        this.setState({
            isNewFormShowing: !this.state.isNewFormShowing
        })
    }
    render(){
        return (
            <div className="App">
                <header>
                    <h1>Bagel Shop</h1>
                </header>
                <main>
                    <BagelList bagels={this.state.bagels} />
                    <button className="toggle-new-form" onClick={this.toggleNewForm}>
                        <span>
                        {
                            this.state.isNewFormShowing
                                ? "-"
                                : "+"
                        }
                        </span>
                    </button>
                    {
                        this.state.isNewFormShowing
                            ? (
                                <section>
                                    <h2>Add a new bagel</h2>
                                    <BagelForm addBagel={this.addBagel} />
                                </section>
                            )
                            : null
                    }
                </main>
            </div>
        )
    }
}
