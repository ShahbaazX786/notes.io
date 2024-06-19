import CustomTooltip from "@/components/customShadcn/customTooltip";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { IoClose } from "react-icons/io5";


const NoteCardOptions = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full rounded-md from-black to-transparent bg-gradient-to-l px-4 gap-4">
            <div className="flex justify-between items-center gap-5">
                <CustomTooltip icon={<Button variant={"destructive"}><MdDeleteForever /></Button>} name={'Delete Note'} />
                <CustomTooltip icon={<Button variant={"premium"}><FiEdit /></Button>} name={'Edit Note'} />
            </div>
            <div className="flex justify-between items-center gap-5">
                <CustomTooltip icon={<Button variant={"outline"}><FaCheck /></Button>} name={'Mark As Complete'} />
                <CustomTooltip icon={<Button variant={"secondary"}><IoClose size={18}/></Button>} name={'Mark As Pending'} />
            </div>
        </div>
    )
}

export default NoteCardOptions;