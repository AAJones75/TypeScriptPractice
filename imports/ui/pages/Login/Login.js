import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import components

// import styles
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errMsg: null,
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
    const email = this.state.email;
    const password = this.state.password;
    console.log("Email", email);
    console.log("Password", password);
    Meteor.loginWithPassword(email, password, err => {
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
              <h1>Login Now</h1>
              <h4 style={{color: "grey"}}>Please login to continue using our app</h4>
            <TextField
                style={{width: "330px", display: "block"}}
                className="outlined-bare"
                placeholder="Email"
                margin="normal"
                variant="outlined"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
            />
            <TextField
                style={{width: "330px", display: "block"}}
                className="outlined-bare"
                placeholder="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
            />
              <Button type="submit" style={{backgroundColor: "#c1b05c", marginTop: "20px", width: "250px", display: "block"}} size="large" variant="contained">
                Login
              </Button>
           </center>
       </form>
      </div>
    );
  }
}

export default Login;

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
