import React, { useState,useEffect } from 'react';
import * as Font from "expo-font"
import { 
  StyleSheet, 
  Image,
  View
} from 'react-native';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import axios from "axios"
import Cotizacion from './components/Cotizacion/Cotizacion';

export default function App() {
  // forma de importar fuente externa. 
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})
  useEffect(() =>{
    if(!fontsLoaded){
      loadFonts();
    }
  })
  const loadFonts = async ( ) =>{
    await Font.loadAsync({
      'Lato-Black': require('./assets/fonts/Lato-Black.ttf')
    })
    setFontsLoaded(true)
  }
  //esto se ejecuta cuando consultarAPI es true
  useEffect(() =>{
    const cotizarCriptomoneda = async () =>{

      if(consultarAPI){
        console.log("listo para cotizar");
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        //guardo el resultado que con las monidas que necesito.
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda])
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
        setConsultarAPI(false)
      }
    }
    cotizarCriptomoneda()
  },[consultarAPI])
  return (
    <>
      <Header/>
      <Image 
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          setCriptomoneda={setCriptomoneda}
          setMoneda={setMoneda}
          setConsultarAPI={setConsultarAPI}
        />
        <Cotizacion 
          resultado={resultado}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagen:{
    width: "100%",
    height:150,
    marginHorizontal:"2.5%"
  },
  contenido: {
    marginHorizontal:"2.5%"

  }
});
