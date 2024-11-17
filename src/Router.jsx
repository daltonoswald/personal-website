import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react'
import App from './home/Home';
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Error from './error/Error';

export default function Router() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
      const mq = window.matchMedia("(prefers-color-scheme: dark");
      if (mq.matches) {
        setIsDark(true);
      }
      mq.addEventListener('change', (e) => setIsDark(e.matches));
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App isDark={isDark} setIsDark={setIsDark} />,
            // errorElement: <Error isDark={isDark} setIsDark={setIsDark} />
        },
        {
            path: '/projects',
            element: <Projects isDark={isDark} setIsDark={setIsDark} />,
        },
        {
            path: '/contact',
            element: <Contact isDark={isDark} setIsDark={setIsDark} />
        },
        {
            path: '/*',
            element: <Error isDark={isDark} setIsDark={setIsDark} />
        }
    ])
    return <RouterProvider router={router} />
}