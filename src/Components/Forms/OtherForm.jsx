import React, { useEffect, useState }  from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

function OtherForm(){
    const user = JSON.parse(localStorage.getItem("userMW"));
    if(user  == null)
        window.location.replace("/login");
    const idUser = user.idUser;

    const urlA = 'http://localhost:3030/word/add/' + idUser;
    const urlEdit = 'http://localhost:3030/word/edit';
    
    const [ander, setWordComponents] = useState({
        wordType: "a",
        wordName: "",
        wordDescript: ""
    });

    const [editName, toggleEditName] = useState(false);

    function handleAnderCompChange(event){
        const elementName = event.target.name;
        let elementValue = "";
        if(elementName === "wordName")
            elementValue = (event.target.value).trim();
        else
            elementValue = event.target.value;

        setWordComponents(prevCompValues => {
            return {
                /* By deestructuring previous value will only change the new value*/
                ...prevCompValues,
                [elementName]: elementValue
            }
        });
    }//handleAnderCompChange

    function handleSubmit(event){
        event.preventDefault();
        //console.log(ander);
        let actionUrl = "";
        if(editName)
            actionUrl = urlEdit;
        else
            actionUrl = urlA;
        axios.post(actionUrl, ander, {headers:{
            "Content-Type": "application/json"},
        })
          .then((result) => {
            const respMessage = JSON.stringify(result.data.message);
            const success = result.data.success;
            //console.log(result.data);
            if(success)
            {
                let title = "Achtung!";
                let swType= "info";
                if(!result.data.exist)
                {
                    title = "Erfolg!";
                    swType = "success";
                    setWordComponents({
                        wordType: "a",
                        wordName: "",
                        wordDescript: ""
                    });
                }
                toggleEditName(false);
                swal(title, "Ander "+respMessage, swType);
                
            }
            else
            {
                console.log(respMessage);
                swal("Oops!", "Es gab ein Fehler beim Einfügen", "error");
            }
          });
    }//handleSubmit

    useEffect(()=>{
        const stWord = JSON.parse(localStorage.getItem("word"));
        const toEdit = JSON.parse(localStorage.getItem("edit"));
        //console.log("edit "+toEdit);
        //console.log(stWord);
        if(toEdit)
        {
            localStorage.setItem("edit", JSON.stringify(false));
            const stAnder = {
                idUser: stWord.idUser,
                idWord: stWord.idWord,
                wordType: "a",
                wordName: stWord.wordName,
                wordDescript: stWord.wordDescript
            };
            setWordComponents(stAnder);
            toggleEditName(true);
        }
    },[]);

    return (user != null &&(
        <div>
            <MWNavBar
                name={user.name}
            />
            <Card className="mx-auto top-15" bg="light" style={{ width: '20rem' }}>
                <Card.Header>Anderes Wort</Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group  id="wordNameGroup">
                        <Form.Label>Wort</Form.Label>
                        <Form.Control
                            name="wordName"
                            onChange={handleAnderCompChange}
                            type="text"
                            placeholder="Wort"
                            value={ander.wordName} />
                    </Form.Group>

                    <Form.Group id="descriptionGroup">
                        <Form.Label>Beschreibung</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="wordDescript"
                            onChange={handleAnderCompChange}
                            placeholder="Beschreibung"
                            rows="2"
                            value={ander.wordDescript} />
                    </Form.Group>
                    <Button block variant="primary" type="submit">{editName ? "Bearbeiten" : "Senden"}</Button>
                </Form>
            </Card>
        </div>
    ));
}

export default OtherForm;