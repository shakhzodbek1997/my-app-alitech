import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <p>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your Name"
                            onChange={this.inputHandler}
                        />
                    </p>
                    <p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            onChange={this.inputHandler}
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            onChange={this.inputHandler}
                        />
                    </p>
                    <button>Sign Up</button>
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}

export default SignUp;