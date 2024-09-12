import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
            <li>
              <details>
                <summary>Recipes</summary>
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
              </details>
            </li>
            <li>
              <details>
                <summary>Recipes</summary>
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
              </details>
            </li>
            <li>
              <a>About</a>
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
    </div>
  );
};

export default header;
