import React, { useState,useEffect } from 'react';
import * as Font from "expo-font"
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Header from './components/Header/Header';

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
    <Text style={styles.prueba}>Prueba de Lato Black</Text>
      <Header/>
    </>
  );
}

const styles = StyleSheet.create({
  prueba: {
    fontFamily:"Lato-Black"
  }
  
});
