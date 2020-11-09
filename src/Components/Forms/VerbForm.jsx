import React, { useEffect, useState }  from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

function VerbForm(){

    const user = JSON.parse(localStorage.getItem("userMW"));
    if(user  == null)
        window.location.replace("/login");
    const idUser = user.idUser;

    const urlA = 'http://localhost:3030/word/add/' + idUser;
    const urlEdit = 'http://localhost:3030/word/edit';

    const [verb, setWordComponents] = useState({
        wordType: "v",
        wordName: "",
        partizipII: "",
        wordDescript: ""
    });

    const [editName, toggleEditName] = useState(false);

    function handleVerbCompChange(event){
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
    }//handleVerbCompChange

    function handleSubmit(event){
        event.preventDefault();
        console.log(verb);

        let actionUrl = urlA;
        if(editName)
            actionUrl = urlEdit;

        axios.post(actionUrl, verb, {headers:{
            "Content-Type": "application/json"},
        })
          .then((result) => {
            const respMessage = JSON.stringify(result.data.message);
            const success = result.data.success;
            console.log(result.data);
            if(success)
            {
                let title = "Achtung!";
                let swType= "info";
                if(!result.data.exist)
                {
                    title = "Erfolg!";
                    swType = "success";
                    setWordComponents({
                        wordType: "v",
                        wordName: "",
                        partizipII: "",
                        wordDescript: ""
                    });
                }
                toggleEditName(false);
                swal(title, "Verb "+respMessage, swType);
                
            }
            else
            {
                console.log(respMessage);
                swal("Oops!", "Es gab einen Fehler beim Einfügen", "error");
            }
          });
    }//handleSubmit

    useEffect(()=>{
        const stWord = JSON.parse(localStorage.getItem("word"));
        const toEdit = JSON.parse(localStorage.getItem("edit"));
        console.log("edit "+toEdit);
        console.log(stWord);
        if(toEdit)
        {
            localStorage.setItem("edit", JSON.stringify(false));
            const stAnder = {
                idUser: stWord.idUser,
                idWord: stWord.idWord,
                wordType: "v",
                wordName: stWord.wordName,
                partizipII: stWord.partizipII,
                wordDescript: stWord.wordDescript
            };
            setWordComponents(stAnder);
            toggleEditName(true);
        }
    },[]);

    return(user != null &&(
        <div>
            <MWNavBar
                name={user.name}
            />
            <Card className="mx-auto top-15" bg="light" style={{ width: '20rem' }}>
                <Card.Header>Verb</Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group  id="verbGroup">
                        <Form.Label>Verb</Form.Label>
                        <Form.Control
                            name="wordName"
                            onChange={handleVerbCompChange}
                            placeholder="Verb"
                            type="text"
                            value={verb.wordName}
                        />
                    </Form.Group>

                    <Form.Group  id="partizipGroup">
                        <Form.Label>Partizip II</Form.Label>
                        <Form.Control
                            name="partizipII"
                            onChange={handleVerbCompChange}
                            placeholder="PartizipII"
                            type="text"
                            value={verb.partizipII}
                        />
                    </Form.Group>

                    <Form.Group id="descriptionGroup">
                        <Form.Label>Beschreibung</Form.Label>
                        <Form.Control as="textarea"
                            name="wordDescript"
                            onChange={handleVerbCompChange}
                            placeholder="Beschreibung"
                            rows="2"
                            value={verb.wordDescript}
                        />
                    </Form.Group>
                    <Button block variant="primary" type="submit">{editName ? "Bearbeiten" : "Senden"}</Button>
                </Form>
            </Card>
        </div>
    ));
}

export default VerbForm;