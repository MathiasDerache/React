import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from 'yup'
import Adresse from './Adresse';
import Contact from './Contact';
import Personne from './Personne';

const validationSchema = yup.object().shape({
    sexe: yup.string().required('Champ obligatoire'),
    lastName: yup.string().required('Champ obligatoire'),
    firstName: yup.string().required('Champ obligatoire'),
    birthday: yup.date().required('Required').max(Date(), 'Date invalide'),
    adressNum: yup.number().required('Champ obligatoire'),
    adressRoad: yup.string().required('Champ obligatoire'),
    adressCity: yup.string().required('Champ obligatoire'),
    adressCode: yup.string().required('Champ obligatoire').min(5, 'Code invalide').max(5, 'Code invalide'),
    phone: yup.string().required('Champ obligatoire').min(10, 'Numéro incorrect').max(10, 'Numéro incorrect'),
    email: yup.string().required('Champ obligatoire').email("Format invalide")

  })

export class Formulaire extends React.Component {

    state ={

        initialValues : {
            sexe : '',
            firstName : '',
            lastName : '',
            birthday : '',
            adressNum : '',
            adressRoad : '',
            adressCity : '',
            adressCode : '',
            phone : '',
            email : ''
        }
    }

    submit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div className="container">
                <div className="card p-3">
                <h2 className="text-center">Informations</h2>
                    <Formik initialValues={this.state.initialValues} onSubmit={this.submit} validationSchema={validationSchema}>
                        <Form>
                            <div className="formulaire">
                                <Personne/>
                                <Adresse/>
                            </div>
                            <hr/>
                            <Contact/>
                            <hr/>
                            <div className="d-grid gap-2">
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }
}

export default Formulaire
