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
 * This class renders the page that allows drivers to sign in to their account.
 * This driver has to enter their email and password.
 * The they are successful with the login they will be redirected to the main home screen of the app.
 */
export default class Signin extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.regForm}>
        <Text style={styles.header}>Login</Text>
        <TextInput style={styles.textinput} placeholder="Email" />
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          placeholder="Password"
        />

        <TouchableOpacity style={styles.button}>
          <Button
            title="Login"
            onPress={() => {
              this.props.navigation.navigate('Tab');
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  regForm: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize:24,
    color: '#000',
    paddingBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000',
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});
