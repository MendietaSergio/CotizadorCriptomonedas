import React from "react";
import {Text, View, StyleSheet} from "react-native"

const Cotizacion = ({
    resultado
}) =>{
    //si el objeto esta vacío, muestra nulo.
    if(Object.keys(resultado).length === 0) return null;
    return(
        <View style={styles.resultado}>
            <Text style={styles.texto}>
                <Text style={styles.span}> {resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio más alto del día: {''}
                <Text style={styles.span}> {resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}>Precio más bajo del día: {''}
                <Text style={styles.span}> {resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Variación últimas 24 horas: {''}
                <Text style={styles.span}> {resultado.CHANGEPCT24HOUR}</Text>
            </Text>
            <Text style={styles.texto}>Última Actualizacón: {''}
                <Text style={styles.span}> {resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado: {

    },
    texto: {

    },
    precio: {

    },
    span:{

    }
})

export default Cotizacion;