/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react'
import {StyleSheet,View,Text } from 'react-native'
export default function Header() :JSX.Element{
    return (
        <View style={styles.navBar}>
           <Text style={styles.title}>create your Todo list</Text>
        </View>
         );
}
const styles = StyleSheet.create({
    navBar:{
        width:100,
        margin:0,
        marginTop:30
    },
        title:{
        width:410,
        padding:15,
        fontSize:18,
        textAlign: 'center'
    }
})