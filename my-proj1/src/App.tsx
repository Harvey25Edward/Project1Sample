import React from 'react';
import './App.css';
import { Pnavbar } from './components/navbar/ProjNavBar.'
import { Home } from './home/Home';
import LoginComponent  from './components/login-component/LoginContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersDisplayComponent from './components/Get-All-Users-Component/UsersDisplayContainer'
import { Provider } from 'react-redux';
import { store } from './Store';
import ReimbursementsByStatusDisplayComponent  from './components/Get-All-Reimbursements-By-Status-Component/ReimbursementByStatusDisplayContainer';
import {UpdateUserComponent} from './components/Update-User-component/UpdateUserComponent'
import  UserByIdDisplayComponent  from './components/Get-User-By-Id-Component/Get-User-By-Id-Container';
import { UpdateReimbursementComponent } from './components/Update-Reimbursement-Component/UpdateReimbursementComponent';
import ReimbursementByUserComponent from './components/Get-Reimbursement-By-User-ID/ReimbursementByUserContainer'
const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
     <Pnavbar/>
     <Switch>
     <Route path='/login' component={LoginComponent}/>
     <Route path='/users/id' component={UserByIdDisplayComponent} />
      <Route path='/users/update/form' component={UpdateUserComponent} />
              <Route path='/users/allusers/' component={UsersDisplayComponent} />
              <Route path='/reimbursements/status/' component={ReimbursementsByStatusDisplayComponent} />
              <Route path='/reimbursements/update/form' component={UpdateReimbursementComponent} />
              <Route path='/reimbursements/user/display' component={ReimbursementByUserComponent} />
              <Route path='/'>
              
               
              </Route>
     </Switch>  
     </Router>
     </Provider>
    </div>
  );
}

export default App;
