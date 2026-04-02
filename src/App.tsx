// import { useState } from 'react'

import "./App.css";
import AppLayout from "./layout/AppLayout.js";
import BookRequests from "./pages/BookRequests.js";
import Books from "./pages/Books.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/book-requests",
          element: <BookRequests />,
        },
      ],
    },
  ]);

  // <Router>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/signup" element={<SignUp />} />
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/home" element={<Home />} />
  //     <Route path="/books" element={<Books />} />
  //     <Route path="/book-requests" element={<BookRequests />} />
  //   </Routes>
  // </Router>

  return <RouterProvider router={router} />;
}

export default App;
