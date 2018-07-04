import React , { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook.js'
import Title from './Title.js'
import Shelf from './Shelf.js'

class Book extends Component {
    
    render() {

        const { allBooks, moveBook, handleChange } = this.props

        return (
            <div>

                <div className="app">
                    <div className="list-books">

                       <Title />

                        <Shelf
                            allBooks={ allBooks }
                            moveBook = { moveBook }
                            handleChange = { handleChange }
                        />

                        <div className="open-search">

                            <Route path="/search" render={ () => (
                            
                                <SearchBook 
                                allBooks= { allBooks } />
                                
                            )} />

                        <Link
                            to="/search">
                            Search
                        </Link>

                        </div>
                    </div>

                </div>
            </div>

        )
    }


}

export default Book
