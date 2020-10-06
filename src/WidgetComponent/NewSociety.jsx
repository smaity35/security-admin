import React, { Component } from 'react'

export default class NewSociety extends Component {
    render() {
        return (
            <>
                 <form style={{ width: "600px", maxWidth: "100%" }} className="newEntryForm">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Society Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Block Name" className="form-control" />
                             </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Apparent Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Resident Name" className="form-control" />
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
