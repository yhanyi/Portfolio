"use client";


import React from 'react';
import { SunIcon, MoonIcon } from './animated-theme-icons';
import { useTheme } from './theme-context';

export default function ThemeSwitch() {

    const {theme, toggleTheme} = useTheme();

    return (
        <button className="z-10 p-2.5 w-[3rem] h-[3rem] bg-opacity-80 backgroup-blur-[0.5rem] border-opacity-40 shadow-2xl rounded-xl flex items-center justify-center hover:scale-105 active:scale-100 transition-all bg-white text-black dark:bg-black dark:text-white"
        onClick={toggleTheme}>
            {
                theme === "light" ? 
                    <MoonIcon className="fill-black" /> : <SunIcon className="fill-black" />
            }
        </button>
    )
}