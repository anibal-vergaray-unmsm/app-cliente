import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

import {
    StyleSheet,
  } from 'react-native';
  
const styles = StyleSheet.create({
    formulario: {
      color: Colors.black,
      fontSize: 18,
      marginTop: 20,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    },
   
    nombre: {
      color: Colors.dark,
      fontSize: 18,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20, 
      fontWeight: '600',
      paddingLeft: 20,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: Colors.black,
      paddingRight: 12,
    }, 
   
    apellido: {
      color: Colors.dark,
      fontSize: 18,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20, 
      fontWeight: '600',
      paddingLeft: 20,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: Colors.black,
      paddingRight: 12,
    }, 
   
    fechaDeNacimiento: {
      color: Colors.dark,
      fontSize: 18,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20, 
      fontWeight: '600',
      paddingLeft: 20,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: Colors.black,
      paddingRight: 12,
    },
   
    colorBtn: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 7,
    },
   
    colorTxtBtn: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    },
   
    errorText: {
      fontSize: 14,
      color: 'red',
      marginBottom: 20,
      marginLeft: 20
    }
   
  });

export default styles;