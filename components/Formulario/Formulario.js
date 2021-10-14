import React, {useState, useEffect} from "react";
import {Text,View,StyleSheet} from "react-native"
import { Picker } from "@react-native-community/picker";
import axios from "axios";

const Formulario = () =>{
    const [moneda, setMoneda] = useState('')
    const [Criptomoneda, setCriptomoneda] = useState('')
    const [Criptomonedas, setCriptomonedas] = useState('')

    const obtenerMoneda = moneda =>{
        console.log(moneda);
    }
    useEffect(() =>{
        const consultarAPI = async ( ) =>{
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setCriptomonedas(resultado.data.Data);
        }
        consultarAPI()
    },[])
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
            selectedValue={moneda}
                onValueChange={ moneda =>obtenerMoneda(moneda) }
            >
                <Picker.Item label="- Seleccione -" value=""/>
                <Picker.Item label="Dolar EE.UU" value="USD"/>
                <Picker.Item label="Peso Mexicano" value="MXN"/>
                <Picker.Item label="Euro" value="EUR"/>
                <Picker.Item label="Libra Esterlina" value="GBP"/>
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontFamily:'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical:20
    }
})

export default Formulario;