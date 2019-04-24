import * as React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import QRCode from 'react-native-qrcode';
import { SafeAreaView } from 'react-navigation';
import { Constants } from 'expo';

/**
 * This class us used to render the driver's current balance on their account.
 * It takes the wallet ID and wallet balance and displays the information to the driver.
 */
export default class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver_wallet: {
        id: '12345',
        balance: 0,
      },
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Wallet ID: {this.state.driver_wallet.id}</Text>
        <Text>Wallet Balance: ${this.state.driver_wallet.balance}</Text>
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
