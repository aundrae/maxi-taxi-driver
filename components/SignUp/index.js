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
 * This class renders the page that allows drivers to sign up for a new account.
 * This driver has to enter their email and password, first name, last name and maxi license plate number.
 * The they are successful with the login they will be redirected to the main home screen of the app.
 * If the sign up was successful the will be redirected to the login screen screen.
 */
export default class SignUp extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.regForm}>
        <Text style={styles.header}>Registration</Text>
        <TextInput style={styles.textinput} placeholder="First Name" />
        <TextInput style={styles.textinput} placeholder="Last Name" />
        <TextInput style={styles.textinput} placeholder="Licenese Plate" />
        <TextInput style={styles.textinput} placeholder="Email" />

        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          placeholder="Password"
        />

        <TouchableOpacity style={styles.button}>
          <Button
            title="Sign Up"
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
  regForm: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
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
