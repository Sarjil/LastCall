import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../nav/nav'

const demo_user = {username: 'BeerLover', password:'password'}

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password: '', email:''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    update(field) {
        return e => { this.setState({ [field]: e.target.value }) }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    handleDemoUser(e){
        e.preventDefault(); 
        this.props.login(demo_user)
    }

    render(){
        
        let header = '';
        let emailLink = null;
        let demo = null;

        if(this.props.formType === 'Sign In'){
            header = <h2> Welcome Back! Please Sign In Below</h2>
            demo = <div>
                     <div className="or">or</div>
                    <button className="demo-login-btn" onClick={this.handleDemoUser}>Demo User</button>
                     </div>
        }else{
            header = <h3>Sign Up to Last Call!</h3>
            emailLink = <div className="session-form session-div">
                        
                            <div className="input-picture-user session-email">
                                <p className="input-img"></p>
                            </div>

                        <input className="user-input" 
                               type="text" 
                               value={this.state.email} 
                               placeholder="E-Mail"
                               onChange={this.update('email')} />
                        </div>
                
        }
                
            return(
                
                
                <div className="session-form-cont">
                   
                    <form onSubmit={this.handleSubmit} className="session-form session-div">

                      <h2 className="session-title"><Link className="title-link" to="/">LAST CALL</Link></h2>
                      <h4 className="session-subtitle">DRINK SOCIALLY</h4>
                       {/* {header} */}

                    <div className="session-form session-div">

                            <div className="input-picture-user session-username">
                                <p className="input-img"></p>
                            </div> 

                         <input className="user-input" 
                                type="text" 
                                value={this.state.username}
                                placeholder="Username" 
                                onChange={this.update('username')} />
                    </div>
                    

                    {emailLink}

                    <div className="session-form session-div">

                        <div className="input-picture-user session-pw">
                            <p className="input-img"></p>
                        </div>

                        <input className="user-input" 
                               type="password" 
                               value={this.state.password}
                               placeholder="Password" 
                               onChange={this.update('password')} />
                    </div>   
                   
                    
                    <button className="session-btn" type="submit"> {this.props.formType} </button>
                    {demo} 
                    </form>

                </div>

            )
        
    }


}

export default SessionForm; 