import React from 'react';

import 'CSS/App.css';
import {Route} from "react-router";
import TopBar from "./components/TopBar";
import WriteNewContent from "./components/WriteNewContent";
import ContentDetail from "./components/ContentDetail";
import Board from "./components/Board";


function App() {

  return (
    <div className="App">

        <TopBar/>

        <div style={ { display: "flex", alignItems: "center", justifyContent: "center" } }>

            <Route exact path="/" component={Board} />
            <Route path="/board" component={Board} />
            <Route path="/write" component={WriteNewContent} />
            <Route path="/content" component={ContentDetail} />

        </div>

    </div>
  );
}

export default App;

