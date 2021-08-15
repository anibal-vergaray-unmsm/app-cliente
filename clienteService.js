import axios from 'axios';
import {Alert} from "react-native";

export function postCliente(data) {
    console.log(JSON.stringify(data));
    axios.post('https://glacial-stream-24243.herokuapp.com/clientes/',data)
    .then(function (response) {
        Alert.alert(
            "CORRECTO",
            response.data.message,
            [
              { text: "OK" }
            ]
          );
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
        Alert.alert(
            "ERROR",
            "Algo salio mal",
            [
              { text: "OK" }
            ]
          );
    });;
};
