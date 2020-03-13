import React from 'react';
import  { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Register extends React.Component {
   state = {
       username:'',
       email:'',
       password:'',
       passwordConfirmation:''
   }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
   handleSubmit = event => {
       event.preventDefault();
   }
    render() {
        const { username, email, password, passwordConfirmation }  = this.state;
        return (
           <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column style={{ maxWidth: 450  }}>
                <Header as="h2" icon color="black" textAlign="center">
                    <Icon name="bullhorn" color="black" />
                    Register for WalkieTalkies
                </Header>
                <Form size="large">
                    <Segment stacked>
                    <Form.Input fluidname="username" icon="user" iconPosition="left" 
                    placeholder="username" onChange={this.handleChange} value={username}
                    type="text" />

                    <Form.Input fluidname="email" icon="mail" iconPosition="left" 
                    placeholder="Email Address" onChange={this.handleChange} value={email}
                    type="email" />

                    <Form.Input fluidname="password" icon="lock" iconPosition="left" 
                    placeholder="password" onChange={this.handleChange} value={password}
                    type="password" />

                    <Form.Input fluidname="passwordConfirmation" icon="repeat" iconPosition="left" 
                    placeholder="Password Confirmation" onChange={this.handleChange} value={passwordConfirmation}
                    type="password" />
                    
                    <Button color="black" fluid size="large">Submit</Button>
                    </Segment>
                </Form>
                
                <Message>Do you already have an account?<Link to="/login">Login</Link></Message>

            </Grid.Column>

           </Grid>
        )
    }
}

export default Register;