import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ProjectNavbar } from "../components/ProjectNavbar"
import { ChangeQuestion } from "../pages/ChangeQuestion"
import { Home } from "../pages/Home"

export const Route_Items = [
    { name: "Home", link: "/", element: <Home /> },
    { name: "Home", link: "/React-Questions", element: <Home /> },
    { name: "Go to", link: "/React-Questions/ChangeQuestion", element: <ChangeQuestion /> },
]

export const Nav_Items = [
    { name: "Home", link: "/React-Questions" },
    { name: "Go to", link: "/React-Questions/ChangeQuestion" },
]

export const ProjectRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <ProjectNavbar />

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