import React, {useState} from 'react';
import { Formik } from 'formik';
import styles from './styles';
import {loginValidationSchema, formatDate} from './Helpers';
import DateTimePicker from '@react-native-community/datetimepicker';
import { postCliente } from './clienteService';

import {
  View,
  Text,
  TextInput, 
  TouchableOpacity
} from 'react-native';
 
const App = () => {
  const [date, setDate] = useState(new Date())
  const [visibleDate, setVisibleDate] = useState(false)
  const initialValues = { nombre: '', apellido:'' }

  const onChange = (selectedDate) => {
    const currentDate = selectedDate.nativeEvent.timestamp? selectedDate.nativeEvent.timestamp : date;
    setDate(currentDate);
    console.log(selectedDate.nativeEvent.timestamp);
    setVisibleDate(false);
  };

  const onPressDate = () => {
    setVisibleDate(true);
  };

  const handleSubmit = (values) => {
    const data = {...values,fechaDeNacimiento: formatDate(date)};
    postCliente(data);
  }
  
   return (
    <>      
        <View> 
          <Text style={styles.formulario}> Datos del Cliente </Text>
          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={(values,{resetForm}) => {
              handleSubmit(values);
              resetForm();}
            }
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              resetForm
            }) => (
              <>
 
                <TextInput style={styles.nombre} 
                  placeholder="Nombres"
                  onChangeText={handleChange('nombre')}
                  onBlur={handleBlur('nombre')}
                  value={values.nombre}
                  keyboardType="default" /> 
 
                  {(errors.nombre && touched.nombre) &&
                    <Text style={styles.errorText}>{errors.nombre}</Text>
                  }

                <TextInput style={styles.apellido} 
                  placeholder="Apellidos"
                  onChangeText={handleChange('apellido')}
                  onBlur={handleBlur('apellido')}
                  value={values.apellido}
                  keyboardType="default" /> 

                {(errors.apellido && touched.apellido) &&
                    <Text style={styles.errorText}>{errors.apellido}</Text>
                  }
 
                <Text style={styles.fechaDeNacimiento} 
                  placeholder="Fecha de Nacimiento"
                  onPress={onPressDate}
                  >{date? formatDate(date) :"Fecha de Nacimiento"}</Text>
                 
                 {visibleDate && <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode='date'
                      onChange={onChange}
                  />}
                  
                  {(errors.fechaDeNacimiento && touched.fechaDeNacimiento) &&
                    <Text style={styles.errorText}>{errors.fechaDeNacimiento}</Text>
                  }
         
                <TouchableOpacity
                  style={styles.colorBtn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.colorTxtBtn}>Agregar</Text>
                </TouchableOpacity>
 
              </>
            )}
          </Formik>
        </View>
    </>
  )
};

export default App;