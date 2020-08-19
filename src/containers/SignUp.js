import React, {Component} from 'react';

class SignUp extends Component {
    // state = {
    //  bu uslubda state yaratsa ham bo'laveradi
    // }
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            type: 'customer',
        }
    }

    inputHandler = e => {
        e.preventDefault();
        console.log(e.target);
        const {name, value} = e.target;
        if (name === 'fullName'){
            this.setState({fullName: value})
        }else if (name === 'email'){
            this.setState({email: value});
        }else{
            this.setState({password: value});
        }
    }

    formHandler = e => {
        e.preventDefault();
        console.log('Form Submited')
    }

    render() {
        const {fullName, email, password} = this.state;
        console.log(this.state)

        return (
            <div>
                <h2>Sign Up Now!</h2>
                <form action="" onSubmit={this.formHandler }>
                   <p>
                       <label htmlFor="">Full Name</label>
                       <input
                           type="text"
                           name="fullName"
                           placeholder="Your name"
                           value={fullName}
                           onChange={this.inputHandler}
                       />
                   </p>
                   <p>
                       <label htmlFor="">Email</label>
                       <input
                           type="email"
                           name="email"
                           placeholder="Your email"
                           value={email}
                           onChange={this.inputHandler}
                       />
                   </p>
                   <p>
                       <label htmlFor="">Password</label>
                       <input
                           type="password"
                           name="password"
                           placeholder="password"
                           value={password}
                           onChange={this.inputHandler}
                       />
                   </p>
                    <button type="submit">Sign Up </button>
                    <button type="reset">X</button>
                </form>
            </div>
        );
    }
}

export default SignUp;