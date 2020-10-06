import React, { Component } from 'react'

export default class UpdateSociety extends Component {
    render() {
        return (
            <>
                <form style={{ width: "600px", maxWidth: "100%" }} className="newEntryForm">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" defaultValue="Sunrise Society" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" defaultValue="D Block" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" defaultValue="StarLine" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" defaultValue="Saltlake" className="form-control" />
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
