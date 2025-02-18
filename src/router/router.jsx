import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../pages/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import ResetPassword from "../pages/ResetPassword";
import UserProfile from "../pages/UserProfile";
import EditUserProfile from "../components/EditUserProfile";
import Profile from "../components/Profile";
import Appointment from "../pages/Appointment";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/services.json'),
            },
            {
                path: '/services/:id',
                element: <PrivateRoute>
                    <ServiceDetails />
                </PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/login/reset-password',
                element: <ResetPassword />,
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile />,
                </PrivateRoute>,
                children: [
                    {
                        path: '/profile',
                        element: <PrivateRoute>
                            <UserProfile />
                        </PrivateRoute>,
                    },
                    {
                        path: '/profile/edit-profile',
                        element: <PrivateRoute>
                            <EditUserProfile />
                        </PrivateRoute>
                    }
                ]
            }
        ]
    }
]);


export default router;