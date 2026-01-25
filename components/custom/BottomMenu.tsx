import { IoAddOutline } from "react-icons/io5";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";

const BottomMenu = () => {
  return (
    <div className="fixed bottom-2 left-1/2 right-1/2 -translate-x-1/2 grid w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
      <InputGroup className="h-12 rounded-full bg-slate-100 dark:bg-gray-800 shadow-md">
        <InputGroupInput placeholder="Type to search for any notes..." />
        <InputGroupAddon align="inline-start">
          <InputGroupButton
            variant="link"
            className="rounded-full h-10 w-10 hover:dark:bg-gray-800 hover:bg-gray-400 shadow-md"
          >
            <IoAddOutline />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="premium"
            className="rounded-full h-10 px-4"
          >
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default BottomMenu;
