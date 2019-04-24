import * as React from 'react';
import { StyleSheet, TextInput, View, StatusBar, Button } from 'react-native';
import QRCode from 'react-native-qrcode';
import { SafeAreaView } from 'react-navigation';
import { Constants } from 'expo';

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
            this.state.driver_info.name + ',' + this.state.driver_info.vehicle
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
