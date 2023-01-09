import { TextInput } from "flowbite-react"
import { useState } from "react";
import { ProjectNavbarPython } from "../components/ProjectNavbarPython";
import { SheetURL } from "../constants/URLS";


export const PythonChangeQuestion = () => {

    const pno = JSON.parse(localStorage.getItem("pnum") || "0");

    const [pnum, setPNum] = useState(pno);
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <ProjectNavbarPython />
            <div className="h-screen container mx-auto">
                <div className="w-2/3 lg:w-3/12 bg-white dark:bg-gray-800 text-center p-10 shadow-md shadow-gray-200 dark:shadow-gray-600 rounded-xl mx-auto mt-10">
                    <TextInput type={"number"} placeholder={"Enter Question Number"}
                        onChange={(e) => {
                            setPNum(e.target.value);
                        }}
                        value={pnum}
                    />

                    {
                        visible &&
                        <button type="button" className="mt-5 text-white bg-emerald-700 hover:bg-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                            onClick={() => {
                                localStorage.clear();
                                setPNum(parseInt(pnum));
                                localStorage.setItem("pnum", JSON.stringify(pnum));
                                setVisible(false);
                            }}>
                            SAVE <span className="ml-3"><i className="fas fa-save"></i></span>
                        </button>
                    }
                    {
                        !visible &&
                        <button type="button" className="mt-5 text-white bg-emerald-500 hover:bg-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-700 dark:hover:bg-emerald-800">
                            SAVED <span className="ml-3"><i className="fas fa-save"></i></span>
                        </button>
                    }

                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                        onClick={() => {
                            window.open(SheetURL, '_blank')
                        }}>
                        OPEN SHEET <span className="ml-3"><i className="fas fa-external-link-alt"></i></span>
                    </button>

                </div>
            </div>
        </div>
    )
}