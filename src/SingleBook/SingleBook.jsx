import { Link } from "react-router-dom";
const SingleBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div>
      <div
        className="relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row-reverse mx-auto rounder-lg xl:divide-y-0  text-black
       divide-gray-700 border-2 justify-between shadow-xl "
      >
        <div className="p-3 space-y-1 w-full">
          <h3 className="text-3xl font-semibold">{bookName}</h3>
          <p className="text-sm text-gray-800">By: {author}</p>
          <div className="flex">
              <div className="flex">
                <p className="text-sm text-gray-400">
                  Tag:
                </p>
                <h2 className="flex">
                  <div className="badge text-green-500">{tags[0]}</div>
                  <div className="badge text-green-500">{tags[1]}</div>
                </h2>
                <p className="text-sm text-gray-400">
                  <span className="">Year of publishing :</span>
                  {yearOfPublishing}
                </p>
              </div>
            </div>
            <div className="flex border-b-2 py-2">
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">
                  <span className="">Publisher :</span>
                  {publisher}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="">Page :</span>
                  {totalPages}
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex gap-4 ">
                <p className="text-sm bg-blue-300 text-blue-600 h-8 py-1 px-3 rounded-full my-auto">
                  category : {category}
                </p>
                <p className="text-sm bg-orange-200 text-orange-600 h-8 py-1 px-3 rounded-full my-auto">
                  ratings : {rating}
                </p>
                {/* <Link to={`/book/${id}`}> */}
                <button className=" bg-[#23BE0A] text-white hover:bg-[#59C6D2] my-4 p-2 rounded-lg">View details</button>
                {/* </Link> */}
              </div>
            </div>
        </div>
        <div className="flex items-center gap-3 p-3 justify-start">
          <img
            alt=""
            src={image}
            className="object-cover w-32 h-40 bg-gray-500 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
