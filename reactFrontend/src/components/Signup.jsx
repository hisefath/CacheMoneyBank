import React, { Component } from 'react';
import axios from 'axios';



export default class Signup extends Component {

    state = { 
        email: '',
        password: '',
        errorMessage: ''
     }

    handleSubmit = (event) => { 
        event.preventDefault();
        const { email, password } = this.state;
        axios({
            url: "/authentication/signup",
            method: "POST", 
            data: {
                 email,
                 password
            }
        })
        .then((response) =>{
            // console.log('Data: ',  response.data)
            this.props.history.push('/profile');
        })
        .catch((error) =>{
            console.log('Error: ', error.data)
            this.setState({
                errorMessage: error.response.data.message
            })
        });
     }
    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({
            [name]: value, 
        });
     }

    render () {
        //JSX
        return (
            <div>
                <h2>Signup Component</h2>
                <form onSubmit={this.handleSubmit} >
                <input type="text" name="email" onChange={this.onChange} />    
                <input type="password" name="password" onChange={this.onChange} />

                <button>
                    Signup
                </button>
                </form> 
                <p>{this.state.errorMessage}</p>
            </div>
        );
    }
}
