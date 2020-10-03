import React, { Component } from 'react'

export default class NewEntryVisitor extends Component {
    render() {
        return (
            <>
                <form style={{ width: "600px", maxWidth: "100%" }} className="newEntryForm">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="date" placeholder="Entry Date" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="time" placeholder="Entry Time" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Visiter Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="Choose Purpose">Choose Purpose</option>
                                    <option defaultValue="Choose Purpose">Choose Purpose</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="Choose Residence">Choose Residence</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="Choose Residence">Choose Apartment</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" >
                                    <option defaultValue="Choose Residence">Choose Block</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary px-5">Save</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
