import { BsFillCloudsFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Header = ({ isFarenheit, toggleIsFarenheit, handleSubmit }) => {
  return (
    <header className="bg-slate-800 py-5">
      <div className="header">
        <span className="flex items-center text-2xl text-white">
          <BsFillCloudsFill className="mr-2" />
          React Weather App
        </span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter City"
            className="locationInput"
            name="locationInput"
          />
          <button className="locationButton" type="submit">
            Search
          </button>
        </form>
        <button
          className="rounded-lg bg-white px-8 py-2 font-bold"
          onClick={toggleIsFarenheit}
        >
          &deg;{isFarenheit ? "F" : "C"}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  isFarenheit: PropTypes.bool,
  toggleIsFarenheit: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Header;
