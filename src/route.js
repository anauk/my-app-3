import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './components/Layouts/MainLayout';
import Home from './components/Home';
import Page from './components/Page';
import PageId from './components/PageId';

import App from './App';

export default (
    <BrowserRouter>
        <MainLayout>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={App}/>
            <Route path='/pages' component={Page}/>
            <Route path='/pages/:pageId' component={PageId}/>
        </MainLayout>
    </BrowserRouter>
)