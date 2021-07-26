import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Overview} from "./Overview";
import {AddContact} from "./Contacts/AddContact/AddContact";
import {EditContact} from "./Contacts/EditContact/EditContact";
import "./App.css"
import {FileUploader} from "./FileUpload/FileUploader";
import {DetailPage} from "./DetailPage";

export default function BasicExample() {
    return (
        <Router>
            <div>
                <div className='navbar'>
                    <Link className='navbarLink' to="/list">Alle Kontakte</Link>
                    <Link className='navbarLink' to="/add">Kontakt hinzufügen</Link>
                    <Link className='navbarLink' to="/fileUpload">Datei hochladen</Link>
                </div>

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/list" component={Overview}/>
                    <Route path="/add" component={AddContact}/>
                    <Route path="/edit/:contactId" component={EditContact}/>
                    <Route exact path="/view/:contactId" component={DetailPage}/>
                    <Route path="/fileUpload" component={FileUploader}/>
                </Switch>
            </div>
        </Router>
    );
}
