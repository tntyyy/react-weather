import React, { useEffect, useState } from 'react';

import Wrapper from '../Wrapper';
import City from '../../components/City';
import Temperature from '../../components/Temperature';
import WeatherDescription from '../../components/WeatherDescription';

import { getApiResource, convertToCelsius } from '../../utils';
import { IP_URL, GEO_URL, WEATHER_URL, API_KEY } from '../../constants';
import { IGeoposition, IWeather } from '../../types';

const App = () => {
  const [geo, setGeo] = useState<IGeoposition>({} as IGeoposition);
  const [weather, setWeather] = useState<IWeather>({} as IWeather);

  useEffect(() => {
    (async () => {
      const responseIp = await getApiResource(IP_URL);
      const responseGeo = await getApiResource(GEO_URL + responseIp.ip);
      setGeo(responseGeo);
    })();
  }, []);

  useEffect(() => {
    if (geo) {
      (async () => {
        const responseWeather = await getApiResource(
          `${WEATHER_URL}?lat=${geo.latitude}&lon=${geo.longitude}&appid=${API_KEY}`
        );
        setWeather(responseWeather);
      })();
    }
  }, [geo]);

  return (
    <div>
      <Wrapper>
        {weather?.main?.temp ? (
          <Temperature temp={convertToCelsius(weather.main.temp)} />
        ) : (
          <Temperature temp={0} />
        )}

        {weather?.weather?.length > 0 ? (
          <WeatherDescription description={weather.weather[0].description} />
        ) : (
          <WeatherDescription description="Unknown" />
        )}

        <City city={geo.city} />
      </Wrapper>
    </div>
  );
};

export default App;
