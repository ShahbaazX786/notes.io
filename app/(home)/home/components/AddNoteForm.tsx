import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import TagInput from "./TagInput";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const handleNote = () => {};

  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div className="flex flex-col w-full justify-center items-start space-x-2">
        <Label className="text-gray-700 text-lg font-bold" htmlFor="NoteTitle">
          Title
        </Label>
        <Input
          type="text"
          placeholder="Go To Gym at 5"
          id="NoteTitle"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-start space-x-2">
        <Label
          htmlFor="NoteContent"
          className="text-gray-700 text-lg font-bold"
        >
          Your message
        </Label>
        <Textarea
          placeholder="Enter any Valid Message"
          id="NoteContent"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-start space-x-2">
        <TagInput tags={tags} setTags={setTags} />
      </div>
      <Button type="submit" className="w-full" onClick={handleNote}>
        Add New Note
      </Button>
    </div>
  );
};

export default AddNoteForm;
