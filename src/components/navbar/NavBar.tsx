import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  // const [navItem, setNewItem] = useState<string[]>([]);

  // const inputRef = useRef<HTMLInputElement>(null)
  // const addNavItem = () => {
  //   if(inputRef.current){
  //     if(inputRef.current.value != "" ) {
  //       setNewItem([...navItem, inputRef.current.value]);
  //       setExpanded(true);
  //       inputRef.current.value = ""
  //     }else{
  //       inputRef.current.required
  //     }
  //   }
  // };
  return (
    <aside className="h-[90vh] top-28 flex flex-col gap-5 w-auto bg-white p-3">
      <nav className="flex justify-end items-center">
        {/* <div className=" flex gap-1">
          <div>
            <input ref={inputRef} className={`focus-visible:outline-none bg-slate-100 rounded-md transition-all duration-700 ease-in-out overflow-hidden ${expanded? "w-40  p-1": "w-0"}`}  type="text" placeholder="Type name here" />
          </div>
          <button
            onClick={addNavItem}
            className="ml-2 px-2 bg-orange-300 hover:bg-orange-500 text-white text-xl rounded-md "
          >
            +
          </button>
        </div> */}
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className=" text-3xl text-orange-500"
        >
          {expanded ? <BsArrowLeftSquareFill /> : <BsArrowRightSquareFill />}
        </button>
      </nav>
      <ul className="flex flex-col h-[60vh] gap-1 ">
        <SidebarItem text="Companies" extended={expanded} />
        <SidebarItem text="Products" extended={expanded} />
        <SidebarItem text="Clients" extended={expanded} />
        <SidebarItem text="Gallery" extended={expanded} />
      </ul>
    </aside>
  );
};
export default NavBar;

interface SidebarItemType {
  text: string;
  extended: boolean;
}

function SidebarItem({ text, extended }: SidebarItemType) {
  const addData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    if(target){
      const text = target.getAttribute('title')
      console.log(text)
    }
  };

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
      <button
        title={text}
        onClick={addData}
        className="ml-2 px-2 bg-orange-300 hover:bg-orange-500 text-white text-xl rounded-md "
      >
        +
      </button>
    </li>
  );
}
