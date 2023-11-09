import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../pages/Home"

export const Route_Items = [
    { link: "/", element: <Home /> },
    { link: "/QnA", element: <Home /> },
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