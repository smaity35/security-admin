import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ImagesPath from '../assets/ImagesPath';

export default class LoginPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <>


                <div className="sufee-login min-vh-100 d-flex align-content-center flex-wrap">
                    <div className="container">
                        <div className="login-content py-5 px-4 card">
                            <div className="login-logo pt-2 px-3">

                                <img className="align-content" src={ImagesPath.logo} alt="" />

                            </div>
                            <div className="login-form">
                                <form noValidate>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                            </label>
                                        <label className="pull-right">
                                            <Link to="/">Forgotten Password?</Link>
                                        </label>

                                    </div>
                                    <Link to="/home" className="btn btn-success btn-flat m-b-30 m-t-30 font-weight-bold">Sign in</Link>
                                    <div className="social-login-content d-none">
                                        <div className="social-button">
                                            <button type="button" className="btn social facebook btn-flat btn-addon mb-3"><i className="ti-facebook"></i>Sign in with facebook</button>
                                            <button type="button" className="btn social twitter btn-flat btn-addon mt-2"><i className="ti-twitter"></i>Sign in with twitter</button>
                                        </div>
                                    </div>
                                    {/* <div className="register-link m-t-15 text-center">
                                        <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}
