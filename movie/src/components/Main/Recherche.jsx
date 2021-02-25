import React, { Component } from 'react'
import { Formik, Field} from 'formik'

export class Recherche extends Component {

    state = {
        InitialValues : {
            query : ""
        }
    }

    render() {
        return (
                <React.Fragment>
                    <Formik initialValues={this.state.InitialValues}>
                        <div className="input-group">
                            <Field type="search" className="form-control rounded search" placeholder="Search a movie ..." aria-label="Search"
                                aria-describedby="search-addon"  name="query" />
                                <button type="submit" className="btn btn-outline">Search</button>
                        </div>
                    </Formik>
                </React.Fragment>
        )
    }
}

export default Recherche
