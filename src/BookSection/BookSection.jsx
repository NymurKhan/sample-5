import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookSection = () => {
    const [books, setbooks] = useState([]);

    useEffect(()=> {
        fetch('Books.json')
        .then(res => res.json())
        .then(data => setbooks(data))
        },[]) 

    return (
        <div>
            <div>
            <h2 className="text-5xl text-center font-bold my-8">Books</h2>
            </div>
            <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 gap-6 ">
                {
               books.map(book => <Book book={book} key={books.id}></Book>) 
                }
            </div>   
        </div>
    );
};

export default BookSection;