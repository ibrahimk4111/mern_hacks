import { SiRobinhood } from "react-icons/si";
import { ImBin } from "react-icons/im";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface rowsDataType {
    name: string;
    website: string;
    products: [];
}

const DataTable = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch("./tableDatas.json")
      .then((res) => res.json())
      .then((datas) => setRows(datas));
  }, [rows.length]);
  return (
    <div className=" p-5 ">
      <div className=" text-center font-bold text-2xl uppercase mb-10">
        Company Name
      </div>
      {/* <hr className=" h-1 my-5 " /> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" bg-slate-100 text-black w-1 ">
              <input type="checkbox" />
            </TableHead>
            <TableHead className=" bg-slate-100 text-black ">Name</TableHead>
            <TableHead className=" bg-slate-100 text-black ">Website</TableHead>
            <TableHead className=" bg-slate-100 text-black ">Product</TableHead>
            <TableHead className=" bg-slate-100 text-black w-2 text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(({name, website, products} : rowsDataType, index) =>
          (
            <TableRow key={index}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                <Link
                  to={website}
                  target="_blanck"
                  className=" flex gap-2 items-center"
                >
                  <span>{website}</span>
                  <ExternalLinkIcon />
                </Link>
              </TableCell>
              <TableCell>
                <Link to="#" className=" flex gap-2 items-center">
                  <span>{products}</span> <ExternalLinkIcon />
                </Link>
              </TableCell>
              <TableCell className=" flex justify-center items-center gap-2">
                <SiRobinhood className=" bg-orange-400 text-white hover:bg-orange-500 p-1 h-6 w-6 rounded-lg cursor-pointer" />
                <ImBin className=" bg-orange-400 text-white hover:bg-orange-500 p-1 h-6 w-6 rounded-lg cursor-pointer" />
              </TableCell>
            </TableRow>
          )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
