import React from "react";
import Link from "next/link";

export default function index() {
    return (
        <div className="h-96 px-10 mt-10">
            <Link href="#">
                <a className="relative h-full w-full bg-transparent block">
                    {/* <div className="_1udzt2s" style="padding-top: 125%;"></div> */}
                    <div className="absolute inset-0">
                        <div className="h-full w-full bg-cover bg-center bg-no-repeat align-bottom inline-block">
                            <picture>
                                <source
                                    srcSet="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440 1x, https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560 2x"
                                    media="(min-width: 1440px)"
                                />
                                <source
                                    srcSet="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440 2x"
                                    media="(min-width: 744px)"
                                />
                                <source
                                    srcSet="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440 2x"
                                    media="(min-width: 744px)"
                                />
                                <source srcSet="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=240 1x, https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=240 2x" />
                                <img
                                    className="absolute rounded-lg object-cover align-bottom w-full h-full"
                                    aria-hidden="true"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720"
                                />
                            </picture>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center md:items-start md:h-full justify-center px-10 lg:px-20 text-center pt-8 md:pt-0 md:text-left w-full md:w-97"
                        role="presentation"
                    >
                        <div className="whitespace-pre-wrap text-3xl lg:text-5xl relative z-20 font-medium">
                            <span className="text-white">
                                Become a&nbsp;Host
                            </span>
                        </div>
                        <div className="text-base leading-5 mt-3 relative z-20 whitespace-pre-line">
                            <span className="text-white">
                                Earn extra income and unluck new opportunities
                                by sharing your space.
                            </span>
                        </div>
                        <div className="mt-5 text-left">
                            <button
                                type="button"
                                className="inline-block relative text-black text-center w-auto font-semibold text-sm leading-4 tracking-normal py-2 px-4 lg:py-4 lg:px-6 rounded-lg bg-white"
                            >
                                <span>Learn more</span>
                            </button>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}
