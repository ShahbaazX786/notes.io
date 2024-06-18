import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosAddCircle } from "react-icons/io";


const CreateNote = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"link"} size={"icon"} className="w-14 h-14 hover:rotate-90 hover:scale-110 transition-all ease-linear duration-300 rounded-full"><IoIosAddCircle size={48} /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Note</DialogTitle>
                    <DialogDescription>
                        Add note form here
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default CreateNote;