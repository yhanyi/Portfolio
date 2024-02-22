import React from "react";
import { PinContainer } from "../components/3d-pin";
import Link from "next/link";

export default function Error404() {
  return (
    <div className="flex justify-center items-center p-20">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-primary dark:text-primaryDark">
          404
        </h1>
        <p className="mb-4 text-lg text-dark dark:text-light">
          Oops! Looks like you&apos;re lost.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-primary dark:text-primaryDark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 mb-10 text-dark dark:text-white">
          Why not check out a few of my links? :D
        </p>
        <div className="flex flex-col xl:flex-row gap-10">
          <PinContainer title="yeohhanyi.vercel.app">
            <Link href="https://yeohhanyi.vercel.app">
              <div className="flex basis-full flex-col p-4 tracking-tight text-dark dark:text-light sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-dark dark:text-light">
                  Home
                </h3>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </Link>
          </PinContainer>
          <PinContainer title="github.com/yhanyi">
            <Link href="https://www.github.com/yhanyi">
              <div className="flex basis-full flex-col p-4 tracking-tight text-dark dark:text-light sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-dark dark:text-light">
                  Github
                </h3>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </Link>
          </PinContainer>
          <PinContainer title="linkedin.com/in/yeoh-han-yi/">
            <Link href="https://linkedin.com/in/yeoh-han-yi/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-dark dark:text-light sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-dark dark:text-light">
                  LinkedIn
                </h3>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </Link>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
