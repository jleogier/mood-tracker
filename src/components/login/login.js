import React from 'react'





class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }



    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for='login'>Please Login</label>
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='password'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }


}

export default Login