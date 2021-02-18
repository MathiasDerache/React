import React from 'react'

export class Detail extends React.Component {

    isStocked = this.props.stocked

    render() {
        return (
            <div className="row">
                {this.isStocked ?
                    <div className="col-lg-6 detail" >
                    {this.props.name}
                    </div>
                    :
                    <div className="col-lg-6 detail red" >
                    {this.props.name}
                    </div>
                }

                <div className="col-lg-6 detail">
                    {this.props.price}
                </div>
            </div>
        )
    }
}

export default Detail
