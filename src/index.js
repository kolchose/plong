import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import firebase from '../lib/firebase'

class Plong extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeEmail(email) { this.setState({email}) };
  onChangePassword(password) { this.setState({password}) };
  onSubmit(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`ERROR: ${errorCode}: ${errorMessage}`);
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to Plong</Text>
        <TextInput style={styles.textInput} onChangeText={this.onChangeEmail} placeholder="Email" />
        <TextInput secureTextEntry style={styles.textInput} onChangeText={this.onChangePassword} placeholder="Password" />

        <TouchableHighlight onPress={() => this.onSubmit(this.state.email, this.state.password)}>
          <Text>Submit</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
});

export default Plong;
