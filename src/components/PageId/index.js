import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageId extends Component {
    render() {
        const {pages} = this.props.page;
        const {pageId} = this.props.match.params;
        const page = pages.find(item => item.id === pageId);

        console.log(this.props);
        return (
            <div>
                <h2>{!page ? 'Page is not found' : page.title}</h2>
                <p>{!page ? 'Page is not found' : page.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.page
    }
}

export default connect(mapStateToProps)(PageId);