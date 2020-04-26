import React from 'react';
import { Page } from '@/layout/Page';
import TypeManageTitle from '@/component/TypeManageTitle';

const HeroList = () => {

    function add() {

    };

    function init() {

    };

    return (
        <Page>
            <TypeManageTitle name='物品' add={add} init={init} />
        </Page>
    );

};

export default HeroList;