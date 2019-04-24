import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import QRCode from 'react-native-qrcode';
import { SafeAreaView } from 'react-navigation';
import { Constants } from 'expo';
import HomeScreen from './components/Home';
import Transactions from './components/Transactions';
import Wallet from './components/Wallet';
import SignUp from './components/SignUp';
import SignIn from './components/Signin';
import InitialScreen from './components/InitialScreen';
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

/**
 * This function creates the tab navigtion that renders the main home screen, transaction screen and            wallet screen for the driver.
 */
const AppNav = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Home',
        },
      },
      Transactions: {
        screen: Transactions,
        navigationOptions: {
          title: 'Transactions',
        },
      },
      Wallet: {
        screen: Wallet,
        navigationOptions: {
          title: 'Wallet',
        },
      },
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 11,
          color: 'white',
        },
        tabStyle: {
          width: 130,
        },
        style: {
          backgroundColor: 'green',
        },
      },
    },
    {
      initialRouteName: 'Home',
    }
  )
);

/**
 * This  function renders the initail screen, the sign in screen, login screen and the tab sceen.
 */
const StackNav = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: InitialScreen,
      },
      Tab: {
        screen: AppNav,
      },
      SignUp: {
        screen: SignUp,
      },
      SignIn: {
        screen: SignIn,
      },
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: true,
      },
    }
  )
);
/** 
 * This class the renders the StackNav function
*/
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#fff' }}
        forceInset={{ top: 'always' }}>
        <StackNav />
      </SafeAreaView>
    );
  }
}
