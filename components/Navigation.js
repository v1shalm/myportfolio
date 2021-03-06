import React from 'react';
import Link from "next/link";
import ThemeSwitch from './ThemeSwitch';




const Navigation = () => {
    return (
        <div className="sticky top-0  z-20 py-2 bg-white md:py-6 md:mb-6   dark:bg-black  ">
            <div className="container px-4 mx-auto   lg:max-w-4xl flex items-center justify-between">
                <Link href="/" >
                    <a className={" font-semibold  text-lg tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"} >
                        Vishal Maurya
                    </a>
                </Link>

                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        {/* <Link href="/projects" >
                            <a className=" transition-colors hover:text-blue-300" >
                            Projects
                            </a>
                        </Link> */}
                            <Link href="https://v1shalm-blog.vercel.app/" >
                            <a className=" transition-colors hover:text-red-300" >
                            Blog
                            </a>
                        </Link>
                        <ThemeSwitch />
                    </div>
                </div>
            </div>

    )
}

export default Navigation
