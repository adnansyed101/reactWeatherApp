import PropTypes from "prop-types";
import HourlyCard from "./HourlyCard";
import { cToF } from "../utilities/cToF";

const ShowWeather = ({ data, isFarenheit }) => {
  const { city, list } = data;

  const cardElement = list
    .filter((item, index) => index <= 10)
    .map((item, index) => {
      return (
        <HourlyCard key={index} hourlyCast={item} isFarenheit={isFarenheit} />
      );
    });

  return (
    <div className="my-4 px-4">
      <div className="showWeather">
        <div className="card">
          <h3 className="text-2xl lg:text-3xl text-center">{city.name}</h3>
          <h4 className="text-xl lg:text-2xl">{list[0].weather[0].main}</h4>
          <h1 className="my-2 text-4xl md:text-5xl">
            {isFarenheit ? cToF(list[0].main.temp) : list[0].main.temp}
            &deg;
          </h1>
          <p className="text-sm">
            H:
            {isFarenheit ? cToF(list[0].main.temp_max) : list[0].main.temp_max}
            &deg; || L:
            {isFarenheit ? cToF(list[0].main.temp_min) : list[0].main.temp_min}
            &deg;
          </p>
        </div>
        <div className="flex overflow-x-scroll border-t-2 lg:ml-64">
          {cardElement}
        </div>
      </div>
      <div className="text-center mt-6">
        Today: {list[0].weather[0].description}
      </div>
    </div>
  );
};

ShowWeather.propTypes = {
  isFarenheit: PropTypes.bool,
  data: PropTypes.object,
};

export default ShowWeather;
