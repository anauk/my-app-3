import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return{ photos: state.photo }
}

class MainLayout extends Component{
    render(){
        const { photos } = this.props.photos;
        const {pathname} = this.props.location;
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">FS-7</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`${pathname === '/'? 'active':''} nav-link`} to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname === '/users'? 'active':''} nav-link`} to='/users'>Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${pathname === '/pages'? 'active':''} nav-link`} to='/pages'>Pages{photos.length > 0 ? `(${photos.length })` : ''}</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main>{this.props.children}</main>
            </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(MainLayout));