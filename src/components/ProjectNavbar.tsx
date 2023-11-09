import DarkModeButton from "../hooks/DarkModeButton"
import { Link } from 'react-router-dom';

export const ProjectNavbar = () => {

    return (
        <div>
            <div className={`sticky top-0 bg-white dark:bg-gray-800 z-50 items-center shadow-sm`}>
                <nav className={`container flex flex-row justify-between dark:bg-gray-800 mx-auto p-3 py-4 font-sans `}>
                    <Link
                        className="text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
                        to={"/QnA"}>
                        <div className="flex flex-row">
                            <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/React.svg" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                            <span className="self-center whitespace-nowrap text-xl font-semibold">
                                QnA
                            </span>
                        </div>
                    </Link>
                    <div className="self-center">
                        <DarkModeButton />
                    </div>
                </nav>
            </div>
        </div>
    )
}