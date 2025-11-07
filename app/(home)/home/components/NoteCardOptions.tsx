import CustomTooltip from "@/components/customShadcn/customTooltip";
import { Button } from "@/components/ui/button";
import apiStatus, { badToast } from "@/lib/api/api-status";
import useNotes from "@/lib/hooks/useNotes";
import { FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const NoteCardOptions = ({ uniqueId }: any) => {
  const { updateNoteMutation, deleteNoteMutation } = useNotes();

  const handleDelete = () => {
    deleteNoteMutation.mutate(uniqueId, {
      onSuccess: (res) => {
        apiStatus(res);
      },
      onError: (err: any) => {
        badToast(
          "Error deleting note",
          err?.response?.data?.message || err?.message || "Something went wrong"
        );
      },
    });
  };

  const handleUpdate = () => {
    updateNoteMutation.mutate(uniqueId, {
      onSuccess: (res) => {
        apiStatus(res);
      },
      onError: () => {
        badToast("Failed to mark note as complete ❌");
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full rounded-md from-black to-transparent bg-gradient-to-l px-4 gap-4">
      <div className="flex justify-between items-center gap-5">
        <CustomTooltip
          delay={400}
          icon={
            <Button
              onClick={handleDelete}
              variant={"destructive"}
              className="hover:scale-110 transition-all ease-linear"
            >
              <MdDeleteForever />
            </Button>
          }
          name={"Delete Note"}
        />
        <CustomTooltip
          delay={400}
          icon={
            <Button
              onClick={handleUpdate}
              variant={"premium"}
              className="hover:scale-110 transition-all ease-linear"
            >
              <FiEdit />
            </Button>
          }
          name={"Edit Note"}
        />
      </div>
      <div className="flex justify-between items-center gap-5">
        <CustomTooltip
          delay={400}
          icon={
            <Button
              onClick={handleUpdate}
              variant={"outline"}
              className="hover:scale-110 transition-all ease-linear"
            >
              <FaCheck />
            </Button>
          }
          name={"Mark As Complete"}
        />
        <CustomTooltip
          delay={400}
          icon={
            <Button
              onClick={handleUpdate}
              variant={"secondary"}
              className="hover:scale-110 transition-all ease-linear"
            >
              <IoClose size={18} />
            </Button>
          }
          name={"Mark As Pending"}
        />
      </div>
    </div>
  );
};

export default NoteCardOptions;
