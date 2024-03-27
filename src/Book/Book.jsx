import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {id, image,
     tags,
     bookName,
    author,
    category,
    rating } = book;
  return (
    <Link to={`/book/${id}`}>
    <div className="card transition border-2 hover:border-3  hover:scale-105 border-green-200  hover:border-green-500 bg-base-100 shadow-xl p-4 w-96 h-auto mx-auto">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="w-32 h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        <div className="badge text-green-500">{tags[0]}</div>
        <div className="badge text-green-500">{tags[1]}</div>
        </h2>
        <h2 className="text-xl font-bold">{bookName}</h2>
        <p>By: {author}</p>
        <div className="card-actions justify-between">
          <div className="">{category}</div>
          <div className="">{rating}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
