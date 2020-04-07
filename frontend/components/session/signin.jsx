import React from 'react'
import {Link} from 'react-router-dom'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => { this.setState({ [field]: e.target.value }) }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    render(){
        
                
            return(
                
                
                <>
                    <h3>Sign In Here!</h3>
                    <Link to='/'> Back Home!! </Link>

                    <form onSubmit={this.handleSubmit}>

                    <label> Username 
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label> Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    
                    <button type="submit"> Sign In</button>

                    </form>

                </>

            )
        
    }


}

export default SignIn; 