import React, { Component } from 'react'

export default class UpdateVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReject: "0"
        }
    }
    myChangeHandler = (event) => {
        let value = event.target.value // 1
        if (value === this.state.isReject) {
            value = "0"
        }
        this.setState({ isReject: value });
        console.log('tag**************', value);
    }
    render() {
        console.log(this.props.sendValidateData);
        return (
            <>
                <div style={{ width: "600px", maxWidth: "100%" }} className="seeDetailsForm">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Date</label>
                                <input type="date" defaultValue={"2020-09-02"} placeholder="Entry Date" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Entry Time</label>
                                <input type="time" defaultValue={"08:56"} placeholder="Entry Time" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Exit Time</label>
                                <input type="time" defaultValue={"10:20"} placeholder="Entry Time" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Person  Name</label>
                                <input type="text" defaultValue={"Rahul Sen"} placeholder="Visiter Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group   ">
                                <label className="font-weight-bold">Additional Person  </label>
                                <input type="number" defaultValue={"0"} placeholder="Additional Person" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Purpose</label>
                                <select className="form-control" >
                                    <option defaultValue="Doctor">Doctor</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Block Name</label>
                                <select className="form-control" >
                                    <option defaultValue="D block">D block</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Resident Name</label>
                                <select className="form-control" >
                                    <option defaultValue="Jamuna Sen">Jamuna Sen</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group pointer-events-none ">
                                <label className="font-weight-bold">Apartment  </label>
                                <select className="form-control" >
                                    <option defaultValue="D/2/6">D/2/6</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group  pointer-events-none ">
                                <label className="font-weight-bold">Vehicle  Number</label>
                                <input type="text" defaultValue={"WB-A20-1212"} placeholder="Vehicle  Number" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="form-group">
                                <label className="font-weight-bold">Approve/Reject</label>
                                <div className="custom-control custom-switch updateModalSwitch">
                                    <input type="checkbox" className="custom-control-input" value={"1"} name="status" onClick={this.myChangeHandler.bind(this)} id="customSwitch1" defaultChecked={this.state.isReject === "1"} />
                                    <label className="custom-control-label font-weight-bold" htmlFor="customSwitch1">
                                        <span className="text-danger">Reject</span>
                                        <span className="text-success">Allow</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {this.state.isReject === "1" ?
                            <div className="col-md-auto">
                                <div className="form-group">
                                    <label className="font-weight-bold">Approve</label>
                                    <div className="">
                                        <div className="custom-control d-inline-flex custom-checkbox mr-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">Mask</label>
                                        </div>
                                        <div className="custom-control d-inline-flex custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                            <label className="custom-control-label" htmlFor="customCheck3">Temperature Check</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}

                        {this.state.isReject === "0" ?
                            <>
                                <div className="col-12">
                                    <div className="form-group   ">
                                        <label className="font-weight-bold">Reject  </label>
                                        <select className="form-control cursor-pointer" >
                                            <option defaultValue="Select One">Select One</option>
                                            <option defaultValue="Suspicious">Suspicious</option>
                                            <option defaultValue="No Mask">No Mask</option>
                                            <option defaultValue="No Appointment">No Appointment</option>
                                            <option defaultValue="Heigh Temperature">Heigh Temperature</option>
                                            <option defaultValue="Other">Other</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group   ">
                                        <label className="font-weight-bold">Others Reasons</label>
                                        <input type="text" placeholder="Type hare..." className="form-control" />
                                    </div>
                                </div>
                            </>
                            : null}
                        <div className="col-md-12">
                            <button className="btn btn-primary px-5">Update</button>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
