import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import * as firebase from 'firebase';
import axios from 'axios';

/**
 * This class renders the page that allows drivers to sign up for a new account.
 * This driver has to enter their email and password, first name, last name and maxi license plate number.
 * The they are successful with the login they will be redirected to the main home screen of the app.
 * If the sign up was successful the will be redirected to the login screen screen.
 */
export default class SignUp extends React.Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    plate: '',
    password: '',
  };
  /**
   * This method attempts to create a new driver account with the information that the user input into in         the form.
   * The the account is created, the app will post the driver's information to the Users datbase with the         accounts uid.
   * If this is successful it will redirect the user to the login screen.
   */
  handleClick() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
    firebase.auth().onAuthStateChanged(user => {
      axios.post('https://checkin-checkout-backend.herokuapp.com/api/create', {
        user: user.uid,
        name: this.state.fname + ' ' + this.state.lname,
        plate: this.state.plate,
        wallet: 0,
      });
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.regForm}>
        <Text style={styles.header}>Registration</Text>
        <TextInput
          style={styles.textinput}
          placeholder="First Name"
          onChangeText={fname => this.setState({ fname })}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Last Name"
          onChangeText={lname => this.setState({ lname })}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Licenese Plate"
          onChangeText={plate => this.setState({ plate })}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.button}>
          <Button
            title="Sign Up"
            onPress={() => {
              this.handleClick();
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
