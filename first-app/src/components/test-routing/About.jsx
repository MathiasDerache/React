import React, { Component } from 'react'

export class about extends Component {


    render() {
        return (
            <div className="d-flex justify-content-center">
                <h1>About</h1>
                <div className="btn btn-group w-50">
                    <button type='button' className="btn btn-success" onClick={() => this.props.history.push('/')}>Home</button>
                    <button type='button' className="btn btn-warning" onClick={() => this.props.history.push('/discover')}>Discover</button>
                    <button type='button' className="btn btn-danger" onClick={() => this.props.history.goBack()}>Back</button>
                </div>
            </div>
        )
    }
}

export default about
