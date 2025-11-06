import ThemeToggler from "@/components/custom/ThemeToggler";
import SearchBar from "@/components/customShadcn/searchBar";

const HomeHeader = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full p-2">
      <h1 className="text-3xl font-bold">Notes.io</h1>
      <SearchBar />
      <ThemeToggler />
    </header>
  );
};

export default HomeHeader;
