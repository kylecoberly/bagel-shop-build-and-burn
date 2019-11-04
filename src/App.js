import React, { Component } from "react"
import "./App.css"
import BagelList from "./BagelList"

export default class App extends Component {
    state = {
        bagels: []
    }
    componentDidMount(){
        const url = "https://bagel-api-fis.herokuapp.com/bagels"
        fetch(url)
            .then(response => response.json())
            .then(bagels => bagels
                .filter(({ type, rating }) => type && rating))
            .then(bagels => {
                this.setState({ bagels })
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
                </main>
            </div>
        )
    }
}
