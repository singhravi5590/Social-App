import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Layout from "./components/Layout/Layout";

function App() {
  let currentUser = false;

  const protectedRoute = ({children}) => {
  if(!currentUser) return <Navigate to={"/login"}/>
  return children
  }

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : 
    <protectedRoute>
      <Layout/>
    </protectedRoute>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/profile/:id",
        element : <Profile/>
      }
    ]
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/register",
    element : <Register/>
  }
])

export default App;
