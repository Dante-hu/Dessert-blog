import React from "react";
import Header from "@/components/header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
