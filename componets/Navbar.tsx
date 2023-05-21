/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react'
import {StyleSheet,View,Text } from 'react-native'

export default function Navbar() : JSX.Element{
  return (
 <View style={styles.navBar}>
    <Text style={styles.title}>Todo</Text>
 </View>
  );
}
const styles = StyleSheet.create({
    navBar:{
        width:100,
        margin:0
    },
        title:{
        backgroundColor: 'coral',
        width:410,
        color: '#FFF',
        padding:15,
        fontSize:24,
        textAlign: 'center'
    }
});
