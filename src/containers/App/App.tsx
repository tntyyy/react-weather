import React from 'react';

import Wrapper from '../Wrapper';
import City from '../../components/City';
import Temperature from '../../components/Temperature';
import WeatherDescription from '../../components/WeatherDescription';

const App = () => {
  return (
    <div>
      <Wrapper>
        <Temperature />
        <WeatherDescription />
        <City />
      </Wrapper>
    </div>
  );
};

export default App;
