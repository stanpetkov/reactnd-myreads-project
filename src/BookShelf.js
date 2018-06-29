import React , { Component } from 'react';
import Shelf from './Shelf.js'

class BookShelf extends Component {

    state = {

        shelf: '',
        currentlyReading: 'currentlyReading',
        wantToRead: 'wantToRead',
        read: 'read'

    }

    render () {

        const { allBooks, moveBook } = this.props

        return (
            <div className="list-books-content">
                <div>
                    <Shelf
                       allBooks = { allBooks.filter(b => b.shelf ) }
                       moveBook = { moveBook }
                        />
                    </div>
                  
                </div>
           

        )
    }

}

export default BookShelf