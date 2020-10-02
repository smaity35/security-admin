import React, { Component } from 'react'
import ImagesPath from '../assets/ImagesPath'
import AsideComponent from '../SharedComponent/AsideComponent'
import HeaderComponent from '../SharedComponent/HeaderComponent'



import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);
    var opDialogsInstructions = props.isDialogOpen;
    if (opDialogsInstructions === true) {
        setOpen(true)
    } else {
        return false
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    

    const handleClose = () => {
        setOpen(false);
    };



    return (

        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Slide in alert dialog
      </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Agree
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}


export default class HomePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }


    render() {
        return (
            <>

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


                    <AlertDialogSlide isDialogOpen={this.state.isModalOpen} />

                    <div className="content min-vh-100">
                        <div className="animated fadeIn">
                            <div className="row pb-4 justify-content-between">
                                <div className="col-md-6">
                                    <div className="input-group">


                                        <div className="input-group-btn">
                                            <button className="btn btn-primary">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                        <input type="text" id="input1-group2" name="input1-group2" placeholder="Search" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary" onClick={() => this.setState({ isModalOpen: true })}>
                                        <i className="fa fa-add"></i> New Entry
                                     </button>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong className="card-title">Visiter Table</strong>
                                        </div>
                                        <div className="table-stats order-table ov-h">
                                            <table className="table ">
                                                <thead>
                                                    <tr>
                                                        <th className="serial">#</th>
                                                        <th>Entry Date</th>
                                                        <th>Entry Time</th>
                                                        <th>Person Name</th>
                                                        <th>Purpose</th>
                                                        <th>Block</th>
                                                        <th>Apartment</th>
                                                        <th>Resident Name</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="serial">1.</td>
                                                        <td>02/09/2020</td>
                                                        <td>05:10PM</td>
                                                        <td><span className="name">Jhone Stanley</span> </td>
                                                        <td><span className="product">Doctor</span> </td>
                                                        <td><span className="count">D Block</span></td>
                                                        <td><span className="count">Jamuna</span></td>
                                                        <td><span className="count">D/2/6</span></td>
                                                        <td><span className="count text-danger">Blocked</span></td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary">View</button>
                                                        </td>
                                                    </tr>
                                                    {[0, 1, 2, 3, 4, 5, 6].map((list, index) => (
                                                        <tr key={index}>
                                                            <td className="serial">{index + 2} .</td>
                                                            <td>12/08/2020</td>
                                                            <td>11:10PM</td>
                                                            <td><span className="name">Louis Stanley</span> </td>
                                                            <td><span className="product">Doctor</span> </td>
                                                            <td><span className="count">A Block</span></td>
                                                            <td><span className="count">Sanchari</span></td>
                                                            <td><span className="count">A/12/2</span></td>
                                                            <td><span className="count text-success">Pass</span></td>
                                                            <td>
                                                                <button type="button" className="btn btn-primary">View</button>
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
