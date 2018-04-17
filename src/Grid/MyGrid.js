import React, { Component } from 'react';
import { Grid, Toolbar, Button, Column, SearchField } from '@extjs/ext-react';
import data from './data';
import { small, medium } from '../responsiveFormulas'

export default class MyGrid extends Component {

    store = Ext.create('Ext.data.Store', {
        fields: ['key', 'name', 'status'],
        data
    });

    render() {
        return (
            <Grid store={this.store}>
                <Toolbar docked="top">
                    <SearchField 
                        ui="faded" 
                        ref={field => this.query = field} 
                        placeholder="Search..." 
                        onChange={this.onSearch.bind(this)}
                        responsiveConfig={{
                            [small]: { 
                                flex: 1
                            }, 
                            [medium]: {
                                flex: undefined
                            }
                        }}
                    />
                </Toolbar>
                <Column
                    text="ID"
                    dataIndex="key"
                    flex={1}
                    resizable
                />
                <Column
                    text="Name"
                    dataIndex="name"
                    flex={3}
                    resizable
                />
                <Column
                    text="Status"
                    dataIndex="status"
                    flex={2}
                    resizable
                    renderer={this.renderStatus.bind(this)}
                />
            </Grid>

        )
    }

    /**
     * Filter the store when the user types in the search box
     */
    onSearch = () => {
        const query = this.query.getValue().toLowerCase(); 
        this.store.clearFilter();

        if (query.length) this.store.filterBy(record => {
            const { name, status } = record.data;

            return name.toLowerCase().indexOf(query) !== -1 || 
                status.toLowerCase().indexOf(query) !== -1;
        });
    }

    renderStatus = (value) => {
        return <span style={"Employed" === value ? {color: "green"} : {color: "red"}}>{value}</span>
    }
}