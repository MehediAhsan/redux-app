import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import PostList from "../pages/PostList";

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
        }
      ]
    }
  ]);
  