import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import WordList from './WordList';
import DetailWord from './DetailWord';
import WahlenArt from './WahlenArt';


function App(){
    return (
        <div>
            <Router>
                    <Switch>
                        <Route path="/" exact component={() => <Home />} />
                        <Route path="/wordList" exact component={() => <WordList />} />
                        <Route path="/wordDetail" exact component={() => <DetailWord />} />
                        <Route path="/wordType" exact component={() => <WahlenArt />} />
                        {/* <Route path="/contact" exact component={() => <Contact />} /> */}
                    </Switch>
            </Router>
        </div>
    );
}

export default App;