/* eslint-disable jsx-quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-trailing-spaces
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState} from 'react';
import Navbar from './componets/Navbar'
import Header from './componets/Header'
import Todolist from './componets/Todolist'
import Addtodo from './componets/Addtodo';
import Maindishes from './componets/Maindishes'
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function HomeScreen():JSX.Element{
  const [data, setData] = useState([]);



  const addTodo = (todo: string) => {
    const newTodo = {
      text: todo,
      key: Math.random().toString(),
    };
    setData((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
      <View style={styles.section}>
      <Navbar />
      <Header />
       <Addtodo onAddTodo={addTodo} />
      
       <View style={styles.navBar}>
       <Todolist data={data} />
       {/* */}

       </View>
       {/* <Maindishes />  */}
  
     
    </View>
  
      </ScrollView>
  
    </SafeAreaView>
  );
  
}

function App(): JSX.Element {

  return(
<NavigationContainer>
<Stack.Navigator initialRouteName='Home'>
  <Stack.Screen name='Home' component={HomeScreen} />
</Stack.Navigator>
</NavigationContainer>
  );
 
  
}


const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1
  },
  containr: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
 section:{
  flex:1

 }, navBar:{
  width:500,
  margin:10,
  marginTop:0
},
tododata:{
  borderWidth:1,
  borderRadius:5,
  padding:20,
  margin:10,
  width:350 
},
row: {
  flexDirection: 'row',
  flexWrap: 'wrap',
},
button: {
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: 4,
  backgroundColor: 'oldlace',
  alignSelf: 'flex-start',
  marginHorizontal: '1%',
  marginBottom: 6,
  minWidth: '48%',
  textAlign: 'center',
},
selected: {
  backgroundColor: 'coral',
  borderWidth: 0,
},
buttonLabel: {
  fontSize: 12,
  fontWeight: '500',
  color: 'coral',
},
selectedLabel: {
  color: 'white',
},
label: {
  textAlign: 'center',
  marginBottom: 10,
  fontSize: 24,
},
box: {
  width: 50,
  height: 50,
}
});

export default App;
