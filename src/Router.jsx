import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './home/Home';
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

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
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ])
    return <RouterProvider router={router} />
}