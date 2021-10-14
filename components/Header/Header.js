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
        fontFamily: 'Lato-Black',
        backgroundColor:"#5E49E2",
        paddingBottom:10,
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:20,
        color:"#FFF",
        marginBottom:30
    }
})