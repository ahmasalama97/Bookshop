import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className="flex px-12 py-6 w-96">
      <label class="relative block">
        <input
          class="placeholder:text-slate-400 block bg-slate-100 w-96 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-slate-300 focus:ring-slate-300 focus:ring-1 sm:text-sm"
          placeholder="Search by author, title, name"
          type="text"
          name="search"
        />
        <span class="absolute inset-y-2 px-2 right-0 flex items-right">
          <SearchIcon sx={{ color: "#A9A9A9" }} />
        </span>
      </label>
    </div>
  );
};
export default Searchbar;
