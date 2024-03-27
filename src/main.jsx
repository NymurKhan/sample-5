import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './Components/Home/ErrorPage/ErrorPage';
import ListedBooks from './Components/Home/ListedBoooks/ListedBooks';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Home/Root/Root';
import Home from './Components/Home/Home';
import PagesToRead from './Components/Home/PagesToRead/PagesToRead';
import BookDetails from './BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element:<ListedBooks></ListedBooks>,
        loader:() => fetch('Books.json?')
      },
      {
        path: "/pagesToRead",
        element:<PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:id",
        element:<BookDetails></BookDetails>,
        loader:() => fetch('Books.json')
      },
      {
        path: "/category",
        element: <category></category>,
      },
      {
        path: "/bookmarks",
        element:<bookmark></bookmark>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
