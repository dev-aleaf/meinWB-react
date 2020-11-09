import React, { useState } from 'react';
import MWNavBar from './MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

function Login(){
    
    const loggUser = JSON.parse(localStorage.getItem("userMW"));
    if(loggUser)
    {
        swal("Achtung!", "Du bist schon eingelogt", "info")
        .then((close)=>{
            window.location.replace("/");
        });
    }

    const [user, setData] = useState({
        email: "",
        password: ""
    });

    const url = 'http://localhost:3030/user/log-in';

    function handleChange(event){
        const {name, value} = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });
        //console.log(user);
    }//handleChange

    function handleSubmit(event){
        event.preventDefault();
        axios.post(url, user,{headers:{
            "Content-Type": "application/json"},
        })
          .then((result) => {
            const respMessage = JSON.stringify(result.data.message);
            const success = result.data.success;
            if(success)
            {
                const foundUser = result.data.data;
                const mess = result.data.message;
                if(foundUser != null)
                {
                    localStorage.setItem("userMW", JSON.stringify(foundUser));
                    window.location.replace("/");
                }
                else
                    swal("Achtung!", mess, "warning");
            }
            else
            {
                console.log(respMessage);
                swal("Oops!", "Es gab ein Fehler beim Login", "error");
            }
          });

    }//handleSubmit

    return(
        //check if he is already signed in
        <div>
            <MWNavBar
                notLogged={true}
            />
            <Card className="mx-auto top-15" bg="light" style={{ width: '20rem' }}>
                <Card.Header>Log In</Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group  id="usernameGroup">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            name="email"
                            onChange={handleChange}
                            placeholder="email@example.com"
                            type="email"
                            value={user.email}
                        />
                    </Form.Group>

                    <Form.Group  id="passwordGroup">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            onChange={handleChange}
                            type="password" 
                            value={user.password}
                        />
                    </Form.Group>
                    <Button block variant="secondary" type="submit">Log In</Button>
                </Form>
            </Card>

            <Card className="mx-auto top-5" bg="light" style={{ width: '20rem' }}>
                <Card.Header>Nicht schon angemeldet?</Card.Header>
                    <Button block 
                        variant="primary" 
                        type="submit" 
                        onClick={() => window.location.replace("/userForm")}
                    >Sign Up</Button>
                </Card>
        </div>
    );
}

export default Login;