import { ProjectCard } from "../components/ProjectCard"
import { ProjectNavbar } from "../components/ProjectNavbar"

export const Home = () => {
    return (
        <div>
            <ProjectNavbar />
            <div className="pb-72">
                <ProjectCard />
            </div>
        </div>
    )
}