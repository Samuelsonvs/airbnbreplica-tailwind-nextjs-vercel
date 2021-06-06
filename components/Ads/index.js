import React from "react";
import Link from "next/link";

export default function index() {
    return (
        <div>
            <aside className="w-full text-xs font-semibold bg-white text-gray-700 p-4 text-center md:text-sm md:bg-black md:text-gray-300">
                <Link href="#">
                    <a className="underline">
                        Get the latest on our COVID-19 response
                    </a>
                </Link>
            </aside>
        </div>
    );
}
