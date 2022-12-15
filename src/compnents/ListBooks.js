import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_BOOK } from '../store/actions/books.action';


const ListBooks = () => {
    const state = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const RemoveBook = (book) => {
        dispatch(DELETE_BOOK(book));
    }
    console.log("state");
  return (
    <ul>
        {
            
            state?.map((book, index)=> (
                <li key={index}>
                    <strong>{index + 1}</strong> Book Name: {book.name} Price: {book.price} 
                    <span onClick={()=> RemoveBook(book)}> DEL </span>
                </li>
            ))
        }
    </ul>
  )
}
export default ListBooks;