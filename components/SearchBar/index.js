import React from "react";
import Link from "next/link";

export default function index() {
    return (
        <div className="max-w-4xl mx-auto hidden md:block">
            <div className="z-20 text-white block relative lg:hidden font-semibold text-sm">
                <ul className="flex justify-center">
                    <li className="bottom-effect inline mr-4 px-3 py-4">
                        <Link href="#">
                            <a>Places to stay</a>
                        </Link>
                    </li>
                    <li className="inline mr-4 px-3 py-4">
                        <Link href="#">
                            <a>Experiences</a>
                        </Link>
                    </li>
                    <li className="inline px-3 py-4">
                        <Link href="#">
                            <a>Online Experiences</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex bg-white relative z-20 rounded-searchrounded h-16 shadow-xl">
                <div className="flex-flex2 relative cursor-pointer rounded-searchrounded hover:bg-gray-200">
                    <label className="cursor-pointer ml-10 block mt-3 text-xs font-bold">
                        Location
                    </label>
                    <input
                        className="block bg-transparent ml-10 text-sm font-normal text-gray-600 focus:outline-none"
                        placeholder="Where are you going?"
                    ></input>
                </div>
                <div className="flex-flex3 relative cursor-pointe">
                    <div className="flex justify-around h-full">
                        <div className="w-full rounded-searchrounded cursor-pointer hover:bg-gray-200">
                            <div className="ml-10 mt-3 text-xs font-bold">
                                Check in
                            </div>
                            <div className="block bg-transparent ml-10 text-sm font-normal text-gray-500">
                                Add dates
                            </div>
                        </div>
                        <div className="w-full rounded-searchrounded cursor-pointer hover:bg-gray-200">
                            <div className=" ml-10 mt-3 text-xs font-bold">
                                Check out
                            </div>
                            <div className="bg-transparent ml-10 text-sm font-normal text-gray-500 ">
                                Add dates
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-flex4">
                    <div className="flex justify-between hover:bg-gray-200 rounded-searchrounded h-full">
                        <div>
                            <div className=" ml-10 mt-3 text-xs font-bold">
                                Check out
                            </div>
                            <div className="bg-transparent ml-10 text-sm font-normal text-gray-500 ">
                                Add dates
                            </div>
                        </div>
                        <div>
                            <button className="h-12 w-12 mt-2 mr-3 focus:outline-none bg-red-600 rounded-3xl hover:bg-red-500 relative z-40">
                                <svg
                                    className="block fill-current mx-auto text-white h-4 w-4 stroke-current stroke-4 overflow-visible"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                >
                                    <g fill="none">
                                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
