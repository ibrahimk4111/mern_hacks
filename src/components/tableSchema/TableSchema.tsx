import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ImBin } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from "react-router-dom";

interface propsType {
  title: string;
}
interface statePropsType {
  id: number;
  name: string;
}
interface formDataType {
  id: string;
  Name: string;
  URL?: string;
  Description?: string;
  Rating?: string;
}

const TableSchema = ({ title }: propsType) => {
  // const navigate = useNavigate()
  const { toast } = useToast();
  const [columns, setColumns] = useState<statePropsType[]>([
    { id: 1, name: "Name" },
  ]);
  const [formData, setFormData] = useState<formDataType>({
    id: uuidv4(),
    Name: "",
    URL: "",
    Description: "",
    Rating: "",
  });

  const addCols = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { title, tabIndex } = e.target as HTMLElement;
    try {
      if (title) {
        const isExists = columns.find((col) => col.name === title);
        if (isExists) {
          toast({
            title: `${title}`,
            description: `column already exist.`,
          });
        } else {
          const newColumn: statePropsType = {
            id: tabIndex + 1,
            name: title,
          };
          setColumns([...columns, newColumn].sort((a, b) => a.id - b.id));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteColumns = (id: number) => {
    const newColumns = columns.filter((column) => column.id !== id);
    setColumns(newColumns);
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState: formDataType) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const requiredData = formData["Name"].trim().length < 1;
    if (requiredData) {
      toast({
        description: `Please fill the 'Name' field.`,
      });
    } else {
      console.log(formData);
    }
  };

  return (
    <div>
      <h1 className=" text-center ">{title} table </h1>

      <div className=" grid grid-cols-12 gap-4 mt-5">
        {/* table columns name section */}
        <section className=" lg:col-span-3 col-span-12 border-2 p-3 rounded-md">
          <h1 className=" uppercase font-semibold ">Table Columns</h1>
          <hr className=" h-1 mb-5" />
          <ul>
            {["Name", "URL", "Description", "Rating"].map((item, index) => (
              <li
                key={index}
                className="odd:bg-slate-100 p-1 flex items-center gap-2 "
              >
                <p className="text-xs">{index + 1}.</p>
                <div className=" flex justify-between items-center w-full">
                  <p>{item}</p>
                  <button
                    title={item}
                    tabIndex={index}
                    onClick={addCols}
                    className="ml-2 px-2 bg-orange-300 hover:bg-orange-500 text-white text-xl rounded-md "
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* input for selected columns  */}
        <section className=" h-full lg:col-span-9 col-span-12 border-2 p-3 rounded-md">
          <h1 className=" uppercase font-semibold ">Table Column's Inputs</h1>
          <hr className=" h-1 mb-5" />
          <form action="submit" className=" space-y-3">
            {columns.map((item, index) => (
              <div key={index} className=" flex flex-col gap-1">
                <p className=" flex justify-between items-center">
                  <span>
                    {item.id}. {item.name}
                  </span>
                  <span
                    onClick={() => deleteColumns(item.id)}
                    className=" flex gap-2"
                  >
                    <ImBin className="bg-slate-100 hover:bg-slate-200 p-1 h-6 w-6 rounded-lg cursor-pointer" />
                  </span>
                </p>
                {item.name === "Description" ? (
                  <textarea
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleInputChange}
                    rows={2}
                    className="border-2 focus-visible:outline-none rounded-md p-2"
                  />
                ) : (
                  <input
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleInputChange}
                    type="text"
                    className="border-2 focus-visible:outline-none rounded-md p-2"
                  />
                )}
              </div>
            ))}
            <button
              onClick={handleFormHandle}
              type="submit"
              className=" text-white bg-orange-400 p-2 rounded-md "
            >
              Save
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default TableSchema;
