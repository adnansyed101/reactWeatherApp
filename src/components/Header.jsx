import { BsFillCloudsFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-slate-800 py-5">
      <div className="header">
        <span className="flex items-center text-2xl text-white">
          <BsFillCloudsFill className="mr-2" />
          React Weather App
        </span>
        <form>
          <input
            type="text"
            placeholder="Location"
            className="locationInput"
          />
          <button
            className="rounded-r-lg bg-orange-600 px-3 py-3 tracking-wide text-white"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="rounded-lg bg-white px-8 py-2">
          <span>&deg;F</span> / <span>&deg;C</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
