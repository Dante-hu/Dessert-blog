import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

const header = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Section */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Ingredients</a>
                <ul className="p-2">
                  <li>
                    <a>Batter</a>
                  </li>
                  <li>
                    <a>Topping</a>
                  </li>
                  <li>
                    <a>Spices/Flavors</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Recipes</a>
                <ul className="p-2">
                  <li>
                    <a>Cake</a>
                  </li>
                  <li>
                    <a>Pie</a>
                  </li>
                  <li>
                    <a>CupCake</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Sweet Tooth</a>
        </div>
        {/* Desktop Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="relative group">
              <a className="hover:cursor-pointer text-lg">Recipes</a>
              <ul className="absolute hidden group-hover:block bg-white p-4 z-[100] shadow-lg rounded-md top-10">
                <li className="py-1">
                  <a href="#" className="block hover:bg-gray-200 px-2">
                    Cake
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="block hover:bg-gray-200 px-2">
                    Pie
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="block hover:bg-gray-200 px-2">
                    CupCake
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a className="hover:cursor-pointer text-lg">Ingredients</a>
              <ul className="absolute hidden group-hover:block bg-white p-4 z-[100] shadow-lg rounded-md top-10">
                <li className="py-1">
                  <a href="#" className="block hover:bg-gray-200 px-2">
                    Batter
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="block hover:bg-gray-200 px-2">
                    Topping
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="block hover:bg-gray-200 px-2">
                    Spices/Flavors
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-lg">About</a>
            </li>
          </ul>
        </div>
        {/* Sign in Button */}
        <SignedOut>
          <div className="navbar-end">
            <a className="btn" href="/sign-in">
              Sign in
            </a>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="navbar-end">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-12 w-12",
                  userButtonBox: "h-15 w-15",
                  userButtonPopoverCard: "bg-blue-100",
                  userButtonPopoverActionButton: "text-blue-600",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
      {/**Image section for the bottom header */}
      <div className="flex justify-center items-center relative w-full ">
        {/**Image will span horizontally across the page */}
        <Image
          src="/img/desserts.webp"
          alt="Dessert image"
          width={1920}
          height={1080}
          className="h-60 w-full object-cover "
        />
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm p-3"></div>
        {/* Text overlay */}
        <div className="absolute text-white text-center">
          <h1 className="text-4xl font-bold items-center justify-center">
            Sweet Tooth
          </h1>
          <p className="text-lg ">Indulge in the ultimate dessert experience</p>
        </div>
      </div>
    </div>
  );
};

export default header;
