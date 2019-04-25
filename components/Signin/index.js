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
 * This class renders the page that allows drivers to sign in to their account.
 * This driver has to enter their email and password.
 * The they are successful with the login they will be redirected to the main home screen of the app.
 */
export default class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  };
  /**
   * This method attemps to login to a users account.
   * If the login was successful it will get the drivers information from the database and send the data to       the Tabs scrren of the app.
   * If failed it will remain in the login screen.
   */
  handleClick() {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
      firebase.auth().onAuthStateChanged(user => {
        console.log(user.uid);
        axios
          .get(
            'https://checkin-checkout-backend.herokuapp.com/api/user/' +
              user.uid
          )
          .then(doc => {
            this.props.navigation.navigate('Tab', { user: doc.data });
          });
      });
    } catch (error) {
      console.log(error.toString(error));
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.regForm}>
        <Text style={styles.header}>Login</Text>
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
            title="Login"
            onPress={() => {
              this.handleClick();
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
