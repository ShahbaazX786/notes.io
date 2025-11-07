import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { badToast, goodToast } from "@/lib/api/api-status";
import useNotes from "@/lib/hooks/useNotes";
import { useNoteStore } from "@/lib/store/noteStore";
import { useEffect, useState } from "react";
import TagInput from "./TagInput";

const AddNoteForm = () => {
  const { createNoteMutation } = useNotes();
  const { editableNote, setIsModalOpen, setEditableNote } = useNoteStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleNote = async () => {
    if (!title.trim() || !description.trim()) {
      badToast("Error", "Atleast Enter the Title to create a Note.");
    }

    const noteData = { title, description, tags };

    createNoteMutation.mutate(noteData, {
      onSuccess: () => {
        setTitle("");
        setDescription("");
        setTags([]);
        setIsModalOpen(false);
        setEditableNote(null);
        goodToast("Note added sucessfully");
      },
      onError: (err: any) => {
        console.error("Error creating note:", err);
        badToast(
          err?.response?.data?.error,
          Array.isArray(err?.response?.data?.message)
            ? err?.response?.data?.message.join(", ")
            : err?.message
        );
      },
    });
  };

  useEffect(() => {
    if (editableNote) {
      setTitle(editableNote?.title);
      setDescription(editableNote?.description);
      setTags(editableNote?.tags || []);
    } else {
      setTitle("");
      setDescription("");
      setTags([]);
    }
  }, [editableNote]);

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
          rows={5}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-start space-x-2">
        <TagInput tags={tags} setTags={setTags} />
      </div>
      <Button type="submit" className="w-full" onClick={handleNote}>
        {editableNote ? "Update Note" : "Add New Note"}
      </Button>
    </div>
  );
};

export default AddNoteForm;
