import React from 'react';
import './Send&Receive.css';
import BTCTracker from './Bitcoinprice';


var QRCode = require('qrcode.react');


export class SendReceive extends React.Component {
state={
        to:'',
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isSendReceive(true)
    }
  render(){
  return (
    <div className='send'>
      <div className='text-center'>
                <h1>Send & Receive > </h1>
              </div>
      <div className='sendbox'>Send </div>
      <div className='sendbox2'></div>
      <div className='text'>To:
      <input
                       type="text"
                       id="to"
                       className=""
                       name="to"
                       required onChange={this.handleChange}
                       /></div>

      <small>Please enter the wallet id <br/>
      Or</small><div className='fees'></div>
      <div className='text1'>Amount: $
      <input
      type="number"
      id="amount"
      className=""
      name="amount"
      /><br /><br />
      Fees: $ <br /> 2.00 <br /><br />
      Total:<br />  <br /><br /><br />
      </div>
      <button1 onSubmit={this.handleSubmit}>Send </button1>
      <div className='receivebox'>Your Wallet Id </div>
     <div className='sendbox3'></div>
     <div className='text2'>Your Wallet Id:</div>

     <div className='receivebox1'></div>
     <div className='text3'>4fzr6uu1vnw5</div>
     <h6>Or<br />
     <QRCode value="4fzr6uu1vnw5" />

     Your QR code</h6>

      <div className='rightsideBar'>
      </div>
      <div className='graphBar'>
       </div>
      <div className='stats'> Statistics </div>
      <div className='price'> Current Bitcoin Price </div>
       <div className='line3'> </div>
     <div className='bitcoinPrice'>
      <BTCTracker />
       </div>
    </div>
   )
      }
  }