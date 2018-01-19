/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   Button,
   Alert,
   TextInput,
   View,
   Navigator,
   TouchableHighlight,
 } from 'react-native';

 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' +
     'Cmd+D or shake for dev menu',
   android: 'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });
 class Scene extends Component{
   render(){
     return (
       <View style={styles.container}>
         <Text>ページタイトル: {this.props.title}</Text>
         <TouchableHighlight onPress={this.props.onForward}>
           <Text>進む</Text>
         </TouchableHighlight>
       </View>
     )
   }
 }
 export default class App extends Component<{}> {
   render() {
     return (
       <View style={styles.container}>
         <TextInput style={styles.instructions}
           placeholder="Type here your ID!"
           // onChangeText={(text) => this.setState({text})}
         />
         <TextInput style={styles.instructions}
           placeholder="Type here your password!"
         />
         <Button title="登録" onPress={this._handlePress}/>
       </View>
     );
   }
   _handlePress() {
     Alert.alert("こんにちは！！");
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   id_form: {
     alignItems:'flex-start',
     color:'#111111'
   },
 });
