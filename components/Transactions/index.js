import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, Text } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-material-ui';

/**
 * This class displays the current and previous transactions in for passenger's commute in the driver's maxi.
 * This screen is updated when a new transaction is incurred or updating.
 * For each transaction, the information displayed are:
 * 1) The passengers name.
 * 2) The price of the commute (price will be 0 if it is a new transaction).
 * 3) The location the passenger enter's the maxi.
 * 4) The end location i.e the location where the passenger leaves(endpoint is set to 'TBD' if the passenger       now enter).
 */
export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  /**
   *When this screen is loading, it will pull all the previous and ongoing transactions for that specific        driver.
   *The It will the save all the transactions in the data array in the constructor.
   *This method will also continue to update the data if there are any changes.
   */
  componentDidMount() {
    const temp=this.props.navigation.state.params.user.plate
     const link='http://checkin-checkout-backend.herokuapp.com/api/transactions/driverID/'+temp
      setInterval(()=>{
         axios.get(link).then(doc =>{
         this.setState({ data: doc.data })
         })
     },1000)

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, height: 24 }}>
        {this.state.data.map(x => (
          <ListItem
            style={{ backgroundColor: '#008000' }}
            key={x.driverID}
            divider
            centerElement={{
              primaryText: x.transInfo.name,
              secondaryText: '$' + x.transInfo.price,
              tertiaryText:
                x.transInfo.start_location + ' - ' + x.transInfo.end_location,
            }}
          />
        ))}
        <Text>{this.state.temp}</Text>
      </SafeAreaView>
    );
  }
}
