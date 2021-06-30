import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUsers } from '../axios/api';

const PUserForm = () => {
  const RegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      firstName: '',
      identification: '',
      phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, '20 caracteres max')
        .required('Requerido'),
      identification: Yup.string()
        .matches(RegExp, 'No valido')
        .min(8, '8 caracteres min')
        .max(10, '10 caracteres max')
        .required('Requerido'),
      phone: Yup.string()
        .matches(RegExp, 'No valido')
        .min(8, '8 caracteres min')
        .max(10, '10 caracteres max')
        .required('Requerido'),
      email: Yup.string()
        .email('Email mal formateado')
        .required('Requerido'),
    }),
    onSubmit: async values => {
      const obj = {
        name: values.firstName.trim(),
        email: values.email.trim(),
        identification: values.identification.trim(),
        phone: values.phone.trim()
      }
      const response = await createUsers(obj)
      console.log(response)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Nombre</label>
      <br/>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <br/>

      <label htmlFor="identification">Identificaci&oacute;n</label>
      <br/>
      <input
        id="identification"
        type="text" {...formik.getFieldProps('identification')}
         />
      {formik.touched.identification && formik.errors.identification ? (
        <div>{formik.errors.identification}</div>
      ) : null}
      <br/>

      <label htmlFor="phone">Tel&eacute;fono</label>
      <br/>
      <input 
      id="phone" 
      type="tel" {...formik.getFieldProps('phone')} 
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
      ) : null}
      <br/>

      <label htmlFor="email">Email</label>
      <br/>
      <input 
      id="email" type="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br/>
      <br/>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
  );
};

export default PUserForm;