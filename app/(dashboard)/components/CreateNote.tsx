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
import { useNoteStore } from "@/lib/store/noteStore";
import { usePathname } from "next/navigation";

const CreateNote = ({ variant }: { variant: string }) => {
  const currentPath = usePathname();
  const { isModalOpen, setIsModalOpen, editableNote, setEditableNote } =
    useNoteStore();

  const handleOpenChanges = (open: boolean) => {
    if (!open) setEditableNote(null);
    setIsModalOpen(open);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => handleOpenChanges(open)}>
      <DialogTrigger asChild hidden={currentPath !== "/notes"}>
        {variant === "default" ? (
          <Button
            variant={"link"}
            size={"icon"}
            className="w-14 h-14 md:w-20 md:h-20 hover:rotate-180 hover:scale-110 transition-all ease-in-out duration-300 rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            <IoIosAddCircle size={52} />
          </Button>
        ) : (
          <button tabIndex={0} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-1  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              New Note
            </div>
          </button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{editableNote ? "Update Note" : "New Note"}</DialogTitle>
        </DialogHeader>
        <AddNoteForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNote;
