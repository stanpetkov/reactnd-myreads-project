import React , { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook.js'
import Title from './Title.js'
import BookShelf from './BookShelf.js'

class Book extends Component {


    render() {

        const { allBooks, moveBook } = this.props

        return (
            <div>

            <div className="app">
                <div className="list-books">

                    <Title />
                    
                    <BookShelf 
                        allBooks={ allBooks }
                        moveBook = { moveBook }  />
                    
                    <div className="open-search">
                        <Route path="/search" render={ () => (
                    <SearchBook />
          )} />

                    <Link
                        to="/search"
                        className="add-contact">
                        Add Contact
                    </Link>
                        
                    </div>
                </div>

            </div>
            </div>

        )
    }

}

export default Book
