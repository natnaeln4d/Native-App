/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React,{useState} from 'react';
import {FlatList,StyleSheet,View,Text,TouchableOpacity } from 'react-native'
import type {PropsWithChildren} from 'react'
type PreviewLayoutProps=PropsWithChildren<{
  label:string;
  values:string[];
  selectedValue:string;
  setSelectedValue:(value:string)=>void;
}>
type Todo=PropsWithChildren<{
  item:string,
  index:number
}>

export default function Todolist({ data }: { data: any[] }): JSX.Element {
    const [visible, setVisible] = useState(Array(data.length).fill(false));
    const [selectedItem, setSelectedItem] = useState(null);
    const [flexDirection, setflexDirection] = useState('column');
  
    const handleCheck = (index: number) => {
      setVisible(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
      setSelectedItem(data[index]);
    };
    
  
    return (
      <View style={styles.navBar}>
        <Text style={styles.title}>Todo's</Text>
        <PreviewLayout
            label="flexDirection"
            values={['column', 'row', 'row-reverse', 'column-reverse']}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>
      
      {data.map((item: any, index: number) => (
  <TouchableOpacity style={styles.item} onPress={() => handleCheck(index)} key={item.key}>
    <Text style={styles.tododata}>
              {item.text.length > 50
                ? `${item.text.slice(0, 20)}...`
                : item.text}
            </Text>
    {visible[index] && selectedItem === item && (
      <View style={styles.container}>
        <Text style={styles.todo} key={item.key}>
          {item.text} additional info
        </Text>
      </View>
    )}
  </TouchableOpacity>
))}
      
         
          
      
        
           </PreviewLayout>
      </View>

    );
  }
  const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
  }: PreviewLayoutProps) => (
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
    </View>
  );
  
const styles = StyleSheet.create({
    navBar:{
        width:'90%',
     padding:10,
     backgroundColor:'aliceblue',
    },
    title:{
      width:'90%',
   alignContent:"center",
   alignItems:"center",
   textAlign:"center",
   marginBottom:10,
   fontSize:24
    },
    tododata:{
        borderWidth:1,
        borderRadius:5,
        padding:10,
        margin:10,
        width:'85%',
        alignContent:"center",
        alignItems:"center",
        textAlign:"center",
    },
    item: {
      flex: 1,
      Width: "100%",
 
      marginLeft:10,
      
      padding: 0,


  
    },
    container:{

  
     
        width:'90%',
        backgroundColor:'aliceblue',
   
        borderRadius:5,

    },
    todo:{
        padding:20,
        width:'100%',
        color: '#FFF',
        backgroundColor:'coral',
        borderRadius:5,
       
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
      alignItems: 'center',
      justifyContent:'center',
      marginHorizontal: '1%',
      marginBottom: 6,
      minWidth: '42%',
      textAlign: 'center',
      height:35,
      fontSize:24
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
})