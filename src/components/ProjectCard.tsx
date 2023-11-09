import { useState } from "react";
import { Spinner } from "flowbite-react";
import { ReadURL } from "../constants/URLS";
import { ProgressBar } from "../hooks/ProgressBar";

export const ProjectCard = () => {

    //get num from local storage
    const pno = JSON.parse(localStorage.getItem("num") || "0");

    const [num, setNum] = useState(pno);
    const [max, setMax] = useState(0);
    const [head, setHead] = useState("");
    const [body, setBody] = useState("");
    const [level, setLevel] = useState("");
    const [tag, setTag] = useState("");
    const [showans, setShowans] = useState(false);

    // save num to local storage
    localStorage.setItem("num", JSON.stringify(num));
    // save tag to local storage
    localStorage.setItem("tag", JSON.stringify(tag[num]));

    const fetchData = async () => {
        const response = await fetch(ReadURL);
        const values = await response.json();

        const Archives = values.React;
        setHead(Archives.head);
        setBody(Archives.body);
        setLevel(Archives.level);
        setTag(Archives.tag);

        // LENGTH OF DICTIONARY
        setMax(Object.keys(Archives.head).length - 1);
    }
    fetchData();

    const percentage = (num / max) * 100;

    return (
        <div>
            <ProgressBar bg={"bg-cyan-400"} h={"h-1"} wid={percentage.toString()} />
            <div className="container mx-auto">
                <div className="w-11/12 lg:w-10/12 bg-gray-50 dark:bg-gray-800 text-center p-3 lg:p-8 shadow-md shadow-gray-200 dark:shadow-gray-600 rounded-xl mx-auto mt-10">
                    {
                        head.length === 0 ?
                            <div className="py-36" >
                                <Spinner />
                            </div>
                            :
                            <div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-col">
                                        <div className="text-lg lg:text-xl font-mono">
                                            Question {num + 1}
                                        </div>
                                        <div className="text-md lg:text-lg opacity-30 font-sans">
                                            (Difficulty - <b className="opacity-95">{level[num]}</b>)
                                        </div>
                                    </div>

                                    <div className="bg-sky-300 dark:bg-sky-900 shadow-md hover:shadow-sm cursor-pointer px-3 py-1 rounded-lg text-md lg:text-lg font-mono">
                                        {tag[num]}
                                    </div>
                                </div>

                                <h1 className="text-center text-3xl lg:text-6xl font-mono font-bold mt-10">
                                    {
                                        head[num] || "Question doesn't exist"
                                    }
                                </h1>

                                <p className="text-left text-xl lg:text-3xl font-extralight mt-6">
                                    {
                                        showans && body[num]
                                    }
                                </p>


                                <div className="flex flex-row justify-around mt-10">
                                    {
                                        !showans &&
                                        <button type="button" className="text-white bg-emerald-700 hover:bg-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                                            onClick={() => {
                                                setShowans(!showans);
                                            }}>
                                            Reveal
                                        </button>
                                    }
                                </div>
                            </div>
                    }
                </div>




                <div className="flex flex-row justify-center fixed bottom-0 right-0 left-0 bg-slate-100 dark:bg-slate-900 shadow-lg p-2 z-20">
                    {
                        num === 0 ?
                            <button type="button" className="mx-5 z-50 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-300 bg-gray-100 rounded-lg border border-gray-200  dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 cursor-not-allowed invisible" disabled>
                                Prev
                            </button>
                            :
                            <button type="button" className="mx-5 z-50 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                onClick={() => {
                                    if (num > 0) {
                                        setNum(num - 1);
                                        setShowans(false);
                                    }
                                }}>
                                Prev
                            </button>
                    }


                    {
                        num === max ?
                            <button type="button" className="mx-5 text-gray-400 bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 cursor-not-allowed invisible" disabled>
                                Next
                            </button>
                            :
                            <button type="button"
                                className="mx-5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                                onClick={() => {
                                    if (num < max) {
                                        setNum(num + 1);
                                        setShowans(false);
                                    }
                                }}>
                                Next
                            </button>
                    }
                </div>

            </div>
        </div>
    )
}