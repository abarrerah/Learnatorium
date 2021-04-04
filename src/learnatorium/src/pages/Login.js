import React, { Component,useState } from "react";
import './css/dist/logincss.css';
import axios from 'axios';

const baseURL="http://localhost:8000/user/1";

export default class Login extends Component {
    state = {
        form:{
            username:'',
            password:''
        }
    }

    handleChange=async e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
        console.log(this.state.form);
    }

    signIn=async ()=>{
      await fetch(baseURL,{
        method:'GET',
        headers: new Headers({'Content-Type': 'application/json'}),
        mode:'no-cors'
      })
      await axios.get(baseURL,{username:this.state.username,password:this.state.password})
      .then(responseData=>{
        console.log(responseData)
        return responseData.data;
      })
      .then(responseData=>{
          if(responseData.statusCodes=200){      
            console.log("Correct");
          }else{
            console.log("Wrong");
          }
      })
      
      .catch(error=>{
         console.error(error);
      })
    }

  render() {
    return (
      <div className="Container">
        <div className="containerWrapper">
          <div className="form">
            <fieldset className="uk-fieldset">
              <div class="uk-margin">
                <label>Username</label>
                <br></br>
                <div class="uk-inline">
                  <span class="uk-form-icon" uk-icon="icon: user"></span>
                  <input class="uk-input uk-form-width-medium" type="text" name="username" onChange={this.handleChange}/>
                </div>
              </div>
              <div class="uk-margin">
                <label>Password</label>
                <br></br>
                <div class="uk-inline">
                  <span class="uk-form-icon" uk-icon="icon: lock"></span>
                  <input
                    class="uk-input uk-form-width-medium"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button class="uk-button uk-button-default" onClick={()=>this.signIn()}>Submit</button>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}
