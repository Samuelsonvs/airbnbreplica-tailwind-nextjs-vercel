import React from "react";
import locations from "./locations.json";
import Link from "next/link";

export default function index() {
    return (
        <div className="mt-40 lg:mt-64 sm:px-10">
            <h1 className="text-3xl font-bold leading-10">Explore nearby</h1>
            <ul className="w-full mt-5 grid gap-3 editscrollbar grid-cols-13 md:grid-cols-3 grid-flow-col grid-rows-2 overflow-x-auto overflow-y-hidden scroll-snap-x">
                {locations.map((state, index) => {
                    return (
                        <li
                            className={
                                "min-w-full " +
                                (state.location === "Didim" ||
                                state.location === "Burhaniye"
                                    ? "hidden lg:list-item"
                                    : "cursor-pointer")
                            }
                            key={index}
                        >
                            <Link href="#">
                                <a className="flex items-center">
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
                                                className="object-cover align-bottom rounded-xl  h-18"
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
                                    <span className="ml-2">
                                        <div className="font-semibold">
                                            {state.location}
                                        </div>
                                        <div>{state.distance}</div>
                                    </span>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
