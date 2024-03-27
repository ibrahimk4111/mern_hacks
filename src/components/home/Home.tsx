import React from "react";
import NavBar from "../navbar/NavBar";
import DataTable from "../dataTable/DataTable";

const Home: React.FC = () => {
  return (
    <>
      <div className=" flex gap-5 ">
        <NavBar />
        <div className=" h-[80vh] mt-[2vh] overflow-auto w-full bg-white rounded-md ">
          <div className=" h-[100vh] w-full rounded-md">
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
