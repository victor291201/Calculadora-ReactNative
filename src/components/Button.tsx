import React from 'react'
import { Dimensions, Text, TouchableHighlight } from 'react-native';
import { styles } from '../styles/themeBlack';
interface Props{
  type?:"1"|"2"|"3",
  text:string,
  press: ()=>void
}

const {width,height} = Dimensions.get("window");
const med:number= width>height? height:width;
const styleBoton = {width:med*0.22,height:med*0.22,borderRadius:med*0.22,margin:med*0.012}
const styleBoton2 = {width:med*0.463,height:med*0.22,borderRadius:med*0.22,margin:med*0.012}

export function Button1({type,text,press}:Props) {
var color =  {}
if(type == "3"){
  color =  styles.bgNaranja
}else{
  if(type =="2"){
    color = styles.bgGris
  }else{
    color = styles.bgDark2
  }
}
  return (
    <TouchableHighlight activeOpacity={0.8} style={[styleBoton,color,styles.aICenter,styles.jCCenter]} onPress={press}>
      <Text style={[styles.aICenter,styles.jCCenter,styles.textLight,styles.textFZ2]}>{text}</Text>
    </TouchableHighlight>
  )
}
export function Button2({text,press}:Props) {
  return (
    <TouchableHighlight activeOpacity={0.8} style={[styleBoton2,styles.aIEnd,styles.bgDark2,styles.jCCenter]} onPress={press}>
      <Text style={[styles.aICenter,styles.jCCenter,styles.textLight,styles.textFZ2,styles.mR4]}>{text}</Text>
    </TouchableHighlight>
  )
}

