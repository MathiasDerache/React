import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  lastName: yup.string().typeError('Entrez uniquement du texte').required('Required').min(3,'Min 3 Caractères').max(10, 'Maximum 10 caractères'),
  firstName: yup.string().required('Required').min(3).max(10)
})

class App extends React.Component {

  state = {
    initialValues : {
      lastName: '',
      firstName: ''
    }
  }

  submit = (values) => {
    console.log(values);
  }

  render(){
    return(
    <Formik initialValues={this.state.initialValues} onSubmit={this.submit}  validationSchema={validationSchema}>
              <Form>

              <Field type='text'name='firstName'placeholder='Firstname'className='form-control'/>
              <ErrorMessage component='small' className='text-danger' name='firstName'/>

              <Field type='text' name='lastName' placeholder='Lastname' className='form-control'/>
                <ErrorMessage component='small' className='text-danger' name='lastName'/>
                
              <br/>
              <button type='submit' className='btn btn-primary'>Submit</button>
        </Form>
    </Formik>
    )
  } 
}

export default App