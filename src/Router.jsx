import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './home/Home';
import Projects from "./projects/Projects";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            // errorElement: <ErrorPage />
        },
        {
            path: '/projects',
            element: <Projects />,
            // errorElement: <ErrorPage />
        }
    ])
    return <RouterProvider router={router} />
}