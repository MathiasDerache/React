import { ErrorMessage, Field } from 'formik';
import React from 'react'

export class Adresse extends React.Component {
    render() {
        return (
            <div>
                <div className="droite">
                    <ErrorMessage component='small' className='text-danger' name='adressNum'/>
                    <Field type="number" name="adressNum" placeholder="Number" className="mb-3"/>
                    <ErrorMessage component='small' className='text-danger' name='adressRoad'/>
                    <Field type="text" name="adressRoad" placeholder="Road" className="mb-3"/>
                    <ErrorMessage component='small' className='text-danger' name='adressCity'/>
                    <Field type="text" name="adressCity" placeholder="City" className="mb-3"/>
                    <ErrorMessage component='small' className='text-danger' name='adressCode'/>
                    <Field type="text" name="adressCode" placeholder="ZipCode" className="mb-3"/>
                </div>
            </div>
        )
    }
}

export default Adresse
