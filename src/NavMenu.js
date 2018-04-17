import React from 'react';
import PropTypes from 'prop-types';
import { TreeList } from '@extjs/ext-react';

Ext.require('Ext.data.TreeStore');

/**
 * The main navigation menu
 */
export default function NavMenu({ 
    onItemClick, 
    selection, 
    ...props 
}) {
    return (
        <TreeList 
            {...props}
            ui="nav"
            expanderFirst={false}
            onItemClick={(tree, item) => onItemClick(item.node.getId())}
            selection={selection}
            store={{
                root: {
                    children: [
                        //{ id: '/', text: 'Home', iconCls: 'x-fa fa-home', leaf: true },
                        { id: '/form', text: 'Form', iconCls: 'x-fa fa-wpforms', leaf: true },
                        { id: '/grid', text: 'Grid', iconCls: 'x-fa fa-table', leaf: true },
                        { id: '/tree', text: 'Tree', iconCls: 'x-fa fa-tree', leaf: true },
                        { id: '/other', text: 'Other', iconCls: 'x-fa fa-thumbs-up', leaf: true },
                        {/*{ id: '/about', text: 'About', iconCls: 'x-fa fa-info', leaf: true },*/}
                    ]
                }
            }}
        />        
    )
}

NavMenu.propTypes = {
    onSelectionChange: PropTypes.func,
    selection: PropTypes.string
};