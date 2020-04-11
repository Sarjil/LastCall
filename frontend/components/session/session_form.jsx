import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../header/header'

const demo_user = {username: 'BeerLover', password:'password'}

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password: '', email:''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    componentWillUnmount(){
        this.props.deleteSessionErrors(); 
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
        
        let emailLink = null;
        let demo = null;
        let switchForms = null;

        if(this.props.formType === 'Sign In'){
            demo = <div className="or-demo">
                     <div className="or">or</div>
                    <button className="demo-login-btn" onClick={this.handleDemoUser}>Demo User</button>
                     </div>
            switchForms = <p className="session-bottom">New around here?<Link to="/signup" className="orange-link spacer-class">Sign Up!</Link></p>
            }else{
            switchForms = <p className="session-bottom">Already have an account?<Link to="/signin" className="orange-link spacer-class">Log In!</Link></p>
            emailLink = <div className="session-form session-div">
                            <div className="session-user">
                            <div className="input-picture-user session-email">
                                <p className="input-img"></p>
                            </div>

                        <input className="user-input" 
                               type="text" 
                               value={this.state.email} 
                               placeholder="E-Mail"
                               onChange={this.update('email')} />
                            
                            </div>  

                        </div>
                
       }
            const errors = this.props.errors;
            const showError = Boolean(errors) && errors.length > 0 ? "show-error" : ""; 
            const showErrors = errors.map(error => {
                return <li key={error} className="error-li">{error}</li>
            })             
            return(
                
                
                <div className="session-form-cont">
                   
                    <form onSubmit={this.handleSubmit} className="session-form session-div">

                      <h2 className="session-title"><Link className="title-link" to="/">LAST CALL</Link></h2>
                      <h4 className="session-subtitle">DRINK SOCIALLY</h4>
                      <ul className={`errors-list ${showError}`}> {showErrors} </ul>

                    <div className="session-form session-div">

                            <div className="session-user">
                                <div className="input-picture-user session-username"></div> 
                                 <input className="user-input" 
                                type="text" 
                                    value={this.state.username}
                                    placeholder="Username" 
                                    onChange={this.update('username')} />

                            </div>
                    </div>
                    

                    {emailLink}

                    <div className="session-form session-div">

                        <div className="session-user"> 
                            <div className="input-picture-user session-pw"></div>
                            <input className="user-input" 
                                type="password" 
                                value={this.state.password}
                                placeholder="Password" 
                                onChange={this.update('password')} />
                        
                        </div>
                    </div>   
                   
                    
                    <button className="session-btn" type="submit"> {this.props.formType} </button>
                    {demo}
                    {switchForms} 
                    </form>

                </div>

            )
        
    }


}

export default SessionForm; 