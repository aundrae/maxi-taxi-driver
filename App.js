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
import * as firebase from 'firebase'

/**
 * This is the firebase config keys to acces the project to create accounts
 */
var config = {
    apiKey: "AIzaSyDkUHXPIpLCx9G6cMbrdE9h7nKyGlx9HhI",
    authDomain: "express-demo-54676.firebaseapp.com",
    databaseURL: "https://express-demo-54676.firebaseio.com",
    projectId: "express-demo-54676",
    storageBucket: "express-demo-54676.appspot.com",
    messagingSenderId: "157079182412"
  }
/**
 * This checks to see firebase was initalized or not.
 * If it isn't it will be initalized.
 */
if(!firebase.apps.length)
  firebase.initializeApp(config)

/**
 * This function creates the tab navigtion that renders the main home screen, transaction screen and            wallet screen for the driver.
 * These screen will only be accessible if the login was successful.
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
