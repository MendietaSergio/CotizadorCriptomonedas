import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from "react-native";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import axios from "axios";
import Cotizacion from "./components/Cotizacion/Cotizacion";

export default function App() {
  // forma de importar fuente externa.
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [consultarAPI, setConsultarAPI] = useState(false);
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false)
  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });
  const loadFonts = async () => {
    await Font.loadAsync({
      "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    });
    setFontsLoaded(true);
  };
  //esto se ejecuta cuando consultarAPI es true
  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        console.log("listo para cotizar");
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        //guardo el resultado que con las monidas que necesito.
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        //Ocultar spinner y mostrar resultado
        setCargando(true)
        setTimeout(() =>{
          setConsultarAPI(false);
          setCargando(false)
        },3000)
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI]);
  const componente = cargando ? <ActivityIndicator size="large" color="#5E49E2"/> : <Cotizacion resultado={resultado} />;
  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.imagen}
          source={require("./assets/img/cryptomonedas.png")}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            setCriptomoneda={setCriptomoneda}
            setMoneda={setMoneda}
            setConsultarAPI={setConsultarAPI}
          />
        </View>
        <View style={{marginTop:40}}>
          {componente}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
  contenido: {
    marginHorizontal: "2.5%",
  },
});
