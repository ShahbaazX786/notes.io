import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosAddCircle } from "react-icons/io";
import AddNoteForm from "./AddNoteForm";

const CreateNote = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          size={"icon"}
          className="w-14 h-14 md:w-20 md:h-20 hover:rotate-180 hover:scale-110 transition-all ease-in-out duration-300 rounded-full"
        >
          <IoIosAddCircle size={75} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note</DialogTitle>
        </DialogHeader>
        <AddNoteForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNote;
