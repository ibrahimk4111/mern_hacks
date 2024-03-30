import { Link } from "react-router-dom";
import TableSchemaDialog from "../tableSchema/TableSchemaDialog";

interface SidebarItemType {
    text: string;
    extended: boolean;
  }

const SidebarItem = ({ text, extended }: SidebarItemType) => {
  return (
    <li className=" flex items-center justify-between p-2 bg-slate-200 rounded-md">
      <Link
        to="#"
        className={`h-[3vh] hover:text-orange-500 overflow-hidden transition-all duration-500 ease-in-out ${
          extended ? " w-52" : "w-4"
        }`}
      >
        {extended ? text : text.split("")[0]}
      </Link>
      <span
        className="bg-orange-300 hover:bg-orange-500 text-white text-xl rounded-md "
      >
        <TableSchemaDialog title={text}/>
      </span>
    </li>
  )
}

export default SidebarItem