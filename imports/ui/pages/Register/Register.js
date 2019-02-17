import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import components

// import styles
import './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      defaultPage: '/',
      errMsg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.loggedIn) {
      return this.props.history.push('/');
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.loggedIn) {
      nextProps.history.push('/');
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password, defaultPage } = this.state;

    console.log(email, password, defaultPage);
    Accounts.createUser({ email, password, defaultPage }, err => {
      if (err) {
        this.setState({ errMsg: err.reason });
        return console.log(err);
      }
    });
  }

  render() {
    if (this.props.loggedIn) {
      return null;
    }

    const { errMsg } = this.state;
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <center>
                <br/>
                <br/>
                <br/>
                <h1>Register</h1>
                <h4 style={{color: "grey"}}>Welcome and have fun.</h4>
                <TextField
                    style={{ display: "block"}}
                    className="outlined-bare"
                    defaultValue="Email"
                    margin="normal"
                    variant="outlined"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    placeholder="Email"
                    required
                />
                <TextField
                    style={{display: "block"}}
                    width="300px"
                    className="outlined-bare"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                    placeholder="Password"
                    required

                />
                <TextField
                    style={{display: "block"}}
                    width="300px"
                    className="outlined-bare"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={this.state.confirmPassword}
                    onChange={e => this.setState({ confirmPassword: e.target.value })}
                    placeholder="Confirm Password"
                    required
                />
                <Button type="submit" style={{backgroundColor: "#c1b05c", marginTop: "20px", width: "250px", display: "block"}} size="large" variant="contained">
                  Register
                </Button>
              </center>
          </form>
        </div>
    );
  }
}

export default Register;
