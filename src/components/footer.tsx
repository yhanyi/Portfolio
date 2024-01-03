"use client";

import React from 'react';
import clsx from 'clsx';
import { useActiveSectionContext } from './active-section-context';

export default function Footer() {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <footer className={clsx({"hidden": activeSection === "Home"}, "my-10 px-4 text-center text-gray-500")}>
            <small className="text-xs">
                &copy; {new Date().getFullYear()} Yeoh Han Yi. All rights reserved.
            </small>
        </footer>
    )
}