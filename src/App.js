import React, { Component } from "react"
import "./App.css"
import BagelList from "./BagelList"
import BagelForm from "./BagelForm"
import BagelFilter from "./BagelFilter"

const BASE_URL = "https://bagel-api-fis.herokuapp.com"

export default class App extends Component {
    state = {
        bagels: [],
        isNewFormShowing: false,
        searchTerm: "",
    }
    componentDidMount(){
        this.listBagels()
    }
    listBagels = () => {
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
    editBagel = (id, bagel) => {
        const url = `${BASE_URL}/bagels/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bagel),
        }).then(() => {
            this.setState({
                bagels: this.state.bagels.map(existingBagel => {
                    if (existingBagel.id === id){
                         Object.assign(existingBagel, bagel)
                    }
                    return existingBagel
                })
            })
        })
    }
    deleteBagel = id => {
        const url = `${BASE_URL}/bagels/${id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(bagel => {
            this.setState({
                bagels: [
                    ...this.state.bagels
                        .filter(bagel => bagel.id !== id)
                ],
            })
        })
    }
    toggleNewForm = () => {
        this.setState({
            isNewFormShowing: !this.state.isNewFormShowing
        })
    }
    updateSearchTerm = searchTerm => {
        this.setState({ searchTerm })
    }
    filteredBagels = () => {
        return this.state.bagels.filter(bagel => {
            return (bagel.type
                .toLowerCase()
                .includes(this.state.searchTerm)
            ) || (bagel.rating
                .toString()
                .includes(this.state.searchTerm)
            )
        })
    }
    render(){
        return (
            <div className="App">
                <header>
                    <h1>Bagel Shop</h1>
                </header>
                <main>
                    <BagelFilter
                        searchTerm={this.state.searchTerm}
                        updateSearchTerm={this.updateSearchTerm}
                    />
                    <BagelList
                        bagels={this.filteredBagels()}
                        deleteBagel={this.deleteBagel}
                        editBagel={this.editBagel}
                    />
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
                                    <BagelForm
                                        addBagel={this.addBagel}
                                        submitLabel="Add"
                                    />
                                </section>
                            )
                            : null
                    }
                </main>
            </div>
        )
    }
}
