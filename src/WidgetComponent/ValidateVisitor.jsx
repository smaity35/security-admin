import React, { Component } from 'react'
import UpdateVisitor from './UpdateVisitor'

export default class ValidateVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisitorShow: false,

        }
    }
    findVisitor() {
        this.setState({ isVisitorShow: true });
    }
    render() {
        return (
            <>
                {this.state.isVisitorShow === false ?
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group   ">
                                <label className="font-weight-bold">Visiter OTP</label>
                                <input type="text" placeholder="Enter OTP" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary px-5" onClick={() => this.findVisitor()}>Find Visiter</button>
                        </div>
                    </div>
                    : null
                }
                {this.state.isVisitorShow === true ? <UpdateVisitor sendValidateData={[0, 1, 2, 3, 4]} /> : null}

            </>
        )
    }
}
