import React, { Component } from 'react';

export default class LoginBtn extends Component {
    
    constructor() {
      super();

      this.state = {
          stateKey: 'spotify_auth_state'
      }
    }

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    generateRandomString = function(length) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
        for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    loginWithUserPass(){
        let state = generateRandomString(16);

    }

    render(){
        return (
            <div className="discover-block">
            Hey Login!
            </div>
        );
    }
}
