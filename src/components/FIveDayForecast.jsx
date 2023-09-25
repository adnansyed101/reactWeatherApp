import { format, fromUnixTime } from "date-fns";
import PropTypes from "prop-types";
import { cToF } from "../utilities/cToF";

const FiveDayForecast = ({ data, isFarenheit }) => {
  const uniqueForecastDays = [];

  const fiveDaysForecast = data.list.filter((forecast) => {
    const forecastDate = new Date(forecast.dt_txt).getDate();
    if (!uniqueForecastDays.includes(forecastDate)) {
      return uniqueForecastDays.push(forecastDate);
    }
  });

  const fiveDayWeatherElement = fiveDaysForecast.map((item, index) => {
    return (
      <tr key={index} className="border-b-2 border-slate-300">
        <td className="px-2 text-sm lg:text-lg">
          {format(fromUnixTime(item.dt), "EEEE")}
        </td>
        <td className="px-2 text-center">
          <figure className="w-10 lg:w-16">
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
              alt={item.weather[0].description}
            />
          </figure>
        </td>
        <td className="text-center lg:text-lg">{item.main.humidity}%</td>
        <td className="text-center lg:text-lg">
          {isFarenheit ? cToF(item.main.temp) : item.main.temp}&deg;
        </td>
      </tr>
    );
  });

  return (
    <div className="my-5 text-slate-900">
      <table className="mx-auto w-11/12">
        <thead>
          <tr className="border-b-2 border-slate-400">
            <th className="pl-2 text-left text-sm lg:text-xl">DAY</th>
            <th className="text-sm lg:text-xl">&nbsp;</th>
            <th className="text-sm lg:text-xl">HUMIDITY</th>
            <th className="px-3 text-sm lg:text-xl">TEMPERATURE</th>
          </tr>
        </thead>
        <tbody>{fiveDayWeatherElement}</tbody>
      </table>
    </div>
  );
};

FiveDayForecast.propTypes = {
  isFarenheit: PropTypes.bool,
  data: PropTypes.object,
};

export default FiveDayForecast;
