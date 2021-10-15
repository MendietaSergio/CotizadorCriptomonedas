import React, {useState, useEffect} from "react";
import {Text,View,StyleSheet, TouchableHighlight, Alert} from "react-native"
import { Picker } from "@react-native-community/picker";
import axios from "axios";

const Formulario = ({
    moneda,
    setMoneda,
    criptomoneda,
    setCriptomoneda,
    setConsultarAPI
}) =>{
    
    const [criptomonedas, setCriptomonedas] = useState([])

    const obtenerMoneda = moneda =>{
        setMoneda(moneda)
    }
    const obtenerCriptomoneda = cripto =>{
        setCriptomoneda(cripto)
    }
    const cotizarPrecio = () =>{
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta()
            return;
        }
        //pasa la validacion
        console.log("cotizando...");
        setConsultarAPI(true)

    }
    const mostrarAlerta = () =>{
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios.',
            [
                {text:'OK'}
            ]
        )
    }
    useEffect(() =>{
        const consultarAPI = async ( ) =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setCriptomonedas(resultado.data.Data);
            console.log("resultado: ",resultado.data.Data);
        }
        consultarAPI()
    },[])
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
            selectedValue={moneda}
                onValueChange={ moneda =>obtenerMoneda(moneda) }
                itemStyle={{height:120}}
            >
                <Picker.Item label="- Seleccione -" value=""/>
                <Picker.Item label="Dolar EE.UU" value="USD"/>
                <Picker.Item label="Peso Mexicano" value="MXN"/>
                <Picker.Item label="Euro" value="EUR"/>
                <Picker.Item label="Libra Esterlina" value="GBP"/>
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
            selectedValue={criptomoneda}
                onValueChange={ cripto =>obtenerCriptomoneda(cripto) }
                itemStyle={{height:120}}
            >
                {criptomonedas.map((cripto) => (
                    <Picker.Item key={cripto.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                ))}
            </Picker>
            <TouchableHighlight 
                style={styles.btnCotizar}
                onPress={() => cotizarPrecio()}
            >
                <Text style={styles.txtCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontFamily:'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical:20
    },
    btnCotizar: {
        backgroundColor:"#5E49E2",
        padding:10,
        marginTop:20
    },
    txtCotizar:  {
        color:"#FFF",
        fontSize:18,
        fontFamily: "Lato-Black",
        textTransform:"uppercase",
        textAlign:"center"
    }
})

export default Formulario;