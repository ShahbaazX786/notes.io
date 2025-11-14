import ThemeToggler from "@/components/custom/ThemeToggler";
import SearchBar from "@/components/customShadcn/searchBar";
import CreateNote from "./CreateNote";
import SideBarToggler from "./sideBarToggler";

const DashboardHeader = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full p-2 gap-4">
      <h1 className="text-3xl font-bold">Notes.io</h1>
      <SearchBar />
      <div className="flex justify-center items-center gap-4">
        <CreateNote variant="other" />
        <ThemeToggler />
        <SideBarToggler />
      </div>
    </header>
  );
};

export default DashboardHeader;
