import React, {Component} from 'react';

const initialState = {email: '', password: '', fullName: '', type: 'admin', bio: ''};

class SignUp extends Component {
    // state = {
    //  bu uslubda state yaratsa ham bo'laveradi
    // }
    constructor(props) {
        super(props);
        this.state = {initialState}
    }


    inputHandler = e => {
        e.preventDefault();
        console.log(e.target);
        const {name, value} = e.target;

        this.setState({[name]: value})

    }

    formHandler = e => {
        e.preventDefault();
        console.log('Form Submited')
    }

    resetHandler = () => {
        this.setState(initialState);
    }

    render() {
        const {fullName, email, password, type, bio} = this.state;
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
                    <h4>{fullName}</h4>

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
                    <h4>{email}</h4>

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
                    <h4>{password}</h4>

                    <p>
                        <select name="type" onChange={this.inputHandler} value={type}>
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                            <option value="admin">Admin</option>
                        </select>
                    </p>

                    <textarea name="bio" value={bio} onChange={this.inputHandler}/>

                    <button type="submit">Sign Up </button>
                    <button type="reset" onClick={this.resetHandler}>X</button>
                </form>
            </div>
        );
    }
}

export default SignUp;