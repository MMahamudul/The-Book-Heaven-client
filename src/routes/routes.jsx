import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/REgister";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import Signin from "../pages/Signin";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from './../pages/BookDetails';
import PrivateRoute from "../provider/PrivateRoute";
import UpdateBook from "../pages/UpdateBook";
import MyBooks from "../pages/MyBooks";
import Blogs from "../component/Blogs";
import Support from "../component/Support";



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
            element:<PrivateRoute>
                <AddBook></AddBook>
            </PrivateRoute>,
            
        },
        {
            path: '/my-books',
            element:<PrivateRoute>
                <MyBooks></MyBooks>
            </PrivateRoute>
            
        },
        {
            path: '/blogs',
            element:
                <Blogs></Blogs>
            
            
        },
        {
            path: '/support',
            element:
                <Support></Support>
            
            
        },
        {
            path: '/book-details/:id',
            element:<PrivateRoute>
                <BookDetails></BookDetails>
                </PrivateRoute>
            
        },
        {
            path: '/update-book/:id',
            element:<PrivateRoute>
                <UpdateBook></UpdateBook>
                </PrivateRoute>
                
            
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