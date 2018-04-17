import React, { Component } from 'react';
import { Container, Panel, Button } from '@extjs/ext-react';

Ext.require([
    'Ext.MessageBox'
]);

export default class MyMisc extends Component {

    onConfirmResult(buttonId, value, opt) {
        Ext.toast(`User clicked ${buttonId} button.`);
    }

    onPromptResult(buttonId, value) {
        Ext.toast(`User clicked ${buttonId} and entered value "${value}".`);
    }

    render() {
        return (
            <Container>
                <Panel shadow title="Modal Window" layout={{type: 'vbox', align: 'stretch'}}>
                    <Button handler={() => Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.')} text="Alert"/>
                    <Button handler={() => Ext.Msg.prompt('Welcome!', "What's your first name?", this.onPromptResult.bind(this))} text="Prompt"/>
                    <Button handler={() => Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", this.onConfirmResult.bind(this))} text="Confirm"/>
                </Panel>
            </Container>                
        )
    }

}