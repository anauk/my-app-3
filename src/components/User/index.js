import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import { connect } from 'react-redux';

class User extends Component{
    render(){
        const { name, loading} = this.props.loggedUser;
        const { changeName } = this.props.userActions;
        return(
            <div>
                <h1>You are logged in as:
                    <strong>
                        {name}
                    </strong></h1>
                <button onClick={()=>changeName('Taras')}>
                    Change user
                </button>
                {
                    loading?
                        (<p>Loading ...</p>):
                        (<p>Data was update</p>)
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {loggedUser: state.user}
}

function mapDispatchToProps(dispatch){
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);