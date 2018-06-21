import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook.js'
import StartTemplate from './StartTemplate.js'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class App extends React.Component {

    state = {

        id: '',
        allBooks: [],
        allBooksObj: {}

    }

    componentDidMount() {

        BooksAPI.getAll()
            .then( (allBooks) => {

                this.setState( () => ({
                    allBooks
                }))
            })
    }

    moveBook = (b, shelf) => {

        BooksAPI.update(b, shelf)
            .then( (allBooksObj) => {

                this.setState( () => ({
                    allBooksObj
                }))
            })

    }

    render() {

        return (

            <div>

                <Route exact path="/" render={ () => (

                   <StartTemplate
                   allBooks= { this.state.allBooks }
                   moveBook= { this.moveBook }/>
            )}/>

                <Route exact path="/search" render={ () => (

                   <SearchBook
                   allBooks= { this.state.allBooks }/>
            )}/>
            </div>

        )
    }
}

export default App
