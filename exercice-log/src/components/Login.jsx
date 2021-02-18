import React from 'react'

class Login extends React.Component {

    render() {
        
        return (
            <div>
                <button onClick = {() => this.props.onChangeLog()} className="btn btn-primary log">Login</button>
            </div>
        )
    }
}

export default Login