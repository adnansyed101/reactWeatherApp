import PropTypes from "prop-types";
import { fromUnixTime, getHours, getMinutes } from "date-fns";
import { cToF } from "../utilities/cToF";

const TodayData = ({ data, isFarenheit }) => {
  const { city, list } = data;

  return (
    <div className="bg-slate-800 py-4 my-5">
      <div className="todayData">
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Sunrise</p>
          <p className="subtitle">
            {getHours(fromUnixTime(city.sunrise))}:{getMinutes(city.sunrise)}
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Sunset</p>
          <p className="subtitle">
            {getHours(fromUnixTime(city.sunset))}:{getMinutes(city.sunset)}
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Sea Level</p>
          <p className="subtitle">{list[0].main.sea_level}</p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Humidity</p>
          <p className="subtitle">{list[0].main.humidity}&deg;</p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Wind Speed</p>
          <p className="subtitle">{list[0].wind.speed} kmph</p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Feels Like</p>
          <p className="subtitle">
            {isFarenheit
              ? cToF(list[0].main.feels_like)
              : list[0].main.feels_like}
            &deg;
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Wind Gust</p>
          <p className="subtitle">{list[0].wind.gust}</p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Pressure</p>
          <p className="subtitle">{list[0].main.pressure} hPa</p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Ground Level</p>
          <p className="subtitle">{list[0].main.grnd_level}</p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="title">Wind Degree</p>
          <p className="subtitle">{list[0].wind.deg}&deg;</p>
        </span>
      </div>
    </div>
  );
};

TodayData.propTypes = {
  isFarenheit: PropTypes.bool,
  data: PropTypes.object,
};

export default TodayData;
