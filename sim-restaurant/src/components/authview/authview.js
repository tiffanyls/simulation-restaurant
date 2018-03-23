import React, {Component} from 'react';
import axios from 'axios';

class Authview extends Component{
    constructor(){
        super();
        this.state = {
            user: false
        }
    }

    render(){
        return(
        <section>
            <div className='home'> Welcome to Good Eats </div>
            <div className='username'> Username:</div> <input></input>
            <div className='username'> Password:</div><input></input>
            <button> Login </button> <button> Register </button>
        </section>
        )
    }
}

export default Authview;