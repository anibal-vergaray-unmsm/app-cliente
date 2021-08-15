import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
 
    nombre: yup
      .string("Ingresa tus Nombres")
      .required("*Campo requerido"),
   
    apellido: yup
      .string("Ingresa tus Apellidos")
      .required("*Campo requerido"),
   
  });

export const formatDate = (date) => {
    return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2);
};