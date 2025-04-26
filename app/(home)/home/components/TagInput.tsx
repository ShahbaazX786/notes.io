import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }: any) => {
  const [inputValue, setInputValue] = useState("");

  const addNewTag = () => {
    if (inputValue.trim() !== "" && tags.length < 5) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag: string) => tag !== tagToRemove));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Label className="text-gray-700 text-lg font-bold" htmlFor="NoteTags">
        Tags <span className="text-slate-500 text-sm">(max 5)</span>
      </Label>

      {tags.length > 0 && (
        <div className="flex flex-row items-center gap-2 flex-wrap mt-2">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="flex flex-row items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-full"
            >
              #{tag}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleRemoveTag(tag)}
              >
                <MdClose size={20} />
              </Button>
            </span>
          ))}
        </div>
      )}

      {tags.length < 5 && (
        <div className="flex flex-row justify-center items-center gap-2 mt-2">
          <Input
            type="text"
            placeholder="Add a tag..."
            id="NoteTags"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            type="button"
            size="icon"
            onClick={addNewTag}
            className="py-6"
          >
            <MdAdd size={24} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default TagInput;
