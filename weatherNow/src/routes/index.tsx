import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import WeatherCity from '../pages/WeatherCity';

const Nav = createStackNavigator();

const Routes: React.FC = () => (
  <Nav.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Nav.Screen name="Home" component={Home} />
    <Nav.Screen name="WeatherCity" component={WeatherCity} />
  </Nav.Navigator>
);

export default Routes;
