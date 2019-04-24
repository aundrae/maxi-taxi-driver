import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';

/**
 * Thic class renders the first screen the driver meets when they open the app.
 * They will met with options to either sign up or login.
 * When the driver choose an option, it will redirect him/her to the respective screen.
 */
export default class regForm extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Sign Up"
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}
          />
          <Button
            title="Login"
            onPress={() => {
              this.props.navigation.navigate('SignIn');
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
