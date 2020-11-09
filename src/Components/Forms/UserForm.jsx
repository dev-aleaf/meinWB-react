import React, { useState } from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';

function UserForm(){
    const loggUser = JSON.parse(localStorage.getItem("userMW"));
    if(loggUser)
    {   
        swal({
            title: "Achtung!", 
            text: "Du musst ausloggen, um ein neues Konto zu erstellen. Willst du dich ausloggen?", 
            icon: "warning",
            dangerMode: true,
            buttons: ["Nein", "Ausloggen"]
        })
        .then((logOut)=>{
            if(logOut)
                localStorage.removeItem("userMW");
            else
                window.location.replace("/");
        });
    }


    const urlAddU = 'http://localhost:3030/user/sign-up';

    const [newUser, setDataNU] = useState({
        name: "",
        email: "",
        passw: "",
    });

    function handleChange(event){
        const {name} = event.target;
        const {value} = event.target;

        setDataNU(prevData => {
            return {
                ...newUser,
                [name] : value
            };
        });
        //console.log(newUser);
    }//handleChange

    function handleSubmit(event){
        event.preventDefault();

        axios.post(urlAddU, newUser,{headers:{
            "Content-Type": "application/json"},
        })
          .then((result) => {
            const respMessage = JSON.stringify(result.data.message);
            const success = result.data.success;
            if(success)
            {
                let title = "Achtung!";
                let swType= "info";
                let loggUser = null;
                const exist = result.data.exist;
                if(!exist)
                {
                    title = "Erfolg!";
                    swType = "success";
                    loggUser = result.data.data;
                }
                swal(title, respMessage, swType)
                .then((yes)=>{
                    if(yes && !exist)
                    {   
                        localStorage.setItem("userMW", JSON.stringify(loggUser));
                        window.location.replace("/");
                    }
                });//then
            }
            else
            {
                console.log(respMessage);
                swal("Oops!", "Es gab ein Fehler beim Sign Up", "error");
            }
          });//then
    }//handleSubmit

    return(
        <div>
            <MWNavBar
                notLogged={true}
            />
            <Card className="mx-auto top-15" bg="light" style={{ width: '20rem' }}>
                <Card.Header>User</Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group  id="nameGroup">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            onChange={handleChange}
                            placeholder="Name(n)"
                            type="text" 
                            value={newUser.name}
                        />
                    </Form.Group>

                    <Form.Group  id="emailGroup">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            onChange={handleChange}
                            placeholder="jemand@beispiel.com"
                            type="email" 
                            value={newUser.email}
                         />
                    </Form.Group>

                    <Form.Group  id="passwordGroup">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="passw"
                            onChange={handleChange}
                            type="password"
                            value={newUser.passw}
                        />
                    </Form.Group>
                    <Button block variant="success" type="submit">Anmelden</Button>
                </Form>
            </Card>
        </div>
    );
}

export default UserForm;