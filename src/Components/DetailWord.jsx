import React from 'react';
import { Card,Table } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MWNavBar from './MWNavBar';

function DetailWord(){
    return(
        <div>
            <MWNavBar/>
            <Card className="mx-auto top-15" style={{ width: '20rem'}}>
                <Card.Header>Wortdetail</Card.Header>
                {/*<Card.Body>
                    <Card.Title>Verb</Card.Title>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Verb</td>
                                <td>Verb</td>
                            </tr>

                            <tr>
                                <td>Partizip II</td>
                                <td>Partizip II</td>
                            </tr>

                            <tr>
                                <td>Beschreibung</td>
                                <td>Beschreibung</td>
                            </tr>
                        </tbody>
                    </Table>  
                    <Card.Link href="#"><EditIcon/></Card.Link>
                    <Card.Link href="#"><DeleteIcon/></Card.Link>
                </Card.Body>*/}
                <Card.Body>
                    <Card.Title>Substantiv</Card.Title>
                    <Table variant="warning" striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Substantiv</td>
                                <td>Substantiv</td>
                            </tr>

                            <tr>
                                <td>Geschlecht</td>
                                <td>Geschlecht</td>
                            </tr>

                            <tr>
                                <td>Plural</td>
                                <td>Plural</td>
                            </tr>

                            <tr>
                                <td>Beschreibung</td>
                                <td>Beschreibung</td>
                            </tr>
                        </tbody>
                    </Table>  
                    <Card.Link href="#"><EditIcon/></Card.Link>
                    <Card.Link href="#"><DeleteIcon/></Card.Link>
                </Card.Body>
                {/*<Card.Body>
                    <Card.Title>Anderes Wort</Card.Title>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Wort</td>
                                <td>Wort</td>
                            </tr>

                            <tr>
                                <td>Beschreibung</td>
                                <td>Beschreibung</td>
                            </tr>
                        </tbody>
                    </Table>  
                    <Card.Link href="#"><EditIcon/></Card.Link>
                    <Card.Link href="#"><DeleteIcon/></Card.Link>
                </Card.Body>*/}
            </Card>
        </div>
    );
}




export default DetailWord;