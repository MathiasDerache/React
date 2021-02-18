import { ErrorMessage, Field } from 'formik';
import React from 'react'

export class Personne extends React.Component {
    render() {
        return (
            <div>
                <div className="gauche">
                    <div className="mb-3" role="group">
                        <ErrorMessage component='small' className='text-danger' name='sexe'/>
                        <Field type="radio" name="sexe" id="mr" value="mr"/><label htmlFor="mr">Mr</label>
                        <Field type="radio" name="sexe" id="ms" value="ms"/><label htmlFor="ms">Ms</label>
                        <Field type="radio" name="sexe" id="na" value="na"/><label htmlFor="na">N/A</label>
                    </div>
                    <ErrorMessage component='small' className='text-danger' name='firstName'/>
                    <Field type="text" name="firstName" placeholder="Firstname" className="mb-3"/>
                    <ErrorMessage component='small' className='text-danger' name='lastName'/>
                    <Field type="text" name="lastName" placeholder="Lastname" className="mb-3"/>
                    <ErrorMessage component='small' className='text-danger' name='birthday'/>
                    <Field type="date" name="birthday" placeholder="yyyy-mm-dd" className="mb-3"/>
                </div>
            </div>
        )
    }
}

export default Personne
