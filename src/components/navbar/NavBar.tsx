import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { useRef, useState } from "react";
import SidebarItem from "./SidebarItem";

const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const [navItem, setNewItem] = useState<string[]>(["company"]);

  const inputRef = useRef<HTMLInputElement>(null);
  const addNavItem = () => {
    if (inputRef.current) {
      if (inputRef.current.value != "") {
        setNewItem([...navItem, inputRef.current.value]);
        setExpanded(true);
        inputRef.current.value = "";
      } else {
        inputRef.current.required;
      }
    }
  };
  return (
    <aside className="h-[90vh] top-28 flex flex-col gap-5 w-auto bg-white p-3">
      <nav className="flex justify-between items-center gap-2">
        <div className=" flex items-center gap-1">
          <div>
            <input
              ref={inputRef}
              className={`focus-visible:outline-none bg-slate-100 rounded-md transition-all duration-700 ease-in-out overflow-hidden ${
                expanded ? "w-40  p-1" : "w-0"
              }`}
              type="text"
              placeholder="Type name here"
            />
          </div>
          <button
            onClick={addNavItem}
            className="ml-2 px-2 bg-orange-300 hover:bg-orange-500 text-white text-xl rounded-md "
          >
            +
          </button>
        </div>
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className=" text-3xl text-orange-500"
        >
          {expanded ? <BsArrowLeftSquareFill /> : <BsArrowRightSquareFill />}
        </button>
      </nav>
      <ul className="flex flex-col h-[60vh] gap-1 ">
        {navItem?.map((item, index) => (
          <SidebarItem key={index} text={item} extended={expanded} />
        ))}
      </ul>
    </aside>
  );
};
export default NavBar;

