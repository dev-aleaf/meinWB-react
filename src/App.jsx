import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Home';
import WordList from './Components/WordList';
import DetailWord from './Components/DetailWord';
import ChooseType from './Components/ChooseType';
import OtherForm from './Components/Forms/OtherForm';
import SubstantiveForm from './Components/Forms/SubstantiveForm';
import VerbForm from './Components/Forms/VerbForm';
import UserForm from './Components/Forms/UserForm';
import Login from './Components/Login';


function App(){
    return (
        <div>
            <Router>
                    <Switch>
                        <Route path="/" exact component={() => <Home />} />
                        <Route path="/wordList" exact component={() => <WordList />} />
                        <Route path="/wordDetail" exact component={() => <DetailWord />} />
                        <Route path="/chooseType" exact component={() => <ChooseType />} />
                        <Route path="/otherForm" exact component={() => <OtherForm />} />
                        <Route path="/substantiveForm" exact component={() => <SubstantiveForm />} />
                        <Route path="/verbForm" exact component={() => <VerbForm />} />
                        <Route path="/userForm" exact component={() => <UserForm />} />
                        <Route path="/login" exact component={() => <Login />} />
                        {/* <Route path="/contact" exact component={() => <Contact />} /> */}
                    </Switch>
            </Router>
        </div>
    );
}

export default App;