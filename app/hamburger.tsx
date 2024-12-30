"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Ham() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <nav className="lg:hidden">
        <section className="flex">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "absolute inset-0 bg-white z-10 flex flex-col justify-evenly items-center h-screen w-full"
                : "hidden"
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-between min-h-[250px]">
              <Link href="/" className="border-b border-gray-400 my-8">
                About Me
              </Link>
              <Link href="/resume" className="border-b border-gray-400 my-8 ">
                RESUME
              </Link>
              <Link href="/projects" className="border-b border-gray-400 my-8 ">
                PROJECTS
              </Link>
              <Link href="/contact" className="border-b border-gray-400 my-8 ">
                CONTACT
              </Link>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
