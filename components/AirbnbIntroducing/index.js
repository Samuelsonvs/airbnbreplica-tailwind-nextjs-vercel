import React from "react";
import Link from "next/link";

export default function index() {
    return (
        <div className="max-w-mp lg:max-w-md relative z-20 mt-40 ml-10">
            <div
                className="h-auto w-auto bg-cover"
                role="img"
                aria-busy="false"
                aria-label="Airbnb 2021"
            >
                <picture>
                    <source
                        srcSet="https://airbnb-photos.s3.amazonaws.com/pictures/Storefronts/may2021_HP_clearLogo_en_l/original/9850ff2c-bd0b-4f37-9d33-84f10a566045.svg"
                        media="(min-width: 950px)"
                    />
                    <source
                        srcSet="https://airbnb-photos.s3.amazonaws.com/pictures/Storefronts/may2021_HP_clearLogo_en_s/original/85600273-0e2c-49b6-b44e-6d260b61826c.svg"
                        media="(min-width: 744px)"
                    />
                    <source srcSet="https://airbnb-photos.s3.amazonaws.com/pictures/Storefronts/may2021_HP_clearLogo_en_s/original/85600273-0e2c-49b6-b44e-6d260b61826c.svg" />
                    <img
                        className="static object-contain align-bottom"
                        aria-hidden="true"
                        alt="Airbnb 2021"
                        src="https://airbnb-photos.s3.amazonaws.com/pictures/Storefronts/may2021_HP_clearLogo_en_s/original/85600273-0e2c-49b6-b44e-6d260b61826c.svg"
                    />
                </picture>
            </div>
            <div>
                <span className="text-3xl lg:text-5xl font-semibold leading-9 lg:leading-12">
                    Untroducing 100+ upgrades across our entire&nbsp;service
                </span>
            </div>
            <div className="pt-3">
                <Link href="#">
                    <a className="text-center py-2 px-3 text-sm bg-black text-white rounded-lg">
                        <span>Learn what's&nbsp;new</span>
                    </a>
                </Link>
            </div>
        </div>
    );
}
