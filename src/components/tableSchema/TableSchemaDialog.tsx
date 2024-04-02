import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import TableSchema from "./TableSchema";

interface propsType {
  title: string;
}

const TableSchemaDialog = ({ title }: propsType) => {

  return (
    <Dialog>
      <DialogTrigger className=" px-2 ">
        +
      </DialogTrigger>
      <DialogContent>
        <TableSchema title={title} />
      </DialogContent>
    </Dialog>
  );
};

export default TableSchemaDialog;
