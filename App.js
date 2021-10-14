import React, { useState,useEffect } from 'react';
import * as Font from "expo-font"
import { 
  StyleSheet, 
  Image,
  View
} from 'react-native';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';

export default function App() {
  // forma de importar fuente externa. 
  const [fontsLoaded, setFontsLoaded] = useState(false);
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
  return (
    <>
      <Header/>
      <Image 
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario/>
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
