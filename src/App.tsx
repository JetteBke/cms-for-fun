import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Contacts} from "./Contacts/Contacts";
import {AddContact} from "./Contacts/AddContact";
import {EditContact} from "./Contacts/EditContact";
import {ViewContact} from "./Contacts/ViewContact";

export default function BasicExample() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/list">Alle Kontakte</Link>
            </li>
            <li>
              <Link to="/add">Kontakt hinzufügen</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/list" component={Contacts}/>
            <Route path="/add" component={AddContact}/>
            <Route path="/edit" component={EditContact}/>
            <Route exact path="/view/:contactId" component={ViewContact}/>
          </Switch>
        </div>
      </Router>
  );
}
