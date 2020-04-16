import React from 'react';
import Model from '@/models';
import Redirect from './Redirect';
import whiteList from '@/config/whiteList';
import { useLocation } from 'react-router-dom';

const { getState } = Model;

export default ({ routes = [], component: C }) => {
    const { user } = getState();
    const { pathname: name } = useLocation();
    const urlBol = whiteList.includes(name);
    const Module = <C routes={routes} />;
    if (user.token) return urlBol ? <Redirect to='/' /> : Module;
    else return urlBol ? Module : <Redirect to='/user/login' />;
};