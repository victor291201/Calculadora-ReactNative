import React from 'react';
import { Dimensions, StatusBar,  Text, View } from 'react-native';
import { styles } from '../styles/themeBlack';
import { Button1,Button2 } from '../components/Button';
import useCalculadora from '../hooks/useCalculadora';

export default function CalculadoraScreen() {
  const {width,height} = Dimensions.get("window");
  const med = width>height? height:width;
  const {numero1,numero2,limpiar,insertarNumero,eliminarUltimo,operar,igual} = useCalculadora()
  return (
    <View style={[{flex:1},styles.jCEnd,styles.aIEnd]}>
        <StatusBar
            backgroundColor={"black"}
            barStyle={"light-content"}
        />
        <View style={[{paddingHorizontal:med*0.012},styles.jCEnd,styles.aIEnd]}>
          <Text style={[styles.textFZ3,styles.textGray]}
          numberOfLines={1}
          adjustsFontSizeToFit>
            {numero2}</Text>
          <Text style={[styles.textFZ4,styles.textLight]}
          numberOfLines={1}
          adjustsFontSizeToFit>
            {numero1}</Text>
        </View>
        <View style={[styles.fWWarp,styles.fDRow,styles.jCCenter]}>
          <Button1 press={limpiar} text="C" type="2"/>
          <Button1 press={limpiar} text="+/-" type="2"/>
          <Button1 press={eliminarUltimo} text="del" type="2"/>
          <Button1 press={()=>operar("/")} text="/" type="3"/>

          <Button1 press={()=>insertarNumero("7")} text="7" type="1"/>
          <Button1 press={()=>insertarNumero("8")} text="8" type="1"/>
          <Button1 press={()=>insertarNumero("9")} text="9" type="1"/>
          <Button1 press={()=>operar("x")} text="x" type="3"/>

          <Button1 press={()=>insertarNumero("4")} text="4" type="1"/>
          <Button1 press={()=>insertarNumero("5")} text="5" type="1"/>
          <Button1 press={()=>insertarNumero("6")} text="6" type="1"/>
          <Button1 press={()=>operar("-")} text="-" type="3"/>

          <Button1 press={()=>insertarNumero("1")} text="1" type="1"/>
          <Button1 press={()=>insertarNumero("2")} text="2" type="1"/>
          <Button1 press={()=>insertarNumero("3")} text="3" type="1"/>
          <Button1 press={()=>operar("+")} text="+" type="3"/>

          <Button2 press={()=>insertarNumero("0")} text="0"/>
          <Button1 press={()=>insertarNumero(".")} text="." type="1"/>
          <Button1 press={igual} text="=" type="3"/>
        </View>
    </View>
  )
}
