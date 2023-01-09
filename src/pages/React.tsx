import { ProjectCardReact } from "../components/ProjectCardReact"
import { ProjectNavbarReact } from "../components/ProjectNavbarReact"

export const React = () => {
    return (
        <div>
            <ProjectNavbarReact />
            <div className="pb-72">
                <ProjectCardReact />
            </div>
        </div>
    )
}