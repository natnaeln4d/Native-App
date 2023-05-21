/* eslint-disable curly */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React,{useState} from 'react';
import {StyleSheet,View,TextInput,Button } from 'react-native'
export default function Addtodo(props: { onAddTodo: (todo: string) => void }): JSX.Element {
    const [todo, setTodo] = useState("");
  
    const handleAddTodo = () => {
      if (todo.trim() === "") return;
      props.onAddTodo(todo);
      setTodo("");
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.section}
          multiline
          value={todo}
          onChangeText={(val) => setTodo(val)}
          placeholder="enter new to do list"
        />
        <View style={styles.btn}>
          <Button title="Add here" onPress={handleAddTodo} />
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
    container:{
        width:380,
        margin:20,

    },
   section:{
    padding:20,
    margin:10,
    width:350,
    borderBottomWidth:1,
    borderBottomColor: 'coral',
   },
   btn:{
    marginTop:8,
    width:100,
     backgroundColor: 'rgba(97,197,91)', 
     alignSelf: 'center',

    borderWidth:0
   }
  });