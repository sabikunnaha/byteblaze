import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Paiges/Home.jsx'
import MainLayout from './Layouts/MainLayout.jsx';
import Blogs from './Paiges/Blogs.jsx';
import Bookmark from './Paiges/Bookmark.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>

      <Route element={<MainLayout />}>
       <Route index element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
