import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/services.json'),
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                loader: () => fetch('/services.json')
            }
        ]
    }
]);


export default router;