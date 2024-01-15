import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddPost from "../pages/AddPost";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import UpdatePost from "../pages/UpdatePost";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/post-list',
          element: <PostList/>
        },
        {
          path: '/add-post',
          element: <AddPost/>
        },
        {
          path: '/posts/:id',
          element: <UpdatePost></UpdatePost>
        }
      ]
    }
  ]);
  