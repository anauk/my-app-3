import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Page extends Component {
    static defaultProps = {
        user: 'undefined user',
        photos: []
    };

    render() {
        const {name} = this.props.loggedUser;
        const {photos} = this.props.photos;
        const {pages} = this.props.page;

        return (
            <div>
            <p>{name} has {photos.length} photos</p>
                <div className="list-group">
                    {pages.map(item => {
                        return <Link className="list-group-item list-group-item-action"
                                     key={item.id}
                                     to={`/pages/${item.id}`}>
                            {item.title}
                        </Link>
                    })}</div>
            </div>
        )

    }
}

function mapStateToProps(state){
    return {
        loggedUser: state.user,
        page: state.page,
        photos: state.photo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userActions: bindActionCreators(userActions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);
