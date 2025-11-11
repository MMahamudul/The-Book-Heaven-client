import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/REgister";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import MyBook from "../pages/MyBook";
import Signin from "../pages/Signin";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from './../pages/BookDetails';
import PrivateRoute from "../provider/PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, 
        element: <Home></Home> },
        
        {
            path: '/all-books',
            element:<AllBooks></AllBooks>,
            
        },
        {
            path: '/add-book',
            element:<AddBook></AddBook>,
            
        },
        {
            path: '/my-books',
            element:<MyBook></MyBook>,
            
        },
        {
            path: '/book-details/:id',
            element:<PrivateRoute>
                <BookDetails></BookDetails>
                </PrivateRoute>,
            
        },

      
    ],
  },
  {
                path: '/auth',
                element:<AuthLayout></AuthLayout>,
                children:[
                     {
                path: '/auth/signin',
                element:<Signin></Signin>,
                    },
                     {
                path: '/auth/register',
                element:<Register></Register>,
                    },
                ]
                
    },
     {
            path:'*',
            element:<ErrorPage></ErrorPage>
    }

]);