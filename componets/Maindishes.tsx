/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity

} from 'react-native';
import type {PropsWithChildren} from 'react'
type PreviewLayoutProps=PropsWithChildren<{
  label:string;
  values:string[];
  selectedValue:string;
  setSelectedValue:(value:string)=>void;
}>
const itemData = [
  {
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
        }}
      />
    )
  },
  {
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
        }}
      />
    )
  }

];
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function Maindishes(): JSX.Element {
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [flexDirection, setflexDirection] = useState('column');


    return (
        <SafeAreaView  style={{flex:1}}>
            <View style={{flex:1}}>
            <PreviewLayout
                label="flexDirection"
                values={['column', 'row', 'row-reverse', 'column-reverse']}
                selectedValue={flexDirection}
                setSelectedValue={setflexDirection}>
            {DATA.map((item)=>(
              <>
                  <Text style={styles.header}>{item.title}</Text>
                  <View style={styles.box}>
                  {item.data.map((c)=>(
                     <Text style={[styles.inner, { marginRight: 5 ,borderRadius:10,}]} key={c}>
                     {c}
                   </Text>
                  
               
                  ))}
                  </View>

</>
           
          
        ))}
            </PreviewLayout>
      </View>
        
       
         
   
        {/* <SectionList
          sections={DATA}
          
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.boxContainer}>
                   <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>
       
       <View style={styles.box}>
          <Text style={styles.inner}>
            {item}</Text>
          
        </View>
    </PreviewLayout>   
        </View>

          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
        
      </SafeAreaView>
      
    )
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

const styles = {
 
  // boxContainer:{
  //   width:'78%',
  //   backgroundColor:'#FFF',
  //   flexDirection:'row',
  //   flexWrap:'wrap',
  //   padding:20,
  //   justifyContent:'space-between'
  // },
  box:
  {
    backgroundColor:'aliceblue',
    padding:10,
    marginBottom:1,
    justifyContent:'space-between',
    borderRadius:10,
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%',



  },
  inner:{
    backgroundColor: 'coral',
    fontSize:20,
    color:'#000',
  padding:20,
marginBottom:20,
  flexDirection:'row',
  flexWrap:'wrap',
 


  },
  header:{
    fontSize:25,
    color:'#000'
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


  
};
