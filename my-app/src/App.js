import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import Preloader from './components/common/Preloader/Preloader'
import BlogContainer from './components/Blog/BlogContainer';
import Login from './components/Login/Login';
import { connect , Provider} from 'react-redux';
import {compose} from 'redux'
import {Initialized} from './actions/app-actions'
import {Route, withRouter, BrowserRouter, Redirect} from 'react-router-dom'
import store from './reducers/redux-store';
import { withSuspense } from './hoc/withSuspense';
const ConversationsContainer = React.lazy(() => import('./components/Conversations/ConversationsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  catchAllErrors = (PromiseRejectionEvent) => {
      alert("Some error occured");
      
    }
  componentDidMount() {
    
    this.props.Initialized();
    window.addEventListener("unhandledrejection", this.catchAllErrors);
  }
  componentWillUnmount() {
    
    
    window.removeEventListener("unhandledrejection", this.catchAllErrors);
  }
  
  render()
 { 
   if (!this.props.initialized){
    return <Preloader />
   }
  return (
   <div className = 'app-wrapper'>
     <HeaderContainer />
    
     <Route path = "/profile/:userID?" render = {withSuspense(ProfileContainer)}/>
     <div class="container">
  
  <Route exact path = "/" render= {() => <Redirect to={"/profile"}/>}/>   
  <Route path = "/profile" render = {() => <BlogContainer />}/>   
  <Route path = "/blog" render = {() => <BlogContainer />}/> 
  <Route path = "/users" render = {() => <UsersContainer />}/> 
  <Route path = "/conversations" render = {withSuspense(ConversationsContainer)}/>
  <Route path = "/login" render = {() => <Login />}/>


     </div> 
     
     </div>
  );
}
}


const mapStateToProps = state => ({
  initialized: state.app.initialized
})



let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {Initialized}))(App)

const ReactApp = props => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store = {store}>
  <AppContainer /> 
  </Provider>
  </BrowserRouter>
}

export default ReactApp;