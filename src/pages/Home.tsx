import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="h-screen flex flex-wrap items-center justify-around container m-auto">
            <Link to="/Interview-Questions/React">
                <div className="bg-gray-50 dark:bg-gray-800 hover:shadow-xl text-center p-10 shadow-md shadow-gray-200 dark:shadow-gray-600 rounded-xl mx-auto flex flex-col justify-center items-center">
                    <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/React.svg" className="h-10 sm:h-24 rounded-lg " alt="" />
                    React
                </div>
            </Link>
            <Link to="/Interview-Questions/Python">
                <div className="bg-gray-50 dark:bg-gray-800 hover:shadow-xl text-center p-10 shadow-md shadow-gray-200 dark:shadow-gray-600 rounded-xl mx-auto flex flex-col justify-center items-center">
                    <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/Python.svg" className="h-10 sm:h-24 rounded-lg " alt="" />
                    Python
                </div>
            </Link>
        </div>
    )
}