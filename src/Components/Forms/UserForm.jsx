import React from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';

function UserForm(){
    return(
        <div>
            <MWNavBar/>
            <Card bg="light" style={{ width: '20rem' }}>
                <Card.Header>User</Card.Header>
                <Form >
                    <Form.Group  id="nameGroup">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name(n)" />
                    </Form.Group>

                    <Form.Group  id="emailGroup">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="jemand@beispiel.com" />
                    </Form.Group>

                    <Form.Group  id="usernameGroup">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Benutzername" />
                    </Form.Group>

                    <Form.Group  id="passwordGroup">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Button block variant="success" type="submit">Anmelden</Button>
                </Form>
            </Card>
        </div>
    );
}

export default UserForm;