import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import MainModal from '../ModalComponent/MainModal';
import AsideComponent from '../SharedComponent/AsideComponent';
import HeaderComponent from '../SharedComponent/HeaderComponent';

export default class SocietyPageComponent extends Component {
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
                                            <h1>Society</h1>
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
                                <div className="col col-md-8 col-lg-6">
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
                                        onClick={() => { this.sendData(); this.setState({ modalType: 'newEntrySociety' }) }}
                                    >
                                        <span className="material-icons align-middle"> create </span> New Society
                     </button>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong className="card-title">Society Table</strong>
                                        </div>
                                        <div className="table-stats table-hover order-table overflow-auto">
                                            <table className="table ">
                                                <thead>
                                                    <tr>
                                                        <th className="serial">#</th>
                                                        <th className="text-nowrap">Society Name</th>
                                                        <th className="text-nowrap">Block Name</th>
                                                        <th className="text-nowrap">Apartment Name</th>
                                                        <th className="text-nowrap">Resident Name</th>
                                                        <th className="text-nowrap">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="serial">1.</td>


                                                        <td><span className="name">Sunrise Society</span> </td>
                                                        <td><span className="count">D Block</span></td>
                                                        <td><span className="count">StarLine</span></td>
                                                        <td><span className="count">Saltlake </span></td>
                                                        <td className="text-nowrap">
                                                            <Button color="primary"
                                                                onClick={() => { this.sendData(); this.setState({ modalType: 'entryDetailsSociety' }) }}
                                                            >
                                                                <span className="material-icons">
                                                                    edit
                                                                </span>
                                                            </Button>
                                                            <Button color="secondary"  >
                                                                <span className="material-icons">
                                                                    delete
                                                                </span>
                                                            </Button>
                                                           
                                                        </td>
                                                    </tr>
                                                    {[0, 1, 2, 3, 4, 5, 6].map((list, index) => (
                                                        <tr key={index}>
                                                            <td className="serial">{index + 2} .</td>
                                                            <td><span className="name">Sunrise Society</span> </td>
                                                            <td><span className="count">A Block</span></td>
                                                            <td><span className="count">Jamuna</span></td>
                                                            <td><span className="count">Deun Dum </span></td>
                                                            <td className="text-nowrap">
                                                            <Button color="primary"
                                                                onClick={() => { this.sendData(); this.setState({ modalType: 'entryDetailsSociety' }) }}
                                                            >
                                                                <span className="material-icons">
                                                                    edit
                                                                </span>
                                                            </Button>
                                                            <Button color="secondary"  >
                                                                <span className="material-icons">
                                                                    delete
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
