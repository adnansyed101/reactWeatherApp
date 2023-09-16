import PropTypes from "prop-types";
import { getHours, fromUnixTime } from "date-fns";
import { cToF } from "../utilities/cToF";

const HourlyCard = ({ hourlyCast, isFarenheit }) => {
  const { dt, weather, main } = hourlyCast;

  return (
    <div className="my-4 flex flex-col items-center space-y-2 px-10 text-2xl">
      <p>{getHours(fromUnixTime(dt))}</p>
      <figure className="w-16">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt={weather[0].description}
        />
      </figure>
      <p>{isFarenheit ? cToF(main.temp) : main.temp}&deg;</p>
    </div>
  );
};

HourlyCard.propTypes = {
  hourlyCast: PropTypes.object,
  isFarenheit: PropTypes.bool,
};

export default HourlyCard;
