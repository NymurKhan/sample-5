import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { saveReadList } from "../Utility/LocalStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleAddRead = () =>{
    saveReadList(idInt);
    toast('The book is added successfully');
  }

  return (
    <div className="hero min-h-screen  my-10">
      <div className="hero-content items-start flex-col lg:flex-row gap-10">
        <img src={image} className="rounded-lg shadow-5xl w-96" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-3 border-b-2 text-lg">By: {author}</p>
          <p className="py-3 border-b-2 text-lg">{category}</p>
          <p className="py-3 border-b-2 text-sm">
            <span className="font-bold">Review : </span>
            {review}
          </p>
          <h2 className="card-title py-6">
            <p className="font-bold text-sm">Tags</p>
            <div className="badge text-green-500">{tags[0]}</div>
            <div className="badge text-green-500">{tags[1]}</div>
          </h2>

          <div className="flex  gap-8 text-sm py-3 my-4">
            <div className="flex-col space-y-2">
              <p>Number of pages:</p>
              <p>Publisher:</p>
              <p>{yearOfPublishing}</p>
              <p>Rating:</p>
            </div>
            <div className="flex-col space-y-2">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>Year of publishing:</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="">
            <a onClick={handleAddRead} className="btn bg-white text-black border-gray-400 hover:bg-[#59C6D2] mr-2">
              Read
            </a>
            <a className="btn  bg-white text-black  border-gray-400 hover:bg-[#59C6D2]">
              Wishlist
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
