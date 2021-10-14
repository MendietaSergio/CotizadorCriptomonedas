import React from "react";
import { Text, StyleSheet, Platform } from "react-native"

const Header = () =>{
    return(
        <Text style={styles.encabezado}>Criptomonedas</Text>
    )
}
export default Header;

const styles = StyleSheet.create({
    encabezado :{
        paddingTop: Platform.OS === 'ios' ? 50 : 25,
        fontFamily: 'Lato-Black'
    }
})