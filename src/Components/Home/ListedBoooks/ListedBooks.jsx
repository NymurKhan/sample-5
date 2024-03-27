import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../../Utility/LocalStorage";
import SingleBook from "../../../SingleBook/SingleBook";


const ListedBooks = () => {
    const books = useLoaderData();
    const [bookLists, setBookList] = useState([]);
    useEffect(() =>{
        const storedReadIds = getStoredReadList();
        if(books.length > 0){
             const listedBook = books.filter(book => storedReadIds.includes(book.id))
             console.log(listedBook);
            // const listedBook = [];
            // for(const id of storedReadIds){
            //     const book = books.find(book => book.id === id);
            //     if(book){
            //         listedBook.push(book);
            //     }
            // }
            setBookList(listedBook);
          
        }
    },[books])
    return (
        <div>
            <div className="w-3/5 mx-auto py-4">
                <h2 className="text-6xl  text-center bg-gray-100 py-4  rounded-lg">Books</h2>
            </div>
            <div>
                {
                    bookLists.map(book => <SingleBook key={bookLists.id} book={book}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;