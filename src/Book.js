import React , { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook.js'

class Book extends Component {

    state = {

        shelf: '',
        currentlyReading: 'currentlyReading',
        wantToRead: 'wantToRead',
        read: 'read'

    }

    handleChange(e, b) {

        this.setState({

            shelf: e.target.value

        }, () => { this.props.moveBook(b, this.state.shelf) } )

    }

    render() {

        const { allBooks } = this.props

        return (
            <div>

            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            allBooks.filter((data) => {
                                                return data.shelf === 'currentlyReading';
                                            }).map( (b) => (

                                                <li key={b.id}>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
                                                                <div className="book-shelf-changer">

                                                                    <select value={this.state.currentlyReading} onChange=

                                                                    {
                                                                       e => this.handleChange(e, b)

                                                                    } >
                                                                        <option value="move" disabled>Move to...</option>
                                                                        <option value="currentlyReading">Currently Reading</option>
                                                                        <option value="wantToRead">Want to Read</option>
                                                                        <option value="read" >Read</option>
                                                                        <option value="none">None</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        <div className="book-title">{b.title}</div>
                                                        <div className="book-authors">{b.authors}</div>

                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                            <ol className="books-grid">

                                {
                                    allBooks.filter((data) => {
                                        return data.shelf === 'wantToRead';
                                    }).map( (b) => (

                                        <li key={b.id}>

                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={this.state.wantToRead} onChange=

                                                                    {

                                                                         e => this.handleChange(e, b)

                                                                    }>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{b.title}</div>
                                                <div className="book-authors">{b.authors}</div>

                                            </div>
                                        </li>

                                    ))}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            allBooks.filter((data) => {
                                                return data.shelf === 'read';
                                            }).map( (b) => (

                                                <li key={b.id}>

                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
                                                            <div className="book-shelf-changer">
                                                                <select value={this.state.read} onChange=

                                                                        {
                                                                           e => this.handleChange(e, b)

                                                                        }>
                                                                    <option value="move" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{b.title}</div>
                                                        <div className="book-authors">{b.authors}</div>

                                                    </div>

                                                </li>

                                            ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
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
