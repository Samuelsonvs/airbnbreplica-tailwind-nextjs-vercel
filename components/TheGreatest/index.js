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
                                    srcSet="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440 1x, https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=2560 2x"
                                    media="(min-width: 1440px)"
                                />
                                <source
                                    srcSet="https://a0.muscache.com/im/pictures/4602a952-afa0-46a6-b08a-24e67e958309.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/4602a952-afa0-46a6-b08a-24e67e958309.jpg?im_w=1440 2x"
                                    media="(min-width: 744px)"
                                />
                                <source
                                    srcSet="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440 2x"
                                    media="(min-width: 744px)"
                                />
                                <source srcSet="https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_w=240 1x, https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_w=240 2x" />
                                <img
                                    className="absolute rounded-lg object-cover align-bottom w-full h-full"
                                    aria-hidden="true"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    src="https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_q=medq&amp;im_w=720"
                                />
                            </picture>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center md:items-start md:h-full justify-center px-10 lg:px-20 text-center pt-8 md:pt-0 md:text-left w-full md:w-96"
                        role="presentation"
                    >
                        <div className="whitespace-pre-wrap text-3xl lg:text-5xl relative z-20 font-medium">
                            <span className="text-black">
                                The Greatest&nbsp;Outdoors
                            </span>
                        </div>
                        <div className="text-base leading-5 mt-3 relative z-20 whitespace-pre-line">
                            <span className="text-black">
                                Wishlists curated by Airbnb.
                            </span>
                        </div>
                        <div className="mt-5 text-left">
                            <button
                                type="button"
                                className="inline-block relative text-white text-center w-auto font-semibold text-sm leading-4 tracking-normal py-2 px-4 lg:py-4 lg:px-6 rounded-lg bg-black"
                            >
                                <span>Get inspired</span>
                            </button>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}
