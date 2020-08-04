import React from 'react';
import MWNavBar from './MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';

function Login(){
    return(
        <div>
            <MWNavBar/>
            <Card bg="light" style={{ width: '20rem' }}>
                <Card.Header>Log In</Card.Header>
                <Form >
                    <Form.Group  id="usernameGroup">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Benutzername" />
                    </Form.Group>

                    <Form.Group  id="passwordGroup">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Button block variant="secondary" type="submit">Log In</Button>
                </Form>
            </Card>
        </div>
    );
}

export default Login;