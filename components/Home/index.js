import * as React from 'react';
import { StyleSheet, TextInput, View, StatusBar, Button } from 'react-native';
import QRCode from 'react-native-qrcode';
import { SafeAreaView } from 'react-navigation';
import { Constants } from 'expo';
import axios from 'axios'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver_info: {
        name: 'Justin',
        vehicle: 'MAXI-TBS123',
      },
    };
  }
  /**
   * Taking the information the login screen was sending, this method will get the drivers information            specifically the driver's name and maxi-taxis's plate identification
   * This information will be stored in the driver_info object which will be used to create the QR Code.
   */
  componentWillMount(){
      const temp=this.props.navigation.state.params.user.plate
      axios.get('https://checkin-checkout-backend.herokuapp.com/api/plate/'+temp).then(doc=>{
        this.setState({
          driver_info: doc.data
        })
      })  
    
  }
  /**
   * This methods render's only the QR code on the main screen of the driver's app upon successful login.
   */
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/**
         *This QRCode tag generates the QR Code that is scanned by the passenger.
         *The QR Code holds the Driver's Name and License Plate Number of the maxi whic is taken from the              driver_info object state.
         */}
        <QRCode
          value={
            this.state.driver_info.name + ',' + this.state.driver_info.plate
          }
          size={300}
          bgColor="black"
          fgColor="white"
        />
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
