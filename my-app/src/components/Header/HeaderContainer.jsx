import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {getMeThunk} from '../../state/auth-reducer'
import Header from './Header';


class HeaderContainer extends React.Component {
    
    render() {
        
        return  <Header {...this.props} />
       
    }

    componentDidMount() {
        this.props.getMeThunk();
        
    }
    

};


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
    
});



export default connect(mapStateToProps, {getMeThunk})(HeaderContainer)