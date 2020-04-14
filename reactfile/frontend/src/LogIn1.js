import './LogIn1.css';
import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types';
import ReactEncrypt from 'react-encrypt'
import Chat from './Chat'
import CryptoJS from "react-native-crypto-js";
import {
  Link
} from "react-router-dom";


class LogIn1 extends React.Component {
  static contextTypes = {
    encrypt: PropTypes.func.isRequired,
    decrypt: PropTypes.func.isRequired,
  }

  state = {
     pureText: "",
   };


   onChange = event => {

     const {
       name,
       value,
     } = event.target;

     this.setState({
       [name]: value,
     });

   }


  render() {

        const {
          pureText,
          decptext
        } = this.state;


        const {
          encrypt,
          decrypt,
        } = this.context;

let encryptKey = "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=";
// Encrypt using AES
let encryptedText = CryptoJS.AES.encrypt(pureText, encryptKey).toString();
// Decrypt
let bytes  = CryptoJS.AES.decrypt(encryptedText, encryptKey);
let decryptedText = bytes.toString(CryptoJS.enc.Utf8);


    return (
      <div className="LogIn1">
      <header className="LogIn1Header">
      <div>
      <div>
        <h3>Welcome to D-Book Chat Room</h3>
        <textarea
          style={{
            width: "35%",
            height: 100,
          }}
          name="pureText"
         value={pureText}
         placeholder = {'Enter text to be encrypted'}
          onChange={this.onChange}
        />
      </div>

      <div>
        <h3>Encrypted text</h3>
        <textarea
          style={{
            width: "35%",
            height: 100,
          }}
          value={encryptedText}
        onChange={this.onChange}
        />
      </div>
      <div>
        <textarea
          style={{
            width: "35%",
            height: 100,
          }}
          name = "decryptedText"
          placeholder = {'Decrypted text will appear here'}

          value={decryptedText || ""}
        />

      </div>

    </div>
    <Chat />
        </header>
      </div>
    );
  }




}
class Demo extends Component {



  render() {
    return <div>
      <h1>react-encrypt demo</h1>

      <ReactEncrypt encryptKey="ewfWE@#%$rfdsefgdsf" >
        <LogIn1 />
      </ReactEncrypt>

    </div>
  }
}



export default LogIn1;
