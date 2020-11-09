import React, { useEffect, useState }  from 'react';
import MWNavBar from '../MWNavBar';
import { Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

function SubstantiveForm(){
    
    const user = JSON.parse(localStorage.getItem("userMW"));
    if(user  == null)
        window.location.replace("/login");
    const idUser = user.idUser;
    
    const urlA = 'http://localhost:3030/word/add/' + idUser;
    const urlEdit = 'http://localhost:3030/word/edit';
    
    const [substantiv, setWordComponents] = useState({
        wordType: "s",
        wordName: "",
        genre: "Das",
        plural: "",
        wordDescript: ""
    });

    const [editName, toggleEditName] = useState(false);

    function handleSubsCompChange(event){
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
    }//handleSubsCompChange

    function handleSubmit(event){
        event.preventDefault();
        //console.log(substantiv);

        let actionUrl = "";
        if(editName)
            actionUrl = urlEdit;
        else
            actionUrl = urlA;

        axios.post(actionUrl, substantiv, {headers:{
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
                const exists = result.data.exist;
                //console.log(exists);
                if(!exists)
                {
                    title = "Erfolg!";
                    swType = "success";
                    setWordComponents({
                        wordType: "s",
                        wordName: "",
                        genre: "",
                        plural: "",
                        wordDescript: ""
                    });
                }
                toggleEditName(false);
                swal(title, "Substantiv "+respMessage, swType);
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
        //console.log("edit "+toEdit);
        //console.log(stWord);
        if(toEdit)
        {
            localStorage.setItem("edit", JSON.stringify(false));
            const stAnder = {
                idUser: stWord.idUser,
                idWord: stWord.idWord,
                wordType: "s",
                wordName: stWord.wordName,
                genre: stWord.genre,
                plural: stWord.plural,
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
                <Card.Header>Substantiv</Card.Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group  id="wordNameGroup">
                        <Form.Label>Substantiv</Form.Label>
                        <Form.Control
                            name="wordName"
                            onChange={handleSubsCompChange}
                            type="text"
                            placeholder="Wort"
                            value={substantiv.wordName} />
                    </Form.Group>

                    <Form.Group  id="genderGroup">
                        <Form.Label>Geschlecht</Form.Label>
                        <Form.Control as="select"
                            name="genre"
                            onChange={handleSubsCompChange}
                            value={substantiv.genre}>
                            <option>Das</option>
                            <option>Der</option>
                            <option>Die</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group  id="pluralGroup">
                        <Form.Label>Plural</Form.Label>
                        <Form.Control
                            name="plural"
                            onChange={handleSubsCompChange}
                            placeholder="Plural"
                            type="text"
                            value={substantiv.plural} />
                    </Form.Group>

                    <Form.Group id="descriptionGroup">
                        <Form.Label>Beschreibung</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="wordDescript"
                            onChange={handleSubsCompChange}
                            placeholder="Beschreibung"
                            rows="2"
                            value={substantiv.wordDescript} />
                    </Form.Group>
                    <Button block variant="primary" type="submit">{editName ? "Bearbeiten" : "Senden"}</Button>
                </Form>
            </Card>
        </div>
    ));
}

export default SubstantiveForm;