import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface propsType {
  title: string;
}

const TableSchema = ({ title }: propsType) => {
  const { toast } = useToast();
  const [columns, setColumns] = useState<string[]>(["Name"]);
  const addRows = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const targetTitle = target.title
    try {
      if (target) {
        const isExists = columns.includes(targetTitle);
        if (isExists) {
          toast({
            title: `${targetTitle}`,
            description: `column already exist.`,
          });
        } else {
          setColumns([...columns, targetTitle]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className=" text-center ">{title} table </h1>

      <div className=" grid grid-cols-12 gap-4 mt-5">
        {/* table columns name section */}
        <section className=" col-span-3 border-2 p-3 rounded-md overflow-auto">
          <h1 className=" uppercase font-semibold ">Table Columns</h1>
          <hr className=" h-1 mb-5" />
          <ul className=" space-y-2">
            {["Name", "URL", "Description"].map((item, index) => (
              <li
                key={index}
                className=" p-1 flex justify-between items-center border-2 rounded-md "
              >
                <span>{item}</span>
                <button
                  title={item}
                  onClick={addRows}
                  className="ml-2 px-2 bg-orange-300 hover:bg-orange-500 text-white text-xl rounded-md "
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* input for selected columns  */}
        <section className=" col-span-9 border-2 p-3 rounded-md">
          <h1 className=" uppercase font-semibold ">Table Column's Inputs</h1>
          <hr className=" h-1 mb-5" />
          <ul className=" space-y-3">
            {columns.map((item, index) => (
              <li key={index} className=" flex flex-col gap-1">
                <label>{item}</label>
                <input
                  type="text"
                  className=" border-2 focus-visible:outline-none rounded-md p-2"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TableSchema;
