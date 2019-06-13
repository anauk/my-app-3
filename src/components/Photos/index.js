import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as photoActions from '../../actions/photoActions';


class Photos extends Component{
    onSubmit = (val)=>{
        this.props.photoActions.addPhoto(val)
    }
    render(){
        const { photos, fetching } = this.props.photos;
        const { deletePhoto } = this.props.photoActions;
        return(
            <div>
                {fetching?
                <p>Loading...</p>:
                <p>Loaded: {photos.length}</p>}
                <List photos={photos}
                      onDelete={ deletePhoto}/>
                      <hr/>
                      <Form onSubmit={this.onSubmit}
                            fetching={fetching}/>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        photos: state.photo
    }
}
function mapDispatchToProps(dispatch){
    return {
        photoActions: bindActionCreators(photoActions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Photos);