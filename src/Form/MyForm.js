import React, { Component } from 'react';
import { 
    Button, 
    FieldSet, 
    TextField, 
    TextAreaField, 
    SpinnerField,
    FormPanel,
    ComboBoxField,
    Container,
    ContainerField,
    DatePickerField,
    CheckBoxField,
    RadioField
 } from '@extjs/ext-react';
 import comboData from './combo';

export default class MyForm extends Component {

    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'value'],
        comboData
    });

    render() {
        const radioProps = {
            name: 'radios'
        };

        return (
            <FormPanel shadow>
                <FieldSet title="Text Input">
                    <TextField placeholder="Single-line" label="Singleline"></TextField>
                    <TextAreaField placeholder="Multi-line" label="Multiline"></TextAreaField>
                    <SpinnerField label="Number" stepValue={1} />
                    <DatePickerField
                        width={150}
                        value={new Date()}
                        destroyPickerOnHide
                        label="Date Field"
                        picker={{
                            yearFrom: 1990
                        }}
                    />
                </FieldSet>
                <FieldSet title="Buttons">
                    <Container>
                        <Button text="Default" ui="" />
                        <Button ui="action" iconCls="x-fa fa-search" />
                        <Button text="Search" ui="action" iconCls="x-fa fa-heart" />
                    </Container>
                </FieldSet>
                <FieldSet title="Dropdown">
                    <div>ComboBoxField Code Error</div>
                </FieldSet>
                <FieldSet title="Radio, Checkbox">
                    <ContainerField>
                        <RadioField {...radioProps} boxLabel="1" value="1" checked/>
                        <RadioField {...radioProps} boxLabel="2" value="2"/>
                        <RadioField {...radioProps} boxLabel="3" value="3"/>
                        <RadioField {...radioProps} boxLabel="4" value="4" disabled/>
                    </ContainerField>
                    <ContainerField>
                        <CheckBoxField boxLabel="1"/>
                        <CheckBoxField boxLabel="2" checked/>
                        <CheckBoxField boxLabel="3" />
                        <CheckBoxField boxLabel="4" disabled/>
                    </ContainerField>
                </FieldSet>
            </FormPanel>
        )
    }
}