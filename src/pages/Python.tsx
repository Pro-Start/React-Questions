import { ProjectCardPython } from "../components/ProjectCardPython"
import { ProjectNavbarPython } from "../components/ProjectNavbarPython"

export const Python = () => {
    return (
        <div>
            <ProjectNavbarPython />
            <div className="pb-72">
                <ProjectCardPython />
            </div>
        </div>
    )
}