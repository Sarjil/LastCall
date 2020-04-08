import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../nav/nav'

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password: '', email:''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => { this.setState({ [field]: e.target.value }) }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render(){
        
        let header = '';
        let link = null;

        if(this.props.formType === 'Sign In'){
            header = <h1> Welcome Back</h1>
       
        }else{
            header = <h1>Welcome to Last Call!</h1>
        }
                
            return(
                
                
                <>
                    <div>
                        <Nav/>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        {header}

                    <label> Username 
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br/>
                    <label> Email 
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br/>
                    <label> Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br/> 
                    
                    <button type="submit"> {this.props.formType} </button>
                    
                    </form>

                </>

            )
        
    }


}

export default SessionForm; 