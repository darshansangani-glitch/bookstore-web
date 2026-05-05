import "./App.css";
import Protected from "./components/Protected.js";
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
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Protected />,
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
          ]
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
