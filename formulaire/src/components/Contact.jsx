import { ErrorMessage, Field } from 'formik';
import React from 'react'

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <p>Contact</p>
                <div className="bas">
                    <div>
                        <Field type="text" name="phone" placeholder="Phone"/><br/>
                        <ErrorMessage component='small' className='text-danger' name='phone'/>
                    </div>
                    <div>
                        <Field type="text" name="email" placeholder="Email"/><br/>
                        <ErrorMessage component='small' className='text-danger' name='email'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
