// import React, { Component, } from 'react';
// import {ThemeContext} from '../contexts/ThemeContext'
import React, {useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'

/*
class BookList extends Component {
    static contextType=ThemeContext;
    render() { 
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        return (
            <div className="book-list" style={{background:theme.bg,color:theme.syntax}}>
                <ul>
                    <li style={{background:theme.ui}}>the way of kings</li>
                    <li style={{background:theme.ui}}>the name of the wind</li>
                    <li style={{background:theme.ui}}>the final empire</li>
                
                </ul>
            </div>
        )
    }
}*/

const BookList=()=>{
    const{isLightTheme, light, dark}=useContext(ThemeContext)
    const {books}=useContext(BookContext);
    console.log(books)
    const theme=isLightTheme?light:dark;
    return (
        <div className="book-list" style={{background:theme.bg,color:theme.syntax}}>
            <ul>
                {books?.map(book=>{
                    return (<li style={{background:theme.ui}} key={book.id}>{book.title}</li>)
                })}
                
            
            </ul>
        </div>
    )
}
 
export default BookList;
