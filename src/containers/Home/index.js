import React from 'react';
import {StyleSheet, Platform, 
    Image, Text, 
    View, Button, 
    FlatList
    } from 'react-native';
import firebase from 'react-native-firebase';

//import firestore from '@react-native-firebase/firestore';

export default class Home extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }

  // function untuk signout
  signoutNow = () => {
    firebase.auth().signOut()
      .then(this.props.navigation.navigate('Signup'));
  }

  // function membuka layout database 
  opendatabaseNow = () => {
    this.props.navigation.navigate('Database');
  }

  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>Hai </Text>
        <Text style={{color: 'blue', fontSize: 25}}>
          {currentUser && currentUser.email}
        </Text>
      </View>
        
      <View style={{marginVertical: 20}}>
        <Button
            title="Signout" color="blue"
            onPress={this.signoutNow()}>
        </Button>
      </View>

      {/* <View style={{marginVertical: 20}}>
        <Button
            title="Database" color="blue"
            onPress={this.opendatabaseNow()} />
      </View> */}
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
