import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import Home from './Paiges/Home.jsx'
import MainLayout from './Layouts/MainLayout.jsx';
import Blogs from './Paiges/Blogs.jsx';
import Bookmark from './Paiges/Bookmark.jsx';
import NotFound from './Paiges/NotFound.jsx';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import SgBlog from './Paiges/SgBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blogs />, 
        loader: () =>
          fetch("https://dev.to/api/articles?per_page=10&top=7"),
      },
        {
        path:'blog/:id',
        element:<SgBlog></SgBlog>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: "bookmark",
        element: <Bookmark />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
