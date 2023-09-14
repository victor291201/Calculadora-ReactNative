import  { useState } from 'react'

export default function useCalculadora() {
  
    const [numero1, setNumero1] = useState<string>("0");
    const [numero2, setNumero2] = useState<string>("0");
    const [operador, setOperador] = useState<string>("");
  
    const limpiar=()=>{
      var numb:string = numero1;
      setNumero2(numb);
      setNumero1("0")
    }
    const insertarNumero = (x:string)=>{
      if((numero1.length>0 && !numero1.includes("."))|| x!="."){
        var numb:string = numero1+x;
        if( x!="." && numero1=="0"){
          numb=x
        }
        setNumero1(numb)
      }
    }
    const eliminarUltimo = ()=>{
      if(numero1!="0" && numero1.length!=1){
        setNumero1(numero1.slice(0,numero1.length-1))
      }
      if(numero1.length==1){
        setNumero1("0")
      }
    }
    const operar = (x:string)=>{
      if(operador!=""){
        setNumero2(igual());
        setNumero1("0");
        setOperador(x);
      }else{
        var numb:string = numero1;
        setNumero2(numb);
        setNumero1("0");
        setOperador(x);
      }
    }
    const igual = ():string=>{
      var resultado:number= 0;
      switch(operador){
        case "/":
          resultado = parseFloat(numero2)/parseFloat(numero1);
          break;
        case "x":
          resultado = parseFloat(numero1)*parseFloat(numero2);
          break;
        case "+":
          resultado = parseFloat(numero1)+parseFloat(numero2);
          break;
        case "-":
          resultado = eval(numero2+"-"+numero1);
          break;
      }
      var numb:string =  numero1
      resultado = resultado - parseInt(resultado.toString()) == 0?parseInt(resultado.toString()): resultado
      resultado != 0 ?setNumero1(resultado.toString()):setNumero1("0");
      setNumero2(numb)
      setOperador("")
      return resultado.toString()
    }
    const ans = ()=>{
        setNumero1(numero2)
    }
    return {numero1,numero2,operador,limpiar,insertarNumero,eliminarUltimo,operar,igual,ans}
}
