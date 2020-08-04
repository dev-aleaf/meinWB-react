import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import WordList from './WordList';
import DetailWord from './DetailWord';
import ChooseType from './ChooseType';
import OtherForm from './Forms/OtherForm';
import SubstantiveForm from './Forms/SubstantiveForm';
import VerbForm from './Forms/VerbForm';
import UserForm from './Forms/UserForm';
import Login from './Login';


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