import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import Home from 'app/screens/Home';
import Cart from 'app/screens/Cart';
import ProductsList from 'app/screens/ProductsList';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            headerRight: () => <ThemeController />,
          }}
        />
        <Stack.Screen
          name="ProductsList"
          component={ProductsList}
          options={{
            title: 'Products List',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
