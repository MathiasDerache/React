import React from 'react'


class Logout extends React.Component {

    render() {

        return (
            <div>
               <button onClick = {() => this.props.onChangeLog()} className="btn btn-primary log">Logout</button>
            </div>
        )
    }
}

export default Logout
