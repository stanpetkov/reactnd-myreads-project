import React , { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

    state = {
        query: '',
        value: ''
    }

    updateQuery = (query) => {

        this.setState(() => ({
            query: query.trim()
        }))
    }

    updateValue = (query) => {

        this.setState(() => ({
            value: query.trim()
        }))
    }

    render() {

        const { query } = this.state
        const { allBooks } = this.props

        // filter serach results
        
        const showBooks = query === ''
            ? allBooks
            : allBooks.filter( (c) => (
            c.title.toLowerCase().includes(query.toLowerCase())
        ))

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
                    onChange={

                        (event) => this.updateQuery(event.target.value)

                        }
                />
                    <div className="search-books-input-wrapper">
                        {
                            <div className="bookshelf">
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            showBooks.length !== allBooks.length && (

                                                showBooks.map( (b) => (

                                                <li key={b.id}>

                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193,       backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
                                                            <div className="book-shelf-changer">
                                                                <select value={this.state.value} onChange={

                                                                (event) => this.updateValue(event.target.value)

                                                                }>
                                                                    <option value="move" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="book-title">{b.title}</div>
                                                        <div className="book-authors">{b.authors}</div>
                                                    </div>
                                                </li>
                                            ))
                                        )}
                                    </ol>
                                </div>
                            </div>
                        }

                    </div>
            </div>
                </div>
            </div>
        )
    }

}

export default SearchBook
