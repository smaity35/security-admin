import React, { Component } from 'react'

export default class UpdateVisitor extends Component {
    render() {
        return (
            <>
                <form style={{ width: "600px", maxWidth: "100%" }} className="seeDetailsForm">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="date" defaultValue={"2020-09-02"} placeholder="Entry Date" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="time" defaultValue={"08:56"} placeholder="Entry Time" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" defaultValue={"Rahul Sen"} placeholder="Visiter Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="Doctor">Doctor</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="D/2/6">D/2/6</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="Jamuna Apartment">Jamuna Apartment</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="D Block">D Block</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary px-5">Update</button>
                        </div>
                    </div>

                </form>
            </>
        )
    }
}
