import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ReactChangeQuestion } from "../pages/ReactChangeQuestion"
import { Home } from "../pages/Home"
import { Python } from "../pages/Python"
import { React } from "../pages/React"
import { PythonChangeQuestion } from "../pages/PythonChangeQuestion"

export const Route_Items = [
    { name: "React", link: "/", element: <Home /> },
    { name: "React", link: "/Interview-Questions", element: <Home /> },
    { name: "React", link: "/Interview-Questions/React", element: <React /> },
    { name: "Go to", link: "/Interview-Questions/React/ChangeQuestion", element: <ReactChangeQuestion /> },
    { name: "React", link: "/Interview-Questions/Python", element: <Python /> },
    { name: "Go to", link: "/Interview-Questions/Python/ChangeQuestion", element: <PythonChangeQuestion /> },
]

export const React_Nav_Items = [
    { name: "React", link: "/Interview-Questions/React" },
    { name: "Go to", link: "/Interview-Questions/React/ChangeQuestion" },
]

export const Python_Nav_Items = [
    { name: "Python", link: "/Interview-Questions/Python" },
    { name: "Go to", link: "/Interview-Questions/Python/ChangeQuestion" },
]

export const ProjectRoutes = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    {
                        Route_Items.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element} />
                            )
                        })
                    }
                </Routes>

            </BrowserRouter>
        </div>
    )
}