import React from "react";
import locations from "./locations.json";
import Link from "next/link";

export default function index() {
    return (
        <div className="mt-10 sm:px-10">
            <h1 className="text-3xl font-bold leading-10">Live anywhere</h1>
            <ul className="editscrollbar mt-5 grid grid-flow-col grid-cols-13 gap-3 sm:flex sm:justify-between overflow-x-auto overflow-y-hidden scroll-snap-x">
                {locations.map((state, index) => {
                    return (
                        <li key={index}>
                            <Link href="#">
                                <a className="h-full block w-full">
                                    <span>
                                        <picture>
                                            <source
                                                srcSet={state.srcset1}
                                                media="(max-width: 743px)"
                                            />
                                            <source
                                                srcSet={state.srcset2}
                                                media="(min-width: 743.1px) and (max-width: 1127px)"
                                            />
                                            <source
                                                srcSet={state.srcset3}
                                                media="(min-width: 1127.1px) and (max-width: 1439px)"
                                            />
                                            <source
                                                srcSet={state.srcset4}
                                                media="(min-width: 1439.1px)"
                                            />
                                            <img
                                                className="object-cover align-bottom rounded-xl"
                                                aria-hidden="true"
                                                alt="location-icon"
                                                decoding="async"
                                                src={state.img}
                                                data-original-uri={
                                                    state.originaluri
                                                }
                                            />
                                        </picture>
                                    </span>
                                    <div className="font-semibold mt-2">
                                        {state.explanation}
                                    </div>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
