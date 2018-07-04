import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook.js'
import Book from './Book.js'
import { Route } from 'react-router-dom'

class App extends React.Component {

    state = {

        id: '',
        allBooks: []

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

            .then( (allBooks) => {

                BooksAPI.getAll()

                    .then( (allBooks) => {

                        this.setState( () => ({
                            allBooks
                        }))

                    })
            })
    }

    render() {

        return (

            <div>
                <Route exact path="/" render={ () => (
                   <Book
                   allBooks= { this.state.allBooks }
                   moveBook= { this.moveBook }
                  />
                )}/>

                <Route exact path="/search" render={ () => (
                   <SearchBook
                   allBooks= { this.state.allBooks }
                   moveBook= { this.moveBook }/>
                )}/>
            </div>

        )
    }
}

export default App
