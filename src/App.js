import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Home from './components/Home';
import agent from './agent';


const mapStateToProps = (state) => {
    console.log(state);
    return {appLoaded: state.common.appLoaded, appName: state.common.appName, redirectTo: state.common.redirectTo}
};

const mapDispatchToProps = dispatch => ({
    onRedirect: () =>
        dispatch({type: 'REDIRECT'}),
    onload: (payload, token) =>
        dispatch({type: 'APP_LOAD', payload, token})
})

class App extends React.Component {
    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }

        this.props.onload(token ? agent.Auth.current() : null, token);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        if (this.props.appLoaded) {
            return (
                <div>
                    <Header
                        appName={this.props.appName}
                        currentUser={this.props.currentUser} />
                    {this.props.children}
                </div>
            );
        }
        return (
            <div>
                <Header
                    appName={this.props.appName}
                    currentUser={this.props.currentUser} />
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);