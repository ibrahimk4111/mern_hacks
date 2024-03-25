import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <aside className=" flex flex-col gap-5 h-full w-auto bg-white ">
      <nav className=" flex justify-end items-center">
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 "
        >
          {expanded ? <MdArrowForwardIos /> : <MdArrowBackIos />}
        </button>
      </nav>
      <ul className="flex-1">
        <SidebarItem
          icon={<MdArrowBackIos />}
          text="hello Ibrahim"
          extended={expanded}
        />
      </ul>
    </aside>
  );
};

export default NavBar;

interface SidebarItemType {
  icon: React.ReactNode;
  text: string;
  extended: boolean;
}

function SidebarItem({ icon, text, extended }: SidebarItemType) {
  return (
    <li className=" flex items-center p-3">
      <div>{icon}</div>
      <div className={` transition-all ${extended ? " w-32 " : "w-0"}`}>
        {text}
      </div>
    </li>
  );
}
