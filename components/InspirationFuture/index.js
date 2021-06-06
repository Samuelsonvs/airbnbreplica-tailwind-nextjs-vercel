import React, { useState } from "react";
import info from "./info.json";
import Link from "next/link";

export default function index() {
    const [bool, setBool] = useState([true, false, false, false, false]);

    const clickHandler = (e) => {
        const elementID = parseInt(e.target.id);
        const newList = bool.map((state, index) =>
            index === elementID ? true : false
        );
        setBool([...newList]);
    };

    return (
        <div className="mt-10 px-10">
            <h1 className="text-3xl font-bold leading-10">
                Inspiration for future getaways
            </h1>
            <div>
                <ul className="flex border-b overflow-x-auto">
                    {info.map((state, index) => {
                        return (
                            <li
                                className={`pr-5 flex-shrink-0 mt-5 text-base font-semibold ${
                                    bool[index] ? "text-black" : "text-gray-600"
                                }`}
                                key={state._id}
                            >
                                <button
                                    id={state._id}
                                    onClick={clickHandler}
                                    className={`focus:outline-none py-5 ${
                                        bool[index]
                                            ? "border-b-2 border-black"
                                            : ""
                                    } `}
                                >
                                    {state.head}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                {info.map((state, index) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                bool[state._id] ? "block" : "hidden"
                            }`}
                        >
                            <ul className="flex flex-wrap">
                                {Object.keys(state.data).map(
                                    (dataKey, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="py-3 sm:p-5 w-1/2 sm:w-1/3"
                                            >
                                                <Link href="#">
                                                    <a>
                                                        <div>{dataKey}</div>
                                                        <div className="text-gray-600">
                                                            {
                                                                state.data[
                                                                    dataKey
                                                                ]
                                                            }
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
