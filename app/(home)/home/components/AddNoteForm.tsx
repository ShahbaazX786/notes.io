import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const AddNoteForm = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div className="flex flex-col w-full justify-center items-start space-x-2">
        <Label className="text-gray-700 text-lg font-bold" htmlFor="NoteTitle">
          Title
        </Label>
        <Input type="text" placeholder="Go To Gym at 5" id="NoteTitle" />
      </div>
      <div className="flex flex-col w-full justify-center items-start space-x-2">
        <Label
          htmlFor="NoteContent"
          className="text-gray-700 text-lg font-bold"
        >
          Your message
        </Label>
        <Textarea placeholder="Enter any Valid Message" id="NoteContent" />
      </div>
    </div>
  );
};

export default AddNoteForm;
