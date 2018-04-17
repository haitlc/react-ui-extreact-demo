import React, { Component } from 'react';
import { Tree } from '@extjs/ext-react-treegrid';
import data from './data';

export default class MyTree extends Component {

    store = Ext.create('Ext.data.TreeStore', {
        rootVisible: true,
        root: data
    })

    render() {
        return (
            <Tree store={this.store} shadow/>
        )
    }

}