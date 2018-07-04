import React , { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

    state = {

        query: '',
        shelf: 'none',
        books: this.props.allBooks
    }

    updateQuery = (query) => {

        this.setState(() => ({

            query: query.trim()

        }))

        if (query) {

            BooksAPI.search(query).then(books => {
                
                if (!books || books.hasOwnProperty('error')) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books: books })
                }
                
            })
        } else {
            this.setState( { books: [] })
        }

    }

    handleChange(e, b) {

        this.setState({

            shelf: e.target.value

        }, () => { this.props.moveBook(b, this.state.shelf) } )

    }

    render() {

        const { query, books } = this.state
        const noImage = "https://penguinrandomhouse.ca/sites/default/files/default-book.png"

        return (
            <div className="list-books">
                <div className="list-books-content">
            <div className="search-books">

                <Link
                    to="/"
                    className="close-search">
                    Back
                </Link>

                <input
                    className="search-books-bar"
                    type="text"
                    placeholder="Search by Title or Author"
                    value={ query }
                    onChange= {

                        (event) => this.updateQuery(event.target.value)

                    }
                />
                    <div className="search-books-input-wrapper">

                            <div className="bookshelf">
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            query && (  books.map( (b) => (

                                            <li key={ b.id }>
                                               
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193,backgroundImage: `url(${ b.imageLinks ? b.imageLinks.thumbnail : noImage
})`}}></div>
                                                            <div className="book-shelf-changer">

                                                                <select value={ b.shelf } onChange={

                                                                    e => this.handleChange(e, b)

                                                                }>
                                                                    <option value="move" disabled>Move to...</option>
                                                                    <option value="none">None</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{ b.title }</div>
                                                        <div className="book-authors">{ b.authors }</div>
                                                    </div>
                                                </li>
                                            )
                                        ))}
                                    </ol>
                                </div>
                            </div>
                    </div>
            </div>
                </div>
            </div>
        )
    }

}

export default SearchBook
