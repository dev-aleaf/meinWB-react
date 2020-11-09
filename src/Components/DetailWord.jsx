import React, { useEffect, useState } from 'react';
import { Card,Table, Button } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import swal from 'sweetalert';

import MWNavBar from './MWNavBar';

function DetailWord(){

    const user = JSON.parse(localStorage.getItem("userMW"));
    if(user  == null)
        window.location.replace("/login");

    const [word, setWordData] = useState({
        idWord: 0,
        wordType: '',
        wordName: '',
        partizipII: '',
        genre: '',
        plural: '',
        wordDescript: '',
        idUser: 0
    });

    const [wordType, setWordType] = useState('');

    async function editWord(event){
        const toEdit = true;
        localStorage.setItem("edit", JSON.stringify(toEdit));
        switch (word.wordType) {
            case 'a':
                window.location.replace("/otherForm");
                break;
            case 's':
                window.location.replace("/substantiveForm");
                break;
            case 'v':
                window.location.replace("/verbForm");
                break;
        
            default:
                break;
        }//switch
        /*
        const url = "http://localhost:3030/word/edit";
        const result = await sendPost(url);
        const success = await result.data.success;
        if(success)
        {
            localStorage.removeItem("word");
            swal("Erfolg!", "Wort richtig bearbeitet", "success")
            .then(()=>{
                window.location.replace("/DetailWord");
            });
        }
        else
        {
            const respMessage = result.data.message;
            console.log(respMessage);
            swal("Oops!", "Es gab einen Fehler beim Löschen", "error");
        }*/
    }//editWord

    function askDelete(){
        swal({
            title: "Bist du sicher?",
            text: "Willst du das Wort löschen?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((del) => {
            if (del)
                deleteWord();
          });
    }//askDelete

    async function deleteWord(){
        const url = "http://localhost:3030/word/delete";
        const result = await sendPost(url);
        const success = await result.data.success;
        //console.log(result.data);
        if(success)
        {
            localStorage.removeItem("word");
            swal("Erfolg!", "Wort richtig gelöscht", "success")
            .then(()=>{
                window.location.replace("/wordList");
            });
        }
        else
        {
            const respMessage = result.data.message;
            console.log(respMessage);
            swal("Oops!", "Es gab einen Fehler beim Löschen", "error");
        }
        
    }//deleteWord

    function sendPost(url){
        return axios.delete(url, {headers:{
            "Content-Type": "application/json"},//Authorization: "token"
            data:{"idUser": word.idUser,//idUser idWord
                "idWord": word.idWord
            },
        });
    }//sendPost
    
    useEffect(()=>{
        const passedWord = JSON.parse(localStorage.getItem("word"));
        //STRINGIFY adds breaklines; so:
        const wtCleaned = passedWord.wordType.trim();
        passedWord.wordType = wtCleaned;
        //console.log("the passsed word is ");
        //console.log(passedWord);
        switch (wtCleaned) {
            case 'a': 
                setWordType('Anderes Wort');
                break;
            case 's':
                const genCleaned = passedWord.genre.trim();
                passedWord.genre = genCleaned;
                setWordType('Substantiv');
                break;
            case 'v': 
                setWordType('Verb');
                break;
            default:
                break;
        }
        setWordData(passedWord);

    },[]);//useEffect

    return(user != null &&(
        <div>
            <MWNavBar
                name={user.name}
            />
            <Card className="mx-auto top-15" style={{ width: '20rem'}}>
                <Card.Header>Wortdetail</Card.Header>
                <Card.Body>
                    <Card.Title>{wordType}</Card.Title>
                    <Table variant="warning" striped bordered hover>
                        <tbody>
                            <tr>
                                <td>{wordType}</td>
                                <td>{word.wordName}</td>
                            </tr>
                            {word.wordType === 's' && (
                                    <tr>
                                        <td>Geschlecht</td>
                                        <td>{word.genre}</td>
                                    </tr>) && (
                                    <tr>
                                        <td>Plural</td>
                                        <td>{word.plural}</td>
                                    </tr>)
                            }
                            {word.wordType === 'v' && (
                                <tr>
                                    <td>Partizip II</td>
                                    <td>{word.partizipII}</td>
                                </tr>)
                            }
                            

                            <tr>
                                <td>Beschreibung</td>
                                <td>{word.wordDescript}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button type="button" variant="primary" onClick={editWord}><EditIcon/></Button>
                    <Button type="button" variant="danger" onClick={askDelete}><DeleteIcon/></Button>
                    {/*<Card.Link name="edit" onClick={manageWord}></Card.Link>
                    <Card.Link name="delete" onClick={manageWord}></Card.Link>*/}
                </Card.Body>
            </Card>
        </div>
    ));
}




export default DetailWord;