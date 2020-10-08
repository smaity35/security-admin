import React, { Component } from 'react'
import AsideComponent from '../SharedComponent/AsideComponent'
import HeaderComponent from '../SharedComponent/HeaderComponent'
import Button from '@material-ui/core/Button';



import MainModal from '../ModalComponent/MainModal';




export default class HomePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalType: '',
        }
    }
    sendData() {
        this.setState({ isModalOpen: true });
    }
    closeModal() {
        this.setState({ isModalOpen: false });
        this.setState({ modalType: '' });
    }
    render() {
        return (
            <>
                <MainModal
                    modalType={this.state.modalType}
                    isDialogOpen={this.state.isModalOpen}
                    closeModal={() => this.closeModal()}
                />

                <AsideComponent />

                {/* <!-- Right Panel --> */}

                <div id="right-panel" className="right-panel min">


                    <HeaderComponent />


                    {/* <!-- Header--> */}

                    <div className="breadcrumbs">
                        <div className="breadcrumbs-inner">
                            <div className="row m-0">
                                <div className="col-sm-4">
                                    <div className="page-header float-left">
                                        <div className="page-title">
                                            <h1>Dashboard</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-8 d-none">
                                    <div className="page-header float-right">
                                        <div className="page-title">
                                            <ol className="breadcrumb text-right">
                                                <li><a href="#">Dashboard</a></li>
                                                <li><a href="#">Table</a></li>
                                                <li className="active">Basic table</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="content min-vh-100">
                        <div className="animated fadeIn">
                            <div className="row pb-4 justify-content-between">
                                <div className="col-auto">
                                    <button className="btn btn-primary" onClick={() => { this.sendData(); this.setState({ modalType: 'validateVisitor' }) }}> Validate Visitor</button>
                                </div>
                                <div className="col col-md-8 col-lg-6 d-none">
                                    <div className="input-group">


                                        <div className="input-group-btn">
                                            <button className="btn btn-primary" style={{ borderRadius: '3px 0 0 3px' }}>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                        <input type="text" id="input1-group2" name="input1-group2" placeholder="Search" className="form-control border-left-0" />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary"
                                        onClick={() => { this.sendData(); this.setState({ modalType: 'newEntry' }) }}
                                    >
                                        <span className="material-icons align-middle"> create </span> New Entry
                                     </button>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong className="card-title">Visitor Table</strong>
                                        </div>
                                        <div className="table-stats table-hover order-table overflow-auto">
                                            <table className="table ">
                                                <thead>
                                                    <tr>
                                                        <th className="serial">#</th>
                                                        <th className="text-nowrap">Entry Date</th>
                                                        <th className="text-nowrap">Entry Time</th>
                                                        <th className="text-nowrap">Exit Time</th>
                                                        <th className="text-nowrap">Person Name</th>

                                                        <th className="text-nowrap">Block</th>
                                                        <th className="text-nowrap">Resident Name</th>
                                                        <th className="text-nowrap">Apartment</th>

                                                        <th className="text-nowrap">Status</th>
                                                        <th className="text-nowrap">Purpose</th>
                                                        <th className="text-nowrap">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="serial">1.</td>
                                                        <td>02/09/2020</td>
                                                        <td>05:10PM</td>
                                                        <td className="text-danger">07:40PM</td>
                                                        <td><span className="name">Rahul Sen</span> </td>

                                                        <td><span className="count">D Block</span></td>
                                                        <td><span className="count">Jamuna Sen</span></td>
                                                        <td><span className="count">D/2/6</span></td>
                                                        <td><span className="count text-danger">Blocked</span></td>
                                                        <td><span className="product">Doctor</span> </td>
                                                        <td>
                                                            <Button color="primary"
                                                                onClick={() => { this.sendData(); this.setState({ modalType: 'entryDetails' }) }}
                                                            >
                                                                <span className="material-icons">
                                                                    visibility
                                                                </span>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    {[0, 1, 2, 3, 4, 5, 6].map((list, index) => (
                                                        <tr key={index}>
                                                            <td className="serial">{index + 2} .</td>
                                                            <td>12/08/2020</td>
                                                            <td >11:10PM</td>
                                                            <td className="text-danger">07:40AM</td>
                                                            <td><span className="name">Louis Stanley</span> </td>

                                                            <td><span className="count">A Block</span></td>
                                                            <td><span className="count">Sanchari Roy</span></td>
                                                            <td><span className="count">A/12/2</span></td>
                                                            <td><span className="count text-success">Pass</span></td>
                                                            <td><span className="product">Food Delivery</span> </td>
                                                            <td>
                                                                <Button color="primary" onClick={() => { this.sendData(); this.setState({ modalType: 'entryDetails' }) }} >
                                                                    <span className="material-icons">
                                                                        visibility
                                                                    </span>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))}


                                                </tbody>
                                            </table>
                                        </div>

                                        {/* <!-- /.table-stats --> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- .animated --> */}
                    </div>
                    {/*    <!-- .content --> */}

                    <div className="clearfix"></div>

                    <footer className="site-footer">
                        <div className="footer-inner bg-white">
                            <div className="row">
                                <div className="col-sm-6">
                                    Copyright &copy; 2018 The BucketList
                                </div>

                            </div>
                        </div>
                    </footer>

                </div>

                {/*  <!-- Right Panel --> */}
            </>
        )
    }
}
