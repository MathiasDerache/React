import React from 'react'

class Hello extends React.Component {

    render() {
        const {name , setName } = this.props
        return(
            <div>
                <h1>Hello {name}</h1>
                <button onClick={() =>setName("jean")}>
                    Click
                </button>
            </div>
        )
    }
}
export default Hello