import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import PrivateRoute from "../components/PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import ForgetPassword from "../Pages/ForgetPassword";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"",
                element:<Home></Home>,
                loader: () => fetch("/services.json"),
            },
            {
                path:"/services",
                element:<Services></Services>,

            },
            {
                path:"/service/:id",
                element:(
                    <PrivateRoute>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>
                ),
                loader:() => fetch("/services.json")
            },
            {
                path:"/profile",
                element:(
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
                ),
            },
            {
                path:"/forget-password",
                element:<ForgetPassword></ForgetPassword>
            }
        ],
    },
    {
        path:"/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"login",
                element:<Login></Login>,
            },
            {
                path:"register",
                element:<Register></Register>,
            }
        ],
    },
    {
        path:"*",
        element:( 
            <h2 className="text-center text-3xl mt-10">Error 404 : Page Not Found</h2>
        )
    }
]);

export default router;