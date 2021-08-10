import './login.css';
import React, { Component } from 'react';
import { Card, CardHeader, Form, Button } from "reactstrap";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';

export class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

 handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

handleSubmit = (e) =>{
        e.preventDefault();
        this.props.isLogin(true);
    }
    render(){
     if (this.state.redirectVar) {

                return (
                    <Redirect to='/home' />
                )
            }
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                        Login
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                       <a href='/home'  onClick={this.state.redirectVar} role="button" > <button href='/home' onClick={this.state.redirectVar}>Log In</button>
                        Login</a>
                        <a href='/home' onClick={this.SignUp} role="button" className="d-flex justify-content-center mt-1 mb-2">Sign Up</a>
                    </form>
                </div>
            </div>
        )
    }
}






