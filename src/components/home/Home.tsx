import React from "react";
import NavBar from "../navbar/NavBar";

const Home: React.FC = () => {
  return (
    <>
      <div className=" flex ">
        <NavBar/>
        <div className=" h-[100vh] bg-red-100 w-full">
          hello
        </div>
      </div>
    </>
  );
};

export default Home;
