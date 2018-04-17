import React, { Component } from 'react'
import { Transition, Container, TitleBar, Button, Sheet, Panel } from '@extjs/ext-react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { medium, large } from './responsiveFormulas';
import Home from './Home/Home';
import MyForm from './Form/MyForm';
import MyGrid from './Grid/MyGrid';
import MyTree from './Tree/MyTree';
import MyMisc from './Other/MyMisc';
import About from './About/About';
import NavMenu from './NavMenu';

/**
 * The main application view and routes
 */
class Layout extends Component {

    baseUrl = "/react-ui-extreact-demo";

    state = {
        showAppMenu: false
    }

    toggleAppMenu = () => {
        this.setState({ showAppMenu: !this.state.showAppMenu });
    }

    onHideAppMenu = () => {
        this.setState({ showAppMenu: false });
    }

    navigate = (path) => {
        this.setState({ showAppMenu: false });
        this.props.history.push(this.baseUrl + path);
    }

    render() {
        const { showAppMenu } = this.state;
        const { location } = this.props;

        const navMenuDefaults = {
            onItemClick: this.navigate,
            selection: location.pathname
        }

        return (
            <Container fullscreen layout="fit">
                <TitleBar title="ExtReact Sample" docked="top">
                    {Ext.platformTags.phone && (
                        <Button align="left" iconCls="x-fa fa-bars" handler={this.toggleAppMenu} ripple={false}/>
                    )}
                </TitleBar>
                {Ext.platformTags.phone ? (
                    <Sheet displayed={showAppMenu} side="left" onHide={this.onHideAppMenu}>
                        <Panel scrollable title="ExtReact Sample">
                            <NavMenu {...navMenuDefaults} width="250"/>
                        </Panel>
                    </Sheet>
                ) : (
                    <Panel scrollable docked="left" shadow zIndex={2}>
                        <NavMenu
                            {...navMenuDefaults}
                            responsiveConfig={{
                                [medium]: {
                                    micro: true,
                                    width: 56
                                },
                                [large]: {
                                    micro: false,
                                    width: 200
                                }
                            }}
                        />
                    </Panel>
                )}
                <Transition type="fade">
                    <Switch>
                        <Route path={this.baseUrl+"/"} component={MyForm} exact/>
                        <Route path={this.baseUrl+"/form"} component={MyForm}/>
                        <Route path={this.baseUrl+"/grid"} component={MyGrid}/>
                        <Route path={this.baseUrl+"/tree"} component={MyTree}/>
                        <Route path={this.baseUrl+"/other"} component={MyMisc}/>
                        <Route path={this.baseUrl+"/about"} component={About}/>
                    </Switch>
                </Transition>
            </Container>
        );
    }
}

export default withRouter(Layout);