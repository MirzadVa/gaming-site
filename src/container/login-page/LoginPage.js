import Axios from 'axios';
import React, { Component } from 'react';
import './login-page.css';
import Input from '../../UI/input/Input';
import BtnSubmit from '../../UI/submit-button/SubmitButton';
import {Redirect} from 'react-router-dom';

class LoginPage extends Component {
    
    state = {
        badInfo: false,
        loggedIn: false,
        users: [],
        loginData: {
            email: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    displaylabel: 'Email'
                },
                value: ''
            },
            password: {
                elementtype: 'input',
                elementconfig: {
                    type: 'password',
                    displaylabel: 'Password'
                },
                value: ''
            }
        }
    }
    
    componentDidMount(){
        Axios.get('https://tutorial-1ce20.firebaseio.com/users.json')
            .then(response =>{
                for(let user in response.data){
                    this.state.users.push({
                        email: response.data[user].email,
                        password: response.data[user].password
                    })
                }
            })
            .catch(error => console.log(error))
    }
    inputChangeHandler(e, key){
        let updatedLoginData = {...this.state.loginData};
        let updatedElement = updatedLoginData[key]
        updatedElement.value = e.target.value
       this.setState({
           loginData: updatedLoginData
       })
        
    }

    login = (e) =>{
        e.preventDefault();
        let data = {email: '', password: ''}

       for(let user in this.state.loginData){
           data[user] = this.state.loginData[user].value
       }

       
       for(let user in this.state.users){
           if((this.state.users[user].email === data.email && this.state.users[user].password === data.password) === true){
            this.setState({
                loggedIn: true
            })
           }else{
                this.setState({badInfo: true})
               
           }
           
       }
        
    
    
    
    }
    
    render(){
        let formArray = [];
        for(let formElement in this.state.loginData){
            formArray.push({
                id: formElement,
                config: this.state.loginData[formElement]
            })
        }
        let form = (
            <form onSubmit={this.login}>
                {formArray.map(elem =>(
                    <Input
                        key={elem.id}
                        elementtype={elem.config.elementtype} 
                        config={elem.config.elementconfig}
                        value={elem.config.value}
                        displaylabel={elem.config.elementconfig.displaylabel}
                        change={(event) => this.inputChangeHandler(event, elem.id)}/>
                        
                ))
                }
               <BtnSubmit btnType='submit' />
            </form>
        )

        return ( 
            <div className='login-page-container'>
                
                <div className='bad-mail-cont'>
                    {form}
                    {this.state.loggedIn ? <Redirect to='/home'/> : null}
                    {this.state.badInfo ? <p className='bad-email'>Your email or password are incorrect</p> : null }
                </div>
                
            </div>
         );
    }
    
}
 
export default LoginPage;