import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import PrivateRoute from "../components/PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
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
        // element:
    },
]);

export default router;