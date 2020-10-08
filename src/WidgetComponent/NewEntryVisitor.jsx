import React, { Component } from 'react'

export default class NewEntryVisitor extends Component {
    render() {
        return (
            <>
                <form style={{ width: "600px", maxWidth: "100%" }} className="newEntryForm">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group   ">
                                <label>Date</label>
                                <input type="date" placeholder="Entry Date" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group   ">
                                <label>Entry Time</label>
                                <input type="time" placeholder="Entry Time" className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="form-group   ">
                                <label>Person  Name</label>
                                <input type="text" placeholder="Visiter Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group   ">
                                <label>Additional Person  </label>
                                <input type="number" placeholder="Additional Person" className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group   ">
                                <label>Purpose</label>
                                <select className="form-control" >
                                    <option defaultValue="Choose purpose">Choose purpose</option>
                                    <option option="Doctor">Doctor</option>
                                    <option option="Food delivery">Food delivery</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group   ">
                                <label>Block Name</label>
                                <select className="form-control" >
                                    <option defaultValue="Choose block name">Choose block name</option>
                                    <option option="A block">A block</option>
                                    <option option="B block">B block</option>
                                    <option option="C block">C block</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group   ">
                                <label>Resident Name</label>
                                <select className="form-control" >
                                    <option defaultValue="Choose resident name">Choose resident name</option>
                                    <option option="Jamuna Sen">Jamuna Sen</option>
                                    <option option="Payel Sen">Payel Sen</option>
                                    <option option="Rohan Sen">Rohan Sen</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group   ">
                                <label>Apartment   </label>
                                <select className="form-control" >
                                    <option defaultValue="Choose resident name">Choose resident name</option>
                                    <option option="A/2/16">A/2/16</option>
                                    <option option="B/5/3">B/5/3</option>
                                    <option option="C/10/2">C/10/2</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group   ">
                                <label>Vehicle  Number</label>
                                <input type="text" placeholder="Vehicle  Number" className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="custom-control custom-switch updateModalSwitch">
                                    <input type="checkbox" defaultChecked="true" className="custom-control-input" id="customSwitch1" />
                                    <label className="custom-control-label font-weight-bold" htmlFor="customSwitch1">
                                        <span className="text-danger">Reject</span>
                                        <span className="text-success">Allow</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary px-5">Create</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
