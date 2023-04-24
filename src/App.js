import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login';
import UserPage from './userpage';
import AddUserPage  from './adduserpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/userpage/:id/:email/:name/:contact/:hobby" component={UserPage} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;



