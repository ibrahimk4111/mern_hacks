import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import TableSchema from "./TableSchema";

const TableShema = () => {
  return (
    <Dialog>
      <DialogTrigger>+</DialogTrigger>
      <DialogContent>
        <TableSchema />
      </DialogContent>
    </Dialog>
  );
};

export default TableShema;
